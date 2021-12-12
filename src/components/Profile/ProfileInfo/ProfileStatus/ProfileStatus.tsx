import React, { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import {getAddProfileStatus} from "../../../../redux/profile-reducer";

const ProfileStatus: React.FC<PropsType> = ({statusText}) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(statusText)

    const dispatch = useDispatch()

    const onEditModeChangeFalse = () => {
        setEditMode(false)
        dispatch(getAddProfileStatus(status))
    }

    const onEditModeChangeTrue = () => {
        setEditMode(true)
    }
    
    const OnStatusChange = (e: { target: HTMLInputElement }) => {
        setStatus(e.target.value)
    }
    

    useEffect(() => {
        setStatus(statusText)
    }, [statusText])

        return (
            <>
            {!editMode ? <div><span onClick={onEditModeChangeTrue}>{statusText || "No status"}</span></div>
            :<div><input autoFocus={true} onChange={OnStatusChange}
            onBlur={onEditModeChangeFalse} value={status} /></div>}
            </>
        )
  }

export default ProfileStatus 

type PropsType = {
    statusText: string
}