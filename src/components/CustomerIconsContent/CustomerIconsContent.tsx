import React, {FC} from 'react';
import {Button, Col, Row} from "antd";
import {UserResponseType} from "../../api/users-api";
import userDefaultIg from "./../../assets/images/userDefault.jpg";
import {UserAvatar} from "../UserAvatar/UserAvatar";

const CustomerIconsContent: FC<PropsType> = ({icons, title, next, total}) => {

  return (
    <Row style={{backgroundColor:'white', borderRadius: '30px', marginBottom: 20}}>
      <span style={{fontSize: 'large', fontWeight: 'bold', paddingLeft: '30px'}}>
        {title}: {total ? total : ''}
      </span>
      <Col span={24}>
        {icons.map(elements=>
          <Row  key={elements.id} >
            <Col span={4}>
              <UserAvatar avatar={elements.photos.small} title={elements.name}/>
            </Col>
            <Col span={20}>
              <span style={{fontSize: 'large', fontWeight: 'bold'}}>{elements.name}</span><br/>
              <span style={{fontSize: 'small'}}>{elements.status || 'no status'}</span>
            </Col>
          </Row>
        )}
      </Col>
      <Col span={24} style={{textAlign: 'center', paddingBottom: 20, paddingTop: 10}}>
        { total ? total > icons.length && <Button onClick={next}>Show more</Button> : <></> }
      </Col>

    </Row>

  )
}

export default CustomerIconsContent

type PropsType = {
  icons:  Array<UserResponseType>
  title: string
  next?: () => void
  total?: number
}