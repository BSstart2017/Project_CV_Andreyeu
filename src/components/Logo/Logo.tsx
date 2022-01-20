import React, {FC} from "react";
import imgLogoPhoto from "../../assets/images/LoandingHome/vkfooterlogo.png";
import {Col} from "antd";
import {Property} from "csstype";

const Logo: FC<PropsType> = (
    {spanNumberLogo= 1 ,
        spanNumberText = 1,
        textPosition='center',
        textColor='white'}
) => {

  return (
    <>
      <Col aria-label='spanNumberLogo' span={spanNumberLogo} className="logo">
        <img src={imgLogoPhoto} alt="NoPhoto"/>
      </Col>
      <Col  aria-label='spanNumberText' span={spanNumberText} >
        <span style={{textAlign: `${textPosition}`, color: `${textColor}`, fontWeight: "bolder"}}>VIKINGER</span>
      </Col>
    </>
  )
}

export default Logo

type PropsType = {
  spanNumberText? : number
  spanNumberLogo?: number
  textPosition?:  Property.TextAlign | undefined
  textColor? :  Property.Color | undefined
}