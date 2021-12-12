import React, {ChangeEvent, FC, useState} from "react";
import ProfileStatus from "./ProfileStatus/ProfileStatus"
import userDefaultImg from "./../../../assets/images/userDefault.jpg";
import ProfileContacts from "./ProfileContacts";
import ProfileContactsForm, {ProfileContactsFormDataType} from "./ProfileContactsForm";
import {ProfileResponseDataType} from "../../../api/profile-api";
import {useDispatch} from "react-redux";
import {getNewAvatar, getNewContactsEdit} from "../../../redux/profile-reducer";
import {Badge, Col, Input, Row} from "antd";
import SocialLink from "../../SocialLink/SocialLink";
import Text from "antd/es/typography/Text";

const ProfileInfo: FC<PropsType> = (
  {profile, status, isOwner}
) => {

  const dispatch = useDispatch()

  const [editMode, setEditMode] = useState(false)

  const onAddNewAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) dispatch(getNewAvatar(e.target.files[0]))
  }

  let onSubmit = (formData: ProfileContactsFormDataType) => {
    dispatch(getNewContactsEdit(formData as ProfileResponseDataType))
    setEditMode(false)
  }

  return (
    <>
      {profile === null ? <></>
        : <>
          <Col span={24} style={{background: `url(${process.env.PUBLIC_URL}/assets/images/Members/5f6d2c93c75db-bp-cover-image.jpg)
     center center / cover no-repeat`, borderRadius: '30px 30px 0px 0px', height: '400px'}}>
            <div style={{textAlign: 'center', paddingTop: 250 }}>
              <Badge count={1} color={"blue"} offset={[-75, 150]} style={{fontSize: 'large'}}>
                <img src={profile.photos.small || userDefaultImg} alt='noPhoto'
                     style={{height: '150px', borderRadius: '30px'}}/>
              </Badge>
            </div>
          </Col>
          <Row justify={"center"} style={{textAlign: 'center', paddingTop: 40, paddingBottom:40 ,backgroundColor:'white'}}>
            <Col span={8}>
              <Row>
                <Col span={8}>
                  <div><Text>10</Text></div>
                  <div><Text>Post</Text></div>
                </Col>
                <Col span={8}>
                  <div><Text>6</Text></div>
                  <div><Text>Friends</Text></div>
                </Col>
                <Col span={8}>
                  <div><Text>4</Text></div>
                  <div><Text>Comments</Text></div>
                </Col>
              </Row>
            </Col>
            <Col span={8}>
              <div><Text>{profile.fullName}</Text></div>
              <div><Text>{profile.contacts.facebook}</Text></div>
              <ProfileStatus statusText={status}/>
            </Col>
            <Col span={8}>
              <SocialLink />
            </Col>
          </Row>
          <Col span={24}>
              {isOwner && <div><Input type="file" onChange={onAddNewAvatar}/></div>}
            </Col>
          <Col span={24}>
            {editMode ?
              <ProfileContactsForm initialValues={profile} setEditMode={setEditMode} onSubmit={onSubmit}
                                   profile={profile}/>
              : <ProfileContacts profile={profile} isOwner={isOwner} setEditMode={setEditMode}/>}
          </Col>
        </>}
    </>
  )
}

export default ProfileInfo

type PropsType = {
  profile: ProfileResponseDataType | null
  status: string
  isOwner: boolean
}

