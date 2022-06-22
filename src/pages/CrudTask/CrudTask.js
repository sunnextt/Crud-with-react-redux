import {
    Form,
    Input,
    Row,
    Col,
    Button,
    DatePicker,
    TimePicker,
    Card
} from 'antd';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { AddTaskDiv } from './styled';
import { addTask, getAllTasks, getUserProfile } from '../../redux/userSlice';
import timeConvert from '../../utils/timeCoverter';

const completeOptions = [
    { value: 0, label: 'No' },
    { value: 1, label: 'Yes' }
];

const CrudTask = () => {
    const { user: currentUser } = useSelector((state) => state.auth);
    const {
        users: { data }
    } = useSelector((state) => state.users);
    let dispatch = useDispatch();

    useEffect(() => {
        if (currentUser) {
            const company_id = currentUser.results.company_id;
            dispatch(getUserProfile({ company_id }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [toggle, setToggle] = useState(false);
    const [option, setOption] = useState();
    const [task_msg, setTask_msg] = useState();
    const [task_date, setTask_date] = useState();
    const [task_time, setTask_time] = useState();
    const [time_zone, setTime_zone] = useState();
    const [is_completed, setIs_completed] = useState();
    const [assigned_user, setAssigned_user] = useState();

    const toggleButton = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        if (!data) {
            setOption([]);
        } else {
            let ModifiedData = data.map((data) => {
                return {
                    value: data.name,
                    label: (
                        <div
                            key={data.name}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}
                        >
                            <h5>{data.name}</h5>
                            <h5>{data.role_name}</h5>
                        </div>
                    )
                };
            });

            setOption(ModifiedData);
        }
    }, [data]);

    const onChangeDate = (date, dateString) => {
        setTask_date(dateString);
    };

    const onChangeTime = (time, timeString) => {
        setTask_time(timeConvert(timeString));
    };
    const onChangeTimeZone = (time, timeString) => {
        setTime_zone(timeConvert(timeString));
    };

    const handleChange = (option) => {
        setAssigned_user(option.value);
    };
    const handleIsComplete = (option) => {
        setIs_completed(option.value);
    };

    const Save = (e) => {
        e.preventDefault();
        const company_id = currentUser.results.company_id;
        dispatch(
            addTask({
                company_id,
                assigned_user,
                task_date,
                task_time,
                is_completed,
                time_zone,
                task_msg
            })
        )
            .then(() => {
                dispatch(getAllTasks({ company_id }));
                toggleButton()
            })
            .catch(() => {});
    };

    return (
        <div style={{ padding: '1rem 0' }}>
            <AddTaskDiv>
                <h6>Tasks 0</h6>
                <button type="link" onClick={toggleButton}>
                    +
                </button>
            </AddTaskDiv>
            <div style={{ display: toggle ? 'flex' : 'none' }}>
                <Card style={{ width: 300 }}>
                    <Form>
                        <h5>Task Description</h5>
                        <Row gutter={[16, 16]}>
                            <Col span={24}>
                                <Input
                                    placeholder="Task Description"
                                    name="taskDesc"
                                    onChange={(e) =>
                                        setTask_msg(e.target.value)
                                    }
                                />
                            </Col>
                            <Col xs={12} md={12}>
                                <h6>Date</h6>
                                <DatePicker onChange={onChangeDate} />
                            </Col>
                            <Col xs={12} md={12}>
                                <h6>Time</h6>
                                <TimePicker
                                    onChange={onChangeTime}
                                    defaultValue={moment(
                                        '00:00:00',
                                        'HH:mm:ss'
                                    )}
                                />
                            </Col>
                            <Col xs={12} md={12}>
                                <h6>Time Zone</h6>
                                <TimePicker
                                    onChange={onChangeTimeZone}
                                    defaultValue={moment(
                                        '00:00:00',
                                        'HH:mm:ss'
                                    )}
                                />
                            </Col>
                            <Col xs={12} md={12}>
                                <h6>Is completed</h6>
                                <Select
                                    options={completeOptions}
                                    style={{ width: '100%' }}
                                    onChange={handleIsComplete}
                                />
                            </Col>
                            <Col span={24}>
                                <h6>Assign user</h6>
                                <Select
                                    options={option}
                                    style={{ width: '100%' }}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                        <Row
                            gutter={24}
                            style={{
                                padding: '1rem 0 0',
                                justifyContent: 'flex-end'
                            }}
                        >
                            <Col>
                                <Button
                                    type="link"
                                    onClick={() => setToggle(false)}
                                >
                                    Cancel
                                </Button>
                            </Col>
                            <Col>
                                <Button type="primary" onClick={Save}>
                                    Save
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default CrudTask;
