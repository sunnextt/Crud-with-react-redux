import React, { useState } from 'react';
import { Card, Col, Row } from 'antd';
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks } from '../../redux/userSlice';
import { TiDeleteOutline } from 'react-icons/ti';
import { MdEdit } from 'react-icons/md';
import userService from '../../services/userService';
import UpdateModal from './updateForm';
import { toast } from 'react-toastify';


const Tasks = () => {
    const dispatch = useDispatch();
    const { user: currentUser } = useSelector((state) => state.auth);
    const {
        tasks: { results: data }
    } = useSelector((state) => state.users);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [taskId, setTaskId] = useState('');

    const notify = () => toast('Task deleted successfully');

    const fetch = async () => {
        if (currentUser) {
            const company_id = currentUser.results.company_id;
            dispatch(getAllTasks({ company_id }));
        }
    };

    React.useEffect(() => {
        fetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onDelete = (id) => {
        if (currentUser) {
            const company_id = currentUser.results.company_id;
            userService
                .deleteTask(id, company_id)
                .then((res) => {
                    console.log(res);
                    fetch();
                    notify();
                })
                .catch(() => {});
        }
    };

    const showModal = (id) => {
        setTaskId(id);

        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <UpdateModal
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
                id={taskId}
            />
            <div>
                {data
                    ? data.map((data) => (
                          <Card style={{ width: 300, margin: '1rem 0' }}>
                              <Row key={data.user_id} gutter={[16, 8]}>
                                  <Col span={3}>
                                      <Avatar
                                          name="Wim Mostmans"
                                          size="20px"
                                          round
                                      />
                                  </Col>
                                  <Col span={12}>
                                      Assigned user:
                                      <h5>{data.assigned_user}</h5>
                                  </Col>
                                  <Col md={4} style={{ textAlign: 'center' }}>
                                      <button
                                          onClick={() =>
                                              window.confirm('Are you sure!?')
                                                  ? onDelete(data.id)
                                                  : false
                                          }
                                      >
                                          <TiDeleteOutline className="delIcon" />
                                      </button>
                                  </Col>
                                  <Col md={4} style={{ textAlign: 'center' }}>
                                      <button
                                          onClick={() => showModal(data.id)}
                                      >
                                          <MdEdit className="editIcon" />
                                      </button>
                                  </Col>
                                  <Col span={14}>
                                      <h5>Task date: {data.task_date}</h5>
                                  </Col>
                                  <Col span={10}>
                                      <h5>
                                          Is&nbsp;completed:
                                          {data.is_completed === 0
                                              ? 'No'
                                              : 'Yes'}
                                      </h5>
                                  </Col>
                                  <Col span={24}>
                                      Task Discription<h5>{data.task_msg}</h5>
                                  </Col>
                              </Row>
                          </Card>
                      ))
                    : null}
            </div>
        </>
    );
};

export default Tasks;
