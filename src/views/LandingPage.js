import React from "react";
import "../App.css";
import { Layout } from "antd";


//components
import AppHeader from "../components/layout/AppHeader";
import AppHome from "./home";
import AppFooter from "../components/layout/footer";


const { Header, Content, Footer } = Layout;
function LandingPage() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}
export default LandingPage;
