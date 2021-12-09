import React, {FC} from "react"
import {Col, Image, Row} from "antd";
import Text from "antd/es/typography/Text";
import {Property} from "csstype";
import {ContentImgItemType} from "../../redux/startLoginPage-reducer";

const CustomerContent: FC<PropsType> = ({textColorHeader = 'black', textHeaderSizeCard= '32px',
                                        textBodySize = '18px', textColorBody = 'black', contentImgItems}) => {

  return (
    <>
      {contentImgItems.map(elements => (
          <Row justify={"center"} key={elements.id}>
            { elements.position === 'left' && <Col span={8} style={{display: 'flex', justifyContent: 'center'}}>
              <Image src={elements.img} alt='noPhoto'/>
            </Col>
            }
          <Col span={8} style={{paddingTop: 100}}>
            <div style={{paddingBottom: 20}}>
              <Text style={{color: 'black', fontSize: 14}}>MAIN FEATURES</Text>
            </div>
            <div style={{paddingBottom: 20}}>
              <div>
                <Text style={{color: `${textColorHeader}`, fontSize: `${textHeaderSizeCard}`, fontWeight: "bolder"}}>
                  {elements.headerTextTop}</Text>
              </div>
              <div>
                <Text style={{color: `${textColorHeader}`, fontSize: `${textHeaderSizeCard}`, fontWeight: "bolder"}}>
                  {elements.headerTextBottom}</Text>
              </div>
            </div>
            <div>
              <div style={{paddingBottom: 20}}>
                <Text style={{color: `${textColorBody}`, fontSize: `${textBodySize}` }}>{elements.text}</Text>
              </div>
            </div>
          </Col>
            {
              elements.position === 'right' && <Col span={8} style={{display: 'flex', justifyContent: 'center'}}>
                    <Image src={elements.img} alt='noPhoto'/>
                </Col>
            }
          </Row>
      ))}
    </>
  )
}

type PropsType = {
  textColorHeader?: Property.Color | undefined
  textColorBody?: Property.Color | undefined
  textHeaderSizeCard?: Property.FontSize<string | number> | undefined
  textBodySize?: Property.FontSize<string | number> | undefined
  contentImgItems: Array<ContentImgItemType>
}



export default CustomerContent