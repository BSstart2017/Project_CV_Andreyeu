import React, {FC} from 'react';
import { Form, SubmitButton, ResetButton, Input  } from 'formik-antd'
import { Formik } from 'formik'
import {ProfileContactsDataType, ProfileResponseDataType} from "../../api/profile-api";
import {useDispatch} from "react-redux";
import {getNewContactsEdit} from "../../redux/profile-reducer";

const PersonalInfoForm: FC<PropsType> = ({ profile , setEditPersonalInfo}) => {

  const dispatch = useDispatch()
  const onSubmitData = (value:FormType) => {
    if(profile) {
      dispatch(getNewContactsEdit({...profile, contacts: value.contacts}))
    }
    setEditPersonalInfo(false)
  }

  return (
    <Formik initialValues={{contacts: {facebook:'', github: '', vk: '', instagram: '', twitter: '', mainLink: '', website: '',
      youtube: ''}}} onSubmit={onSubmitData}>
      <Form>
        <div style={{paddingBottom: 20}}>
          {profile ? <>
          {Object.keys(profile?.contacts).map(key => <div style={{paddingRight: 20}} key={key}>
              <p>
                <span style={{fontSize: 'large', fontWeight: 'bold'}}>{key} : </span>
              </p>

              <Input type="text" name={`contacts.${key}`} placeholder={profile?.contacts[key as keyof ProfileContactsDataType]}/>
            </div>
          )}
        </> : <></>}
        </div>
        <div style={{paddingBottom: 20}}>
          <ResetButton style={{marginRight: 20}}>All clear field</ResetButton>
          <SubmitButton>Save</SubmitButton>
        </div>
      </Form>
    </Formik>
  )
}


export default PersonalInfoForm;



type FormType = {
contacts: ProfileContactsDataType
}

type PropsType = {
  profile: ProfileResponseDataType | null
  setEditPersonalInfo: (editPersonalInfo:boolean) => void
}
