import React, {FC} from "react";
import imgLogoPhoto from "../../assets/images/LoandingHome/vkfooterlogo.png";
import {Col} from "antd";
import Text from "antd/es/typography/Text";

const Logo: FC<PropsType> = ({spanNumberLogo= 1 ,spanNumberText = 1, textPosition = ''}) => {

  return (
    <>
      <Col span={spanNumberLogo} className="logo">
        <img src={imgLogoPhoto} alt="NoPhoto"/>
      </Col>
      { /* @ts-ignore */}
      <Col span={spanNumberText} style={{textAlign: `${textPosition}`, color: 'white', fontWeight: "bolder", verticalAlign: 'middle'}}>
        <Text>VIKINGER</Text>
      </Col>
    </>
  )
}
// todo: ts-ignore
export default Logo

type PropsType = {
  spanNumberText : number
  spanNumberLogo: number
  textPosition?: string
}