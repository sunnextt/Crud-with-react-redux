import React from 'react';
import { Card, Col, Row } from 'antd';
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';

const Tasks = () => {
    const {
        users: { data }
    } = useSelector((state) => state.users);
    return (
        <>
            {data
                ? data.map((data) => (
                      <Card style={{ width: 300 }}>
                          <Row key={data.user_id} gutter={[16,16]}>
                              <Col span={3}>
                                  <Avatar
                                      name="Wim Mostmans"
                                      size="20px"
                                      round
                                      src={data.icon}
                                  />
                              </Col>
                              <Col span={10}>
                                  <h5>{data.name}</h5>
                              </Col>
                              <Col span={10}>
                                  <h5>{data.phone}</h5>
                              </Col>
                              <Col span={3}>
                                  <h5>{data.role_name}</h5>
                              </Col>
                          </Row>
                      </Card>
                  ))
                : null}
        </>
    );
};

export default Tasks;
