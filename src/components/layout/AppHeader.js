import React from "react";

import { Anchor, Button } from "antd";
import { ThunderboltFilled } from "@ant-design/icons";

const { Link } = Anchor;

function AppHeader() {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo"> 
          <ThunderboltFilled/>
          <a href="/" >Full Code</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#hero" title="Home" />
            <Link href="#about" title="About" />
            <Link href="#feature" title="Features" />
            <Link href="#faq" title="FAQ" />
            <Link href="#pricing" title="Pricing" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>
        <Button className="button" href="/login">Sign Up</Button>
      </div>
    </div>
  );
}

export default AppHeader;
