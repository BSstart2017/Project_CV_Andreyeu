import React, {useState,useEffect} from "react";
import style from "./ProfileStatus.module.css";


const ProfileStatus = ({statusText, getAddProfileStatus}) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(statusText)
    
    const onEditModeChangeFalse = () => {
        setEditMode(false)
        getAddProfileStatus(status) 
    }

    const onEditModeChangeTrue = () => {
        setEditMode(true)
    }
    
    const OnStatusChange = (e) => {
        setStatus(e.target.value)
    }
    

    useEffect(() => {
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