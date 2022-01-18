import React, { FC} from "react";
import ProfileStatus from "./ProfileStatus/ProfileStatus"
import userDefaultImg from "./../../../assets/images/userDefault.jpg";
import {ProfileResponseDataType} from "../../../api/profile-api";
import {useDispatch} from "react-redux";
import {getNewAvatar} from "../../../redux/profile-reducer";
import {Badge, Button, Col, Row, Upload} from "antd";
import SocialLink from "../../SocialLink/SocialLink";
import {UploadOutlined} from "@ant-design/icons";
import {UploadRequestOption} from "rc-upload/es/interface"

const ProfileInfo: FC<PropsType> = ({profile, status, isOwner}) => {

  const dispatch = useDispatch()

  const onAddNewAvatar = (options: UploadRequestOption<any>) => {
    const { onSuccess, onError, file} = options;
    try {
      dispatch(getNewAvatar(file as File))
      if (onSuccess) {
        onSuccess("Ok");
      }
    } catch (err) {
      // @ts-ignore
      onError({ err });
    }

  }

  return (
    <>
      {profile === null ? <></>
        : <>
          <Col span={24} style={{
            background: `url(${process.env.PUBLIC_URL}/assets/images/Members/5f6d2c93c75db-bp-cover-image.jpg)
     center center / cover no-repeat`, borderRadius: '30px 30px 0px 0px', height: '400px'
          }}>
            <div style={{textAlign: 'center', paddingTop: 250}}>
              <Badge count={1} color={"blue"} offset={[-75, 150]} style={{fontSize: 'large'}}>
                <img src={profile.photos.small || userDefaultImg} alt='noPhoto'
                     style={{height: '150px', borderRadius: '30px'}}/>
              </Badge>
            </div>
          </Col>
          <Row justify={"center"} style={{
            textAlign: 'center', paddingTop: 40, paddingBottom: 40, backgroundColor: 'white',
            borderRadius: '0px 0px 30px 30px'
          }}>
            <Col span={8}>
              <Row>
                <Col span={8}>
                  <div><span>10</span></div>
                  <div><span>Post</span></div>
                </Col>
                <Col span={8}>
                  <div><span>6</span></div>
                  <div><span>Friends</span></div>
                </Col>
                <Col span={8}>
                  <div><span>4</span></div>
                  <div><span>Comments</span></div>
                </Col>
              </Row>
            </Col>
            <Col span={8}>
              <div><span>{profile.fullName}</span></div>
              <div><span>{profile.contacts.facebook}</span></div>
              <ProfileStatus statusText={status}/>
            </Col>
            <Col span={8}>
              <SocialLink/>
            </Col>
          </Row>
          <Col span={24}>
            {isOwner &&  <Upload customRequest={onAddNewAvatar} maxCount={1} listType="picture">
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>}
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

