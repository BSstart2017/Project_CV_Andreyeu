import React, {ChangeEvent, FC, MouseEventHandler, useState} from 'react';
import { Form, SubmitButton, ResetButton, Input } from 'formik-antd'
import { Formik } from 'formik'
import {ProfileResponseDataType} from "../../api/profile-api";
import {useDispatch} from "react-redux";
import {getAddProfileStatus, getNewContactsEdit} from "../../redux/profile-reducer";

const AboutMeForm: FC<PropsType> = ({ status,profile , setEditAboutMe, onSubmit}) => {

  const dispatch = useDispatch()

  let [fullName, setFullName] = useState(profile?.fullName)
  let [aboutMe, setAboutMe] = useState(profile?.aboutMe)
  let [statusActual, setStatusActual] = useState(status)

  const handleSubmit = async (value:FormType) => {
    onSubmit(value)
    await dispatch(getAddProfileStatus(value.status))
    if(profile) {
      await dispatch(getNewContactsEdit({...profile, aboutMe: value.aboutMe, fullName: value.fullName}))
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

  const handleReset = () => {
    setAboutMe('')
    setFullName('')
    setStatusActual('')
  }


  return (
    <Formik<FormType> initialValues={{fullName: '', aboutMe: '', status:''}}  onSubmit={handleSubmit}>
      <Form>
        <div style={{paddingBottom: 20, paddingRight: 20}}>
          <p>
            <span style={{fontSize: 'large', fontWeight: 'bold'}}>Full Name: </span>
          </p>
          <Input type="text" name='fullName' aria-label='fullName' value={fullName} onChange={onSetFullName}/>
        </div>
        <div style={{paddingBottom: 20 , paddingRight: 20}}>
          <p>
            <span style={{fontSize: 'large', fontWeight: 'bold'}}>About Me: </span>
          </p>
          <Input type="text" name='aboutMe' aria-label='aboutMe' value={aboutMe} onChange={onSetAboutMe}/>
        </div>
        <div style={{paddingBottom: 20, paddingRight: 20}}>
          <p>
            <span style={{fontSize: 'large', fontWeight: 'bold'}}>Status: </span>
          </p>
          <Input type="text" name='status' aria-label='status' value={statusActual} onChange={onSetStatusActual} />
        </div>
        <div style={{paddingBottom: 20}}>
          <ResetButton style={{marginRight: 20}} onClick={handleReset}>All clear field</ResetButton>
          <SubmitButton>Save</SubmitButton>
        </div>
      </Form>
    </Formik>
  )
}

export default AboutMeForm



type FormType = {
  fullName: string
  aboutMe: string
  status: string
}

type PropsType = {
  status: string
  profile: ProfileResponseDataType | null
  setEditAboutMe: (editAboutMe:boolean) => void
  onSubmit: (values : FormType) => void
}
