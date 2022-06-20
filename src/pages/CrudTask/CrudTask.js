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
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import TaskWrapper, { AddTaskDiv, FormWrapper } from './styled';
import { addTask, getUserProfile } from '../../redux/userSlice';

const CrudTask = () => {
    const { user: currentUser } = useSelector((state) => state.auth);
    const {
        users: { data }
    } = useSelector((state) => state.users);
    let navigate = useNavigate();
    let dispatch = useDispatch();

    useEffect(() => {
        if (currentUser) {
            const company_id = currentUser.results.company_id;
            dispatch(getUserProfile({ company_id }));
        }
    }, []);

    const [option, setOption] = useState();
    const [taskDesc, setTaskDesc] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [assignUser, setAssignUser] = useState();

    useEffect(() => {
        let ModifiedData = data.map((data) => {
            return {
                value: data.name,
                label: (
                    <div
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
    }, []);

    const onChangeDate = (date, dateString) => {
        setDate(date, dateString);
        console.log(date, dateString);
    };

    const onChangeTime = (time, timeString) => {
        setTime(time, timeString);
        console.log(time, timeString);
    };

    const handleChange = (option) => {
        setAssignUser(option.value);
        console.log(`selected ${option.value}`);
    };

    const Save = (e) => {
        e.preventDefault();
        const company_id = currentUser.results.company_id;
        dispatch(addTask({ company_id }));
    };

    useEffect(() => {
        if (!currentUser) {
            navigate('/login', { replace: true });
        }
    }, [currentUser, navigate]);

    return (
        <div style={{ padding: '1rem 0' }}>
            <AddTaskDiv>
                <h6>Tasks 0</h6>
                <button type="link">+</button>
            </AddTaskDiv>
            <Card style={{ width: 300 }}>
                <Form>
                    <h5>Task Description</h5>
                    <Row gutter={[16, 16]}>
                        <Col span={24}>
                            <Input
                                placeholder="Task Description"
                                name="taskDesc"
                                onChange={(e) => setTaskDesc(e.target.value)}
                            />
                        </Col>
                        <Col md={12}>
                            <h6>Date</h6>
                            <DatePicker onChange={onChangeDate} />
                        </Col>
                        <Col md={12}>
                            <h6>Time</h6>
                            <TimePicker
                                onChange={onChangeTime}
                                defaultValue={moment('00:00:00', 'HH:mm:ss')}
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
                            <Button type="link">Cancel</Button>
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
    );
};

export default CrudTask;
