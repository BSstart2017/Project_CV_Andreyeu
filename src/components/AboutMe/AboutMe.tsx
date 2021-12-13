import React, {FC, useState} from 'react';
import {Col, Divider, Row} from "antd";
import {FormOutlined} from "@ant-design/icons";
import AboutMeForm from "./AboutMeForm";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";

const AboutMe: FC = () => {

  const profile = useSelector((state: AppStateType) => state.profileReducer.profile)
  const status = useSelector((state: AppStateType) => state.profileReducer.status)

  let [editAboutMe, setEditAboutMe] = useState<boolean>(false)

  const onEditAboutMe = () => {
    setEditAboutMe(!editAboutMe)
  }

  return (
    <Row justify={"center"} style={{backgroundColor:'white', borderRadius: '30px', marginBottom: 20}}>
      <Divider orientation="center" style={{paddingLeft: 30, paddingRight: 30}} >About Me <FormOutlined onClick={onEditAboutMe}/></Divider>
      <Col style={{paddingLeft: 30}} span={24}>
        {editAboutMe
          ? <>
            <AboutMeForm status={status} profile={profile} setEditAboutMe={setEditAboutMe}/>
          </>
          :<>
            <p>
              <span style={{fontSize: 'large', fontWeight: 'bold'}}>Full name: </span>
              <span style={{fontSize: '16px'}}>{profile?.fullName}</span>
            </p>
            <p><span style={{fontSize: 'large', fontWeight: 'bold'}}>About Me: </span>
              <span style={{fontSize: '16px'}}>{profile?.aboutMe || "Write something about yourself"}</span></p>
            <p>
              <span style={{fontSize: 'large', fontWeight: 'bold'}}>Status: </span>
              <span style={{fontSize: '16px'}}>{status}</span>
            </p>
          </>}
      </Col>
    </Row>
  )
}

export default AboutMe