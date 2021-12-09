import React, {FC} from "react";
import {Row} from "antd";
import {Header} from "antd/es/layout/layout";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import ButtonLogin from "../ButtonLogin/ButtonLogin";


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