import { Layout, Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Header, Content, Footer } from "antd/es/layout/layout";
import React, { useContext } from "react";
import { menuItems } from "./components/menuItems";
import { ApplicationContext } from "../../Main/main.context";

export const ApplicationLayout:React.FC<any> = (props) => {
  const [path, setPath] = React.useState<string>('/dashboard');
  const {translate, router} = useContext(ApplicationContext);
  const navigate = router()?.navigateTo;

  const gotoPage = (path:string) => {
    setPath(path);
    navigate?.call(null, '/app'+path);
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
        items={menuItems(gotoPage, translate)}
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


