import React, {FC} from "react"
import {Carousel, Col, Row} from "antd";
import {CarouselItemType} from "../../redux/startLoginPage-reducer";

const CustomerCarousel : FC<PropsType> = ({carouselItems}) => {

  return (
    <>
      <Row justify={'center'}>
        <Col span={12} >
          <Carousel dots={false} autoplay>
            {
              carouselItems.map(elements =>  <div key={elements.id} >
                <div  style={{display: 'flex', justifyContent: 'center'}}>
                  <img src={elements.img} alt="noPhoto"/>
                </div>
              </div> )
            }
          </Carousel>
        </Col>
      </Row>
    </>
  )
}

export default CustomerCarousel

type PropsType ={
  carouselItems: Array<CarouselItemType>
}