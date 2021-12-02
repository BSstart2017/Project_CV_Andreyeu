import React from "react";
import {Form, InjectedFormProps, reduxForm} from "redux-form";
import {ProfileResponseDataType} from "../../../api/profile-api";
import {createNewFieldForm, Input, TextArea} from "../../commons/FormControl/FormControl";
import style from "./../Profile.module.css"

const ProfileContactsForm: React.FC<InjectedFormProps<ProfileContactsFormDataType, ProfileOwnPropsType> & ProfileOwnPropsType> =
  ({handleSubmit, profile, setEditMode, error}) => {

    const onSetEditMode = () => {
      setEditMode(false)
    }

    return (
      <Form onSubmit={handleSubmit} className={style.contactsFormContainer}>
        {error && <div className={style.formBlockError}>{error}</div>}
        <div className={style.contactsButtonBlock}>
          <button>Save</button>
          <button onClick={onSetEditMode}>Prev</button>
        </div>
        <div className={style.blockContactsForm}>
          <b>Full name : </b>
          {createNewFieldForm<FormatDataKeysType>(Input, [], "Full name", "fullName")}
          <b>About me :</b>
          {createNewFieldForm<FormatDataKeysType>(TextArea, [], "About me", "aboutMe")}
          <b>Looking for a job
            : </b> {createNewFieldForm<FormatDataKeysType>(Input, [], "", "lookingForAJob", {type: "checkbox"})}
          <b>Looking for a job description :</b>
          {createNewFieldForm<FormatDataKeysType>(TextArea, [], "Looking for a job description", "lookingForAJobDescription")}
          {Object.keys(profile.contacts).map(key => {
              return (
                <div key={key} className={style.blockContacts}>
                  <b>{key} :</b> {createNewFieldForm(Input, [], key, "contacts." + key)}
                </div>
              )
            }
          )}
        </div>
      </Form>
    )
  }

export default reduxForm<ProfileContactsFormDataType, ProfileOwnPropsType>({form: "profileContacts"})(ProfileContactsForm);

//todo Formik + antd

type ProfileOwnPropsType = {
  profile: ProfileResponseDataType
  setEditMode: (editMode: boolean) => void
}

type FormatDataKeysType = Extract<keyof ProfileResponseDataType, string>

export type ProfileContactsFormDataType = {
  fullName: string
  aboutMe: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
}