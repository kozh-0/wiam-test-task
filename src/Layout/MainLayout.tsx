import React, { useState } from "react";
import { ConfigProvider, Layout, Menu, Switch, theme } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Header, Content, Footer } = Layout;

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [lsTheme, setLsTheme] = useState<"light" | "dark">(
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );
  const location = useLocation();
  const menuItems = [
    {
      key: "/",
      label: <Link to="/">WIAM - Test Task</Link>,
    },
    {
      key: "/about",
      label: <Link to="/about">About</Link>,
    },
    {
      key: "/theme",
      label: (
        <Switch
          onChange={(b) => setLsTheme(!b ? "light" : "dark")}
          checkedChildren={<span style={{ fontSize: "16px" }}>🌜</span>}
          unCheckedChildren={<span style={{ fontSize: "16px" }}>🌞</span>}
          defaultChecked={lsTheme === "dark"}
        />
      ),
    },
  ];

  return (
    <ConfigProvider
      theme={{ algorithm: lsTheme === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ display: "flex", alignItems: "center", padding: 0 }}>
          <Menu
            theme={lsTheme}
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <Content className="container">
          <div
            style={{
              minHeight: 280,
              padding: 24,
              borderRadius: 10,
              border: "2px solid gray",
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          My React App ©{new Date().getFullYear()} Created with Vite
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}
