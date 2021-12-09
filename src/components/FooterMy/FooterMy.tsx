import React, {FC} from "react";
import {Footer} from "antd/es/layout/layout";
import Logo from "../Logo/Logo";
import {Row} from "antd";

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