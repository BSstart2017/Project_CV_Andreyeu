import React, {FC, useState} from 'react';
import {ProfileResponseDataType} from "../../../api/profile-api";
import {Divider} from "antd";
import {FormOutlined} from "@ant-design/icons";
import AboutMeForm from "./AboutMeForm";

const AboutMe: FC<PropsType> = ({profile, status}) => {

  let [editAboutMe, setEditAboutMe] = useState<boolean>(false)

  const onEditAboutMe = () => {
    setEditAboutMe(!editAboutMe)
  }

  return (
    <div>
      <Divider orientation="center" >About Me <FormOutlined onClick={onEditAboutMe}/></Divider>
      <div style={{paddingLeft: 30}}>
        {editAboutMe
          ? <>
            <AboutMeForm status={status} profile={profile}/>
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
      </div>
    </div>
  )
}

export default AboutMe

type PropsType = {
  status: string
  profile: ProfileResponseDataType | null
}