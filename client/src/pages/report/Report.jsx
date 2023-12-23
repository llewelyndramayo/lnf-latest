import React, { useState } from "react";
import { Typography, Select, Button, Form, Input } from "antd";

const { Title } = Typography;
const { TextArea } = Input;

function Search() {
  const [form] = Form.useForm(); // Initialize form instance

  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

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
          Report Items
        </Title>
      </div>
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'center',  // Center horizontally
          alignItems: 'center',      // Center vertically
          width: '100%'              // Take full width
        }}
      >
        {/* Form container */}
        <div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '5px', width: '80%', maxWidth: '500px' }}>
          <Form form={form} onFinish={onFinish} layout="vertical">
            {/* Report Type Selection */}
            <Form.Item
              name="reportType"
              label="Report Type"
              rules={[{ required: true, message: 'Please select a report type.' }]}
            >
              <Select placeholder="Select report type">
                <Select.Option value="lost">Lost</Select.Option>
                <Select.Option value="found">Found</Select.Option>
              </Select>
            </Form.Item>

            {/* Insert Image */}
            <Form.Item
              name="image"
              label="Insert Image"
              rules={[{ required: true, message: 'Please upload an image.' }]}
            >
              <Input type="file" />
            </Form.Item>

            {/* Item Name */}
            <Form.Item
              name="itemName"
              label="Item Name"
              rules={[{ required: true, message: 'Please enter item name.' }]}
            >
              <Input placeholder="Enter item name" />
            </Form.Item>

            {/* Landmark */}
            <Form.Item
              name="landmark"
              label="Landmark"
              rules={[{ required: true, message: 'Please enter landmark.' }]}
            >
              <Input placeholder="Enter landmark" />
            </Form.Item>

            {/* Date Found */}
            <Form.Item
              name="dateFound"
              label="Date Found"
              rules={[{ required: true, message: 'Please enter date found.' }]}
            >
              <Input type="date" />
            </Form.Item>

            {/* Time Found */}
            <Form.Item
              name="timeFound"
              label="Time Found"
              rules={[{ required: true, message: 'Please enter time found.' }]}
            >
              <Input type="time" />
            </Form.Item>

            {/* Description */}
            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: 'Please enter description.' }]}
            >
              <TextArea rows={4} placeholder="Enter description" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export { Search as default };
