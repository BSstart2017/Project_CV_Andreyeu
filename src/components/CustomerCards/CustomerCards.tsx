import React, {FC} from "react";
import {Col, Row} from "antd";
import {Property} from "csstype";
import {CardType} from "../../redux/startLoginPage-reducer";


const CustomerCards: FC<PropsType> = ({spanNumber = 5, paddingCards = 48, justifyPosition= "center",
                                        textColorCard = 'black',
                                        textHeaderSizeCard = '25px', cards }) => {
  return (
    <>
      <Row justify={justifyPosition} gutter={[paddingCards, 16]} style={{margin: 0}}>
        {cards?.map(elements => (
          <Col span={spanNumber} key={elements.id}>
            <div style={{paddingBottom: 30}}>
              <img src={elements.img} alt='noPhoto'/>
            </div>
            <div style={{paddingBottom: 10}}>
              <span style={{color: `${textColorCard}`,fontSize: `${textHeaderSizeCard}`, fontWeight: "bolder"}}>
                {elements.headerText}</span>
            </div>
            <div>
              <span>{elements.footerText}</span>
            </div>
          </Col>)
        )}
      </Row>
    </>
  )
}

export default CustomerCards


type PropsType = {
  spanNumber?: number
  paddingCards?: number
  justifyPosition?: "center" | "start" | "end" | "space-around" | "space-between" | undefined
  textColorCard? :  Property.Color | undefined
  textHeaderSizeCard? : Property.FontSize<string | number> | undefined
  cards: Array<CardType>
  }
