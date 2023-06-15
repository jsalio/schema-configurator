import { Layout, Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Header, Content, Footer } from "antd/es/layout/layout";
import React from "react";
import { menuItems } from "./components/menuItems";
import { useAppNavigation } from "../../utils/Navigator";

export const ApplicationLayout:React.FC<any> = (props) => {
  const {navigateTo} = useAppNavigation();
  const [path, setPath] = React.useState<string>('/dashboard');
  const gotoPage = (path:string) => {
    setPath(path);
    navigateTo('/app'+path);
  };
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return(     <Layout>
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
        defaultSelectedKeys={[path]}
        selectedKeys={[path]}
        items={menuItems(gotoPage)}
      />
    </Sider>
    <Layout>
      <Header style={{ padding: 0, background: colorBgContainer }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div style={{ padding: 24, minHeight: 792, background: colorBgContainer }}>
            {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  </Layout>)
}


