import React, { useState } from 'react';
import { Typography, Table, Select, Input } from 'antd';

const { Title } = Typography;
const { Option } = Select;
const { Search: AntdSearch } = Input;

const UsersClaimedItems = () => {
  // Sample data initialization for users' claimed items
  const initialData = [
    {
      id: 1,
      itemName: 'Smartphone',
      dateFound: '2023-12-22',
      claimedBy: 'John Doe',
      status: 'Claimed', // Assuming you have a 'status' field
    },
    {
      id: 2,
      itemName: 'Laptop',
      dateFound: '2023-12-20',
      claimedBy: 'Alice Smith',
      status: 'Claimed',
    },
    {
      id: 3,
      itemName: 'Watch',
      dateFound: '2023-12-18',
      claimedBy: 'Robert Brown',
      status: 'Claimed',
    },
  ];

  const [filteredData, setFilteredData] = useState(initialData);

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
    },
    {
      title: 'Item Name',
      dataIndex: 'itemName',
      key: 'itemName',
      align: 'center',
    },
    {
      title: 'Date Found',
      dataIndex: 'dateFound',
      key: 'dateFound',
      align: 'center',
    },
    {
      title: 'Claimed By',
      dataIndex: 'claimedBy',
      key: 'claimedBy',
      align: 'center',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
    },
  ];

  const handleSearch = (value) => {
    const filtered = initialData.filter((item) =>
      item.itemName.toLowerCase().includes(value.toLowerCase()) ||
      item.claimedBy.toLowerCase().includes(value.toLowerCase())
      // Add more search conditions as needed
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
          Users' Claimed Items
        </Title>
      </div>

      {/* Sorting and Search Section */}
      <div style={{ marginBottom: '20px', paddingLeft: '20px', display: 'flex', justifyContent: 'flex-end' }}>
        {/* Search Input */}
        <AntdSearch
          placeholder="Search users' claimed items..."
          onSearch={handleSearch}
          style={{ width: 200 }}
        />
      </div>

      {/* Table Section */}
      <Table columns={columns} dataSource={filteredData} pagination={{ pageSize: 5 }} />
    </div>
  );
}

export default UsersClaimedItems;