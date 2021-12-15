import React, {FC} from 'react';
import {Col, Row} from "antd";
import {IconsBadgesType} from "../../redux/profile-reducer";

const CustomerIcons: FC<PropsType> = ({icons, title}) => {
  return (
    <Row style={{backgroundColor:'white', borderRadius: '30px', marginBottom: 20}}>
      <span style={{fontSize: 'large', fontWeight: 'bold', paddingLeft: '30px'}}>
        {title}: {icons.length}
      </span>
      <Row>
        {icons.map(elements=>
          <Col span={4} key={elements.id} >
            <img title={elements.name} style={{width:'100%', height:'100%', borderRadius: '50%', padding:10}} src={elements.img} alt='noPhoto'/>
          </Col>
        )}
      </Row>
    </Row>

  )
}

export default CustomerIcons

type PropsType = {
  icons:  Array<IconsBadgesType>
  title: string
}