import React, {FC} from 'react';
import userDefaultImg from "../../assets/images/userDefault.jpg";

export const UserAvatar: FC<PropsType> = ({avatar, title}) => {
  return (
    <img title={title ? title : ''} style={{width:'100%', borderRadius: '50%', padding:10}}
         src={avatar || userDefaultImg} alt='noPhoto'/>
  )
}

type PropsType = {
  avatar: string | null | undefined
  title: string | null
}