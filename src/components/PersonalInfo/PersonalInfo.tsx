import React, {FC, useState} from 'react';
import {Divider} from "antd";
import {FormOutlined} from "@ant-design/icons";
import PersonalInfoForm from "./PersonalInfoForm";
import {useSelector} from "react-redux";
import {ProfileContactsDataType} from "../../api/profile-api";
import {getProfileSelector} from "../../redux/Selectors/profileSelector";

const PersonalInfo: FC = () => {

  const profile = useSelector(getProfileSelector)

  let [editPersonalInfo, setEditPersonalInfo] = useState<boolean>(false)

  const onEditAboutMe = () => {
    setEditPersonalInfo(!editPersonalInfo)
  }

  return (

    <div>
      <Divider orientation="center" style={{paddingLeft: 30, paddingRight: 30}} >Personal info:  <FormOutlined onClick={onEditAboutMe}/></Divider>
      <div style={{paddingLeft: 30, paddingRight: 5}}>
        {editPersonalInfo
          ? <>
            <PersonalInfoForm onSubmit={values => {}} profile={profile} setEditPersonalInfo={setEditPersonalInfo}/>
          </>
          : profile ? <>
            {Object.keys(profile?.contacts).map(key => {
                return (
                  <p key={key}>
                    <span style={{fontSize: 'large', fontWeight: 'bold'}}>{key} : </span>
                    <span style={{fontSize: '16px'}}>{profile?.contacts[key as keyof ProfileContactsDataType]}</span>
                  </p>
                )
              }
            )}
          </> : <></>}
      </div>
    </div>
  )

}

export default PersonalInfo