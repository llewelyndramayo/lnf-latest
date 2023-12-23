import * as React from "react";
import { Row, Col, Typography, Card, Avatar, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";
import profileModel from "@/assets/images/model.svg";

const { Title, Text } = Typography;

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="lnf-profile" style={{ padding: "2rem 0" }}>
      <Row justify="center">
        <Col span={20}>
          <Title level={2} style={{ marginBottom: "2rem", textAlign: "center" }}>
            Welcome, {user.username}!
          </Title>

          <Row gutter={[24, 24]} justify="center" style={{ marginBottom: "20px", marginTop: "20px" }}>
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Avatar size={150} icon={<UserOutlined />} src={profileModel} style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }} />
              </div>
            </Col>
          </Row>

          <Row gutter={[24, 24]} justify="center" align="top">
            <Col xs={24} sm={24} md={14} lg={14} xl={14}>
              <Card title="Personal Information" style={{ borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                <div style={{ marginBottom: "1.5rem" }}>
                  <Title level={4}>Full Name</Title>
                  <Text strong>{user.full_name}</Text>
                </div>
                <Divider />
                <div style={{ marginBottom: "1.5rem" }}>
                  <Title level={4}>Contact</Title>
                  <Text>{user.contact_info}</Text>
                </div>
                <Divider />
                <div>
                  <Title level={4}>Email</Title>
                  <Text>{user.email}</Text>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export { Profile as default };