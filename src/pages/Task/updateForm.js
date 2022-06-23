import {
    Form,
    Input,
    Row,
    Col,
    Button,
    DatePicker,
    TimePicker,
    Modal
} from 'antd';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { getAllTasks, updateTask } from '../../redux/userSlice';
import timeConvert from '../../utils/timeCoverter';
import userService from '../../services/userService';
import { toast } from 'react-toastify';

const completeOptions = [
    { value: 0, label: 'No' },
    { value: 0, label: 'Yes' }
];

const UpdateModal = ({ isModalVisible, handleOk, handleCancel, id }) => {
    const { user: currentUser } = useSelector((state) => state.auth);
    const {
        users: { data }
    } = useSelector((state) => state.users);

    let dispatch = useDispatch();

    const [user, setUser] = useState([]);
    const [option, setOption] = useState();

    const notify = () => toast('Task created successfully');

    useEffect(() => {
        if (currentUser && id) {
            const company_id = currentUser.results.company_id;
            console.log('user_id:', id, company_id);
            userService
                .getSingleTasks(company_id, id)
                .then((res) => {
                    setUser(res.results);
                })
                .catch(() => {});
        }
    }, [currentUser, id]);

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

    const [task_msg, setTask_msg] = useState(user.task_msg);
    const [task_date, setTask_date] = useState(user.task_date);
    const [task_time, setTask_time] = useState(user.task_time);
    const [time_zone, setTime_zone] = useState(user.time_zone);
    const [is_completed, setIs_completed] = useState(user.is_completed);
    const [assigned_user, setAssigned_user] = useState(user.assigned_user);

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

    const { id: task_id } = user;
    const Save = (e) => {
        e.preventDefault();
        const company_id = currentUser.results.company_id;
        dispatch(
            updateTask({
                task_id,
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
                handleOk();
                notify();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Modal
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            <div>
                <h4>Task: {user && user.assigned_user}</h4>
            </div>
            <Form>
                <h5>Task Description</h5>
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <Input
                            placeholder="Task Description"
                            name="task_msg"
                            onChange={(e) => setTask_msg(e.target.value)}
                            defaultValue={user.task_msg}
                        />
                    </Col>
                    <Col xs={12} md={12}>
                        <h6>Date</h6>
                        <DatePicker
                            defaultValue={user.task_date}
                            onChange={onChangeDate}
                        />
                    </Col>
                    <Col xs={12} md={12}>
                        <h6>Time</h6>
                        <TimePicker
                            onChange={onChangeTime}
                            defaultValue={moment('00:00:00', 'HH:mm:ss')}
                        />
                    </Col>
                    <Col xs={12} md={12}>
                        <h6>Time Zone</h6>
                        <TimePicker
                            onChange={onChangeTimeZone}
                            defaultValue={moment('00:00:00', 'HH:mm:ss')}
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
                        <Col span={24}>
                            <h6>Assign user</h6>
                            <Select
                                options={option}
                                style={{ width: '100%' }}
                                onChange={handleChange}
                            />
                        </Col>
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
                        <Button type="link" onClick={handleOk}>
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
        </Modal>
    );
};

export default UpdateModal;
