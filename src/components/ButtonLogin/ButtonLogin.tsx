import React, {FC} from "react";
import {Button, Col} from "antd";
import {NavLink} from "react-router-dom"

const ButtonLogin : FC<PropsType> = ({setOnLogin}) => {

  const onLogin = () => {
    setOnLogin(true)
  }

  return (
    <Col span={2}>
      <Button type="primary"><NavLink onClick={onLogin} to="/login">Sing In!</NavLink></Button>
    </Col>
  )
}

export default ButtonLogin

type PropsType={
  setOnLogin: (onLogin:boolean) => void
}