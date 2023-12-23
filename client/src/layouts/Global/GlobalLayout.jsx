import React, { useState, useCallback } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu, Typography } from "antd";
import {
  MenuOutlined,
  UserOutlined,
  DashboardOutlined,
  EyeOutlined,
  ExclamationCircleOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  LogoutOutlined // Import LogoutOutlined for the logout icon
} from "@ant-design/icons";

const { Sider, Content } = Layout;

function GlobalLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);

  const handleClick = useCallback((type) => {
    navigate(type?.key || "/");
  }, [navigate]);

  const handleLogout = useCallback(() => {
    // Clear user data/token from local storage
    localStorage.removeItem('user'); // Assuming user data is stored as 'user' key in local storage
    // Navigate user to the login page after logout
    navigate("/");
  }, [navigate]);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const navigation = [
    { key: "profile", label: "Profile", icon: <UserOutlined /> },
    { key: "home", label: "Dashboard", icon: <DashboardOutlined /> },
    { key: "search", label: "View Lost Items", icon: <EyeOutlined /> },
    { key: "report", label: "Report Missing Items", icon: <ExclamationCircleOutlined /> },
    { key: "claim", label: "Claim Verification", icon: <SearchOutlined /> },
    { key: "what-we-do", label: "FAQs", icon: <QuestionCircleOutlined /> },
    { key: "logout", label: "Logout", icon: <LogoutOutlined />, onClick: handleLogout }, // Added logout item
  ];

  const activePath = pathname.split("/")[1];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          backgroundColor: '#2E3B4E',
          overflow: 'auto',
        }}
      >
        {collapsed ? (
          <div style={{ padding: '16px', textAlign: 'center', color: '#fff' }}>
            <MenuOutlined style={{ fontSize: '1.5em' }} />
          </div>
        ) : (
          <div style={{ padding: '16px', textAlign: 'center', color: '#fff' }}>
            <h1 style={{ fontSize: '1.5em', marginBottom: '16px' }}>Menu</h1>
          </div>
        )}
        
        <Menu
          selectedKeys={[activePath]}
          style={{
            backgroundColor: '#2E3B4E',
            color: '#fff',
            borderRight: 'none',
          }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['home']}
        >
          {navigation.map(item => (
            <Menu.Item
              key={item.key}
              onClick={item.onClick || (() => handleClick(item))}
            >
              {item.icon}
              <span style={{ marginLeft: '16px' }}>{item.label}</span>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ padding: '24px', backgroundColor: '#f0f2f5' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default GlobalLayout;