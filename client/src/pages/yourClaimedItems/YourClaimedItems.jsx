import React, { useState } from 'react';
import { Typography, Table, Select, Input } from 'antd';

const { Title } = Typography;
const { Option } = Select;
const { Search: AntdSearch } = Input;

const YourClaimedItems = () => {
  const data = [
    {
      id: 1,
      itemName: 'Samsung Galaxy S22',
      dateFound: '2023-12-01',
      reportedBy: 'Michael Johnson',
      dateClaimed: '2023-12-02',
    },
    {
      id: 2,
      itemName: 'Smartwatch',
      dateFound: '2023-12-03',
      reportedBy: 'Emily Clark',
      dateClaimed: '2023-12-04',
    },
    {
      id: 3,
      itemName: 'Backpack',
      dateFound: '2023-12-05',
      reportedBy: 'David Lee',
      dateClaimed: '2023-12-06',
    },
  ];

  const [filteredData, setFilteredData] = useState(data);

  const columns = [
    {
      title: '#',
      dataIndex: 'id', // Assuming 'id' is the unique identifier for each record
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
      title: 'Reported By',
      dataIndex: 'reportedBy',
      key: 'reportedBy',
      align: 'center',
    },
    {
      title: 'Date Claimed',
      dataIndex: 'dateClaimed', // Assuming you have a 'dateClaimed' field in your data
      key: 'dateClaimed',
      align: 'center',
    },
  ];

  const handleSearch = (value) => {
    const filtered = data.filter((item) =>
      item.itemName.toLowerCase().includes(value.toLowerCase()) ||
      item.landmark.toLowerCase().includes(value.toLowerCase()) ||
      item.dateFound.includes(value) ||
      item.timeFound.includes(value) 
      // Assuming reportedBy is in your data; add more conditions as needed
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
          Records Of Your Claimed Items
        </Title>
      </div>

      {/* Sorting and Search Section */}
      <div style={{ marginBottom: '20px', paddingLeft: '20px', display: 'flex', justifyContent: 'flex-end' }}>
        
  {/* Search Input */}
  <AntdSearch
    placeholder="Search lost items..."
    onSearch={handleSearch}
    style={{ width: 200 }}
  />
</div>

      {/* Table Section */}
      <Table columns={columns} dataSource={filteredData} pagination={{ pageSize: 5 }} />
    </div>
  );
}

export default YourClaimedItems;
