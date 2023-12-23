import React from "react";
import { Typography, Collapse, Row, Col } from "antd";

const { Title } = Typography;
const { Panel } = Collapse;

function Search() {
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
          Claim Verification
        </Title>
      </div>

      {/* First Collapse */}
      <div style={{ marginBottom: '30px', marginLeft: '1in', marginRight: '1in', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px', backgroundColor: '#fff' }}>
        <Collapse accordion bordered={false}>
          <Panel header="You have a transaction with reference #12345" key="1">
            <Row gutter={16}>
              <Col span={12}>
                <h3>Item ID:</h3>
                <p>123456</p>
                <h3>Name of the Item:</h3>
                <p>Sample Item Name</p>
                <h3>Description:</h3>
                <p>This is a description of the item.</p>
              </Col>
            </Row>
          </Panel>
        </Collapse>
      </div>

      {/* Second Collapse */}
      <div style={{ marginBottom: '30px', marginLeft: '1in', marginRight: '1in', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px', backgroundColor: '#fff' }}>
        <Collapse accordion bordered={false}>
          <Panel header="You have a transaction with reference #123456" key="2">
            <Row gutter={16}>
              <Col span={12}>
                <h3>Item ID:</h3>
                <p>789012</p>
                <h3>Name of the Item:</h3>
                <p>Another Sample Item Name</p>
                <h3>Description:</h3>
                <p>This is another description of a different item.</p>
              </Col>
            </Row>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}

export { Search as default };
