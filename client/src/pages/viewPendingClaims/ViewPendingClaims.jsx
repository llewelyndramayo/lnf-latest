import React, { useState } from "react";
import { Typography, Table, Select, Input } from "antd";

const { Title } = Typography;
const { Option } = Select;
const { Search: AntdSearch } = Input;

const ViewPendingClaims = () => {
  // Sample data initialization for pending claims
  const initialData = [
    {
      id: 1,
      itemName: "Tablet",
      dateFound: "2023-12-22",
      reportedBy: "Michael Brown",
      status: "Pending Review",
    },
    {
      id: 2,
      itemName: "Camera",
      dateFound: "2023-12-21",
      reportedBy: "Emma White",
      status: "Pending Review",
    },
    {
      id: 3,
      itemName: "Headphones",
      dateFound: "2023-12-20",
      reportedBy: "William Black",
      status: "Pending Review",
    },
    // Add more sample items as needed
  ];

  const [filteredData, setFilteredData] = useState(initialData);

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "Item Name",
      dataIndex: "itemName",
      key: "itemName",
      align: "center",
    },
    {
      title: "Date Found",
      dataIndex: "dateFound",
      key: "dateFound",
      align: "center",
    },
    {
      title: "Reported By",
      dataIndex: "reportedBy",
      key: "reportedBy",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
    },
  ];

  const handleSearch = (value) => {
    const filtered = initialData.filter(
      (item) =>
        item.itemName.toLowerCase().includes(value.toLowerCase()) ||
        item.reportedBy.toLowerCase().includes(value.toLowerCase())
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
          View Pending Claims
        </Title>
      </div>

      {/* Sorting and Search Section */}
      <div
        style={{
          marginBottom: "20px",
          paddingLeft: "20px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {/* Search Input */}
        <AntdSearch
          placeholder="Search pending claims..."
          onSearch={handleSearch}
          style={{ width: 200 }}
        />
      </div>

      {/* Table Section */}
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default ViewPendingClaims;
