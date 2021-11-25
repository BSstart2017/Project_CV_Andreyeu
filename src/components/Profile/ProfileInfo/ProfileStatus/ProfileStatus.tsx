import React from "react";
import style from "./ProfileStatus.module.css";

const ProfileStatus: React.FC<PropsType> = ({statusText, getAddProfileStatus}) => {

    const [editMode, setEditMode] = React.useState(false)
    const [status, setStatus] = React.useState(statusText)
    
    const onEditModeChangeFalse = () => {
        setEditMode(false)
        getAddProfileStatus(status) 
    }

    const onEditModeChangeTrue = () => {
        setEditMode(true)
    }
    
    const OnStatusChange = (e: { target: HTMLInputElement }) => {
        setStatus(e.target.value)
    }
    

    React.useEffect(() => {
        setStatus(statusText)
    }, [statusText])

        return (
            <div className={style.profileInfoBlock}>
            {!editMode ? <div><span onClick={onEditModeChangeTrue}>{statusText || "No status"}</span></div>
            :<div><input autoFocus={true} onChange={OnStatusChange} 
            onBlur={onEditModeChangeFalse} value={status} /></div>}
            </div>
        )
  }

export default ProfileStatus 

type PropsType = {
    statusText: string
    getAddProfileStatus: (status : string) => void
}