import React, {FC} from "react";
import Logo from "../Logo/Logo";
import {Layout, Row} from "antd";

const Footer = Layout.Footer
const FooterMy : FC = () => {
  return (
    <Footer>
      <Row>
        <Logo spanNumberLogo={1} spanNumberText={2}/>
      </Row>

    </Footer>
  )
}

export default FooterMy