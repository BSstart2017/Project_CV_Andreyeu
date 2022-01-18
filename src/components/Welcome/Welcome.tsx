import React, {FC} from 'react'
import style from "../../Pages/StartLoginPage/StartLogin.module.css";
import {Button, Col, Row} from "antd";

const Welcome  : FC<PropsType> = ({buttonGoViking= true}) => {
  return (
    <div className={style.startImageFont} style={{overflow: 'initial'}}>
      <Row className="site-layout-background" style={{paddingTop: 100, textAlign: 'center'}}>
        <Col span={8} offset={8}>
          <span style={{color: 'white', fontSize: 14,}}>WELCOME TO THE</span>
        </Col>
      </Row>
      <Row className="site-layout-background" style={{paddingTop: 24, textAlign: 'center'}}>
        <Col span={8} offset={8}>
          <span style={{color: 'white', fontSize: 64, wordSpacing: '0.1em', fontWeight: 'bolder'}}>VIKINGER
            COMMUNITY!</span>
        </Col>
      </Row>
      <Row className="site-layout-background" style={{padding: 24, textAlign: 'center'}}>
        <Col span={8} offset={8}>
          <span style={{color: 'white', fontSize: 14}}>The next generation WordPress+Buddypress social community!
            Connect with your friends with full profiles,
            reactions, groups, badges, quests, ranks, credits and much more to come!</span>
        </Col>
      </Row>
      {buttonGoViking &&
        <Row className="site-layout-background" style={{padding: 24, textAlign: 'center'}}>
          <Col span={8} offset={8}>
            <Button type="primary">Why Vikinger?</Button>
          </Col>
        </Row>
      }
    </div>
  )
}

export default Welcome


type PropsType = {
  buttonGoViking?: boolean
}