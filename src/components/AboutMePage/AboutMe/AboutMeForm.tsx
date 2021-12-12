import React, {FC} from 'react';
import { Form, SubmitButton, ResetButton } from 'formik-antd'
import { Formik } from 'formik'
import Input from 'formik-antd/es/input'
import {ProfileResponseDataType} from "../../../api/profile-api";
import {useDispatch, useSelector} from "react-redux";
import {getAddProfileStatus, getNewContactsEdit} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/store";

const AboutMeForm: FC<PropsType> = ({ status}) => {

  const profile = useSelector((state: AppStateType) => state.profileReducer.profile)
  const dispatch = useDispatch()

  const onSubmitData = (value:FormType) => {
    dispatch(getAddProfileStatus(value.status))
    if(profile) dispatch(getNewContactsEdit({...profile, aboutMe: value.aboutMe, fullName: value.fullName }))
  }

  return (
    <Formik initialValues={{fullName: '', aboutMe: '', status:''} } onSubmit={onSubmitData}>
      <Form>
        <div style={{paddingBottom: 20}}>
          <p>
            <span style={{fontSize: 'large', fontWeight: 'bold'}}>Full Name: </span>
          </p>
          <Input type="text" name='fullName' placeholder={profile?.fullName} />
        </div>
        <div style={{paddingBottom: 20}}>
          <p>
            <span style={{fontSize: 'large', fontWeight: 'bold'}}>About Me: </span>
          </p>
          <Input type="text" name='aboutMe' placeholder={profile?.aboutMe} />
        </div>
        <div style={{paddingBottom: 20}}>
          <p>
            <span style={{fontSize: 'large', fontWeight: 'bold'}}>Status: </span>
          </p>
          <Input type="text" name='status' placeholder={status} />
        </div>
        <div style={{paddingBottom: 20}}>
          <ResetButton style={{marginRight: 20}}>All clear field</ResetButton>
          <SubmitButton>Save</SubmitButton>
        </div>
      </Form>
    </Formik>
  )
}

export default AboutMeForm;



type FormType = {
  fullName: string
  aboutMe: string
  status: string
}

type PropsType = {
  status: string
  profile: ProfileResponseDataType | null
}
