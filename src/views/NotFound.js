import { Button } from "antd";
import React from "react";
import notfound from "../assets/undraw_page_not_found_su7k.png";
import { HomeOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
function NotFound() {
  return (
    <div className="container-fluid">
      <Row justify="center" align="center">
        <Col>
          <img src={notfound} style={{ width: '100%' }} alt="Not Found" />
        </Col>
        <Col>
          <Button href="/" type="primary" icon={<HomeOutlined />}>
            Back Home
          </Button>
        </Col>
      </Row>
    </div>
  );
}
export default NotFound;
