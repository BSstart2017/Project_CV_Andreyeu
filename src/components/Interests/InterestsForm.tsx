import React, {ChangeEvent, FC, useState} from 'react';
import { Form, SubmitButton, ResetButton } from 'formik-antd'
import { Formik } from 'formik'
import Input from 'formik-antd/es/input'
import {ProfileResponseDataType} from "../../api/profile-api";
import {useDispatch} from "react-redux";
import {getNewContactsEdit} from "../../redux/profile-reducer";
import {Checkbox} from "antd";
import {CheckboxChangeEvent} from "antd/es/checkbox";

const InterestsForm: FC<PropsType> = ({profile , setEditAboutMe}) => {

  const dispatch = useDispatch()
  let [skills, setSkills] = useState(profile?.lookingForAJobDescription)
  let [lookingJob, setLookingJob] = useState(profile?.lookingForAJob)

  const onSubmitData = (value:FormType) => {
    if(profile) {
      dispatch(getNewContactsEdit({...profile, lookingForAJob:value.lookingForAJob,
        lookingForAJobDescription: value.lookingForAJobDescription }))
    }
    setEditAboutMe(false)
  }

  const onSetFullName = (e:ChangeEvent<HTMLTextAreaElement>) => {
    setSkills(e.target.value)
  }

  const onSetLookingJob = (e:CheckboxChangeEvent) => {
    setLookingJob(!lookingJob)
  }

  return (
    <Formik initialValues={{lookingForAJob: false, lookingForAJobDescription: ''} } onSubmit={onSubmitData}>
      <Form>
        <div style={{paddingBottom: 20}}>
          <p>
            <span style={{fontSize: 'large', fontWeight: 'bold'}}>Looking for a job: </span>
            <Checkbox checked={lookingJob} onChange={onSetLookingJob} name="lookingForAJob"/>
          </p>
        </div>
        <div style={{paddingBottom: 20, paddingRight: 20}}>
          <p>
            <span style={{fontSize: 'large', fontWeight: 'bold'}}>Skills: </span>
          </p>
          <Input.TextArea name='lookingForAJobDescription' value={skills} onChange={onSetFullName}/>
        </div>
        <div style={{paddingBottom: 20}}>
          <ResetButton style={{marginRight: 20}}>All clear field</ResetButton>
          <SubmitButton>Save</SubmitButton>
        </div>
      </Form>
    </Formik>
  )
}

export default InterestsForm;



type FormType = {
  lookingForAJob: boolean
  lookingForAJobDescription: string
}

type PropsType = {
  status: string
  profile: ProfileResponseDataType | null
  setEditAboutMe: (editAboutMe:boolean) => void
}
