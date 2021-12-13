import React, {ChangeEvent, FC, useState} from 'react';
import { Form, SubmitButton, ResetButton } from 'formik-antd'
import { Formik } from 'formik'
import Input from 'formik-antd/es/input'
import {ProfileResponseDataType} from "../../api/profile-api";
import {useDispatch} from "react-redux";
import {getAddProfileStatus, getNewContactsEdit} from "../../redux/profile-reducer";

const AboutMeForm: FC<PropsType> = ({ status,profile , setEditAboutMe}) => {

  const dispatch = useDispatch()
  let [fullName, setFullName] = useState(profile?.fullName)
  let [aboutMe, setAboutMe] = useState(profile?.aboutMe)
  let [statusActual, setStatusActual] = useState(status)
  const onSubmitData = (value:FormType) => {
    dispatch(getAddProfileStatus(value.status))
    if(profile) {
      dispatch(getNewContactsEdit({...profile, aboutMe: value.aboutMe, fullName: value.fullName}))
    }
    setEditAboutMe(false)
  }

  const onSetFullName = (e:ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value)
  }
  const onSetAboutMe = (e:ChangeEvent<HTMLInputElement>) => {
    setAboutMe(e.target.value)
  }
  const onSetStatusActual = (e:ChangeEvent<HTMLInputElement>) => {
    setStatusActual(e.target.value)
  }

  return (
    <Formik initialValues={{fullName: '', aboutMe: '', status:''} }  onSubmit={onSubmitData}>
      <Form>
        <div style={{paddingBottom: 20, paddingRight: 20}}>
          <p>
            <span style={{fontSize: 'large', fontWeight: 'bold'}}>Full Name: </span>
          </p>
          <Input type="text" name='fullName' value={fullName} onChange={onSetFullName}/>
        </div>
        <div style={{paddingBottom: 20 , paddingRight: 20}}>
          <p>
            <span style={{fontSize: 'large', fontWeight: 'bold'}}>About Me: </span>
          </p>
          <Input type="text" name='aboutMe' value={aboutMe} onChange={onSetAboutMe}/>
        </div>
        <div style={{paddingBottom: 20, paddingRight: 20}}>
          <p>
            <span style={{fontSize: 'large', fontWeight: 'bold'}}>Status: </span>
          </p>
          <Input type="text" name='status' value={statusActual} onChange={onSetStatusActual} />
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
  setEditAboutMe: (editAboutMe:boolean) => void
}
