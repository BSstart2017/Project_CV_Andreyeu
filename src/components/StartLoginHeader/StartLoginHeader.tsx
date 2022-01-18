import React, {FC} from "react";
import {Layout} from "antd";
import {Row} from "antd";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import ButtonLogin from "../ButtonLogin/ButtonLogin";

const Header = Layout.Header
const StartLoginHeader: FC<PropsType> = ({setOnLogin}) => {
  return (
    <Header>
      <Row>
        <Logo spanNumberLogo={1} spanNumberText={2}/>
        <Navigation />
        <ButtonLogin setOnLogin={setOnLogin}/>
      </Row>
    </Header>
  )
}

export default StartLoginHeader

type PropsType={
  setOnLogin: (onLogin:boolean) => void
}