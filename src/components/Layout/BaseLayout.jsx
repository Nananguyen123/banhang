import { Outlet } from "react-router-dom";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
// const { Header, Content, Footer } = Layout;
import { Breadcrumb, Layout, Menu, theme } from "antd";
import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;

export default function BaseLayout() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const headerStyle = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "white",
  };
  const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "white",
  };
  const siderStyle = {
    textAlign: "center",
    lineHeight: "80px",
    color: "#fff",
  };
  const footerStyle = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "white",
  };
  const layoutStyle = {
    borderRadius: 8,
    overflow: "hidden",
    width: "calc(100% - 8px)",
    maxWidth: "calc(100% - 8px)",
    backgroundColor: "white",
  };
  const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    UserOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }));
  return (
    <>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <HeaderComponent></HeaderComponent>
        </Header>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["4"]}
              items={items}
            />
          </Sider>
          <Content style={contentStyle}>
            <Outlet></Outlet>
          </Content>
        </Layout>

        <Footer style={footerStyle}>
          <FooterComponent></FooterComponent>
        </Footer>
      </Layout>
      {/* <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <HeaderComponent></HeaderComponent>
        </Header>
        <Outlet></Outlet>
        <FooterComponent></FooterComponent>
      </Layout> */}
    </>
  );
}
