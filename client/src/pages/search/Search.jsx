import React, { useState } from "react";
import { Typography, Table, Input, Select, Button, Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Search: AntdSearch } = Input;
const { Option } = Select;

function Search() {
  const names = [
    'John Doe',
    'Jane Smith',
    'Ceril Heyrosa',
    'Dane Undang',
    'Margaret Docdoc',
  ];
  
  const items = [
    'Smartphone',
    'Laptop',
    'Wallet',
    'Keys',
    'Backpack',
  ];
  
  const landmarks = [
    'Bunze Lobby',
    'Safad Canteen',
    'Bunzel Canteen',
    'SAS Building',
    'Burp Kahuyan',
  ];

  const descriptions = [
    ' A silver iPhone 14',
    ' A black laptop ',
    ' A brown leather wallet',
    ' A set of metallic keys ',
    ' A blue backpack',
  ];
  
  const [data, setData] = useState(
    Array.from({ length: 5 }, (_, i) => ({
      key: i,
      itemName: `${items[i]}`,  // Using the items array for item names
      landmark: `${landmarks[i]}`,  // Using the landmarks array for landmarks
      dateFound: `2023-12-${i + 1}`,
      timeFound: `12:0${i}`,
      reportedBy: names[i % names.length],  // Use modulus to loop through names
    }))
  );
  

  const [filteredData, setFilteredData] = useState(data);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const columns = [
    {
      title: 'Item Name',
      dataIndex: 'itemName',
      key: 'itemName',
      align: 'center',
    },
    {
      title: 'Landmark',
      dataIndex: 'landmark',
      key: 'landmark',
      align: 'center',
    },
    {
      title: 'Date Found',
      dataIndex: 'dateFound',
      key: 'dateFound',
      align: 'center',
    },
    {
      title: 'Time Found',
      dataIndex: 'timeFound',
      key: 'timeFound',
      align: 'center',
    },
    {
      title: 'Reported By',
      dataIndex: 'reportedBy',
      key: 'reportedBy',
      align: 'center',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      align: 'center',
      render: (text, record) => (
        <Button type="primary" onClick={() => handleView(record.key)}>
          View
        </Button>
      ),
    },
  ];

  const handleView = (key) => {
    const item = data.find((item) => item.key === key);
    setSelectedItem(item);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleRequestClaim = () => {
    console.log("Request Claim clicked");
  };

  const handleSearch = (value) => {
    const filtered = data.filter((item) =>
      item.itemName.toLowerCase().includes(value.toLowerCase()) ||
      item.landmark.toLowerCase().includes(value.toLowerCase()) ||
      item.dateFound.includes(value) ||
      item.timeFound.includes(value) ||
      item.reportedBy.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
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
          View Lost Items
        </Title>
      </div>

      {/* Sorting and Search Section */}
      <div style={{ marginBottom: '20px', paddingLeft: '20px', display: 'flex', justifyContent: 'space-between' }}>
        {/* Sorting dropdown */}
        <Select style={{ width: 200 }} placeholder="Sort by">
          <Option value="nameAsc">Sort by Name (A-Z)</Option>
          <Option value="nameDesc">Sort by Name (Z-A)</Option>
          <Option value="dateAsc">Sort by Date (Oldest First)</Option>
          <Option value="dateDesc">Sort by Date (Newest First)</Option>
        </Select>
        
        {/* Search Input */}
        <AntdSearch
          placeholder="Search lost items..."
          onSearch={handleSearch}
          style={{ width: 200 }}
        />
      </div>

      {/* Table Section */}
      <Table columns={columns} dataSource={filteredData} pagination={{ pageSize: 5 }} />


      {/* Modal for Item Details */}
      <Modal
        title="Item Details"
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="request" type="primary" onClick={handleRequestClaim}>
            Request Claim
          </Button>,
          <Button key="close" onClick={handleModalClose}>
            Close
          </Button>,
        ]}
      >
        <p><strong>Title:</strong> {selectedItem?.itemName}</p>
        <p><strong>Description:</strong>{descriptions[selectedItem?.key % descriptions.length]}</p>
      </Modal>
    </div>
  );
}

export { Search as default };
