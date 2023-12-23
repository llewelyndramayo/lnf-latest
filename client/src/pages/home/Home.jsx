
import React from "react";
import { Typography, Card, Row, Col, Button, Table } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

function Home() {
  // Sample data for the table
  const navigate = useNavigate();
  const dataSource = [
    {
      key: '1',
      itemName: 'Wallet',
      landmark: 'Central Park',
      dateFound: '2023-12-22',
      timeFound: '15:30'
    },
    {
      key: '2',
      itemName: 'Phone',
      landmark: 'Times Square',
      dateFound: '2023-12-21',
      timeFound: '14:15'
    },
    // Add more items as needed
  ];

  // Columns for the table
  const columns = [
    {
      title: 'Item Name',
      dataIndex: 'itemName',
      key: 'itemName',
    },
    {
      title: 'Landmark',
      dataIndex: 'landmark',
      key: 'landmark',
    },
    {
      title: 'Date Found',
      dataIndex: 'dateFound',
      key: 'dateFound',
    },
    {
      title: 'Time Found',
      dataIndex: 'timeFound',
      key: 'timeFound',
    },
  ];

  return (
    <div>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "10px 20px",
          marginBottom: "20px",
        }}
      >
        <Title level={2} style={{ margin: "0" }}>
          User Dashboard
        </Title>
      </div>

      {/* Main Content */}
      <div style={{ padding: '20px' }}>
        <Row gutter={[16, 16]} justify="space-between">
          {/* First Box */}
          <Col span={8}>
            <Card
              title="Your Claimed Items"
              style={{
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
                width: "100%",
                padding: '20px'
              }}
              hoverable
            >
              <Title level={1} style={{ marginBottom: "10px" }}>3</Title>
              <Button type="primary" size="small" onClick={() => navigate("/your-claimed-items")}>View</Button>
            </Card>
          </Col>

          {/* Second Box */}
          <Col span={8}>
            <Card
              title="Users Claimed Items"
              style={{
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                justifyContent: "center",
                transition: "transform 0.3s ease",
                width: "100%",
                padding: '20px'
              }}
              hoverable
            >
              <Title level={1} style={{ marginBottom: "10px", justifyContent: "center" }}>3</Title>
              <Button type="primary" size="small" onClick={() => navigate("/users-claimed-items")}>View</Button>
            </Card>
          </Col>

          {/* Third Box */}
          <Col span={8}>
            <Card
              title="View Pending Claims"
              style={{
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
                width: "100%",
                padding: '20px',
                justifyContent: "center"
              }}
              hoverable
            >
              <Title level={1} style={{ marginBottom: "10px", justifyContent: "center" }}>3</Title>
              <Button type="primary" size="small" onClick={() => navigate('/view-pending-claims')}>View</Button>
            </Card>
          </Col>
        </Row>

        {/* Most Recent Lost Items */}
        <div style={{ marginTop: '40px' }}>
          <Title level={3}>Most Recent Lost Items</Title>
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </div>
  );
}

export default Home;