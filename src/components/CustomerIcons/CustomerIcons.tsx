import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {getIconsBadgesSelector} from "../../redux/Selectors/profileSelector";
import {Col, Row} from "antd";

const CustomerIcons: FC = () => {

  const iconsBadges = useSelector(getIconsBadgesSelector)

  return (
    <Row style={{backgroundColor:'white', borderRadius: '30px'}}>
      <span style={{fontSize: 'large', fontWeight: 'bold', paddingLeft: '30px'}}>
        Badges: {iconsBadges.length}
      </span>
      <Row>
        {iconsBadges.map(elements=>
          <Col span={4} key={elements.id} >
            <img style={{width:'100%', height:'100%', borderRadius: '50%', padding:10}} src={elements.img} alt='noPhoto'/>
          </Col>
        )}
      </Row>
    </Row>

  )
}

export default CustomerIcons