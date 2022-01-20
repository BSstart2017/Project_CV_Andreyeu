import React, {FC, useState} from 'react';
import {Divider} from "antd";
import {FormOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import InterestsForm from "./InterestsForm";

const Interests: FC = () => {
  const profile = useSelector((state: AppStateType) => state.profileReducer.profile)
  const status = useSelector((state: AppStateType) => state.profileReducer.status)

  let [editAboutMe, setEditAboutMe] = useState<boolean>(false)

  const onEditAboutMe = () => {
    setEditAboutMe(!editAboutMe)
  }
  return (
    <div>
      <Divider orientation="center" style={{paddingLeft: 30, paddingRight: 30}} >Interests <FormOutlined onClick={onEditAboutMe}/></Divider>
      <div style={{paddingLeft: 30}}>
        {editAboutMe
          ? <>
            <InterestsForm onSubmit={(value => {})} status={status} profile={profile} setEditAboutMe={setEditAboutMe}/>
          </>
          :<>
            <p>
              <span style={{fontSize: 'large', fontWeight: 'bold'}}>Looking for a job: </span>
              <span  style={{fontSize: '16px'}}>{profile?.lookingForAJob ? 'Yes' : 'No'}</span>
            </p>
            <p><span style={{fontSize: 'large', fontWeight: 'bold'}}>Skills: </span>
              <span style={{fontSize: '16px'}}>{profile?.lookingForAJobDescription || "I don’t have any skills!"}</span></p>
          </>}
      </div>
    </div>
  )
}

export default Interests