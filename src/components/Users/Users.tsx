import React from "react";
import { UserResponseType } from "../../api/users-api";
import Paginator from "../commons/Paginator/Paginator";
import User from "./User";
import { UserContainerOwnPropsType } from "./UsersContainer";

const Users: React.FC<UsersStateToPropsType & UsersDispatchToPropsType & UserContainerOwnPropsType> = React.memo(({
  totalUsers,
  pageCount,
  activePage,
  setCurrentPage,
  users,
  isToggleFollow,
  toggleUnFollow,
  toggleFollow,
}) => {
  return (
    <div>
      <Paginator
        totalUsers={totalUsers}
        pageCount={pageCount}
        activePage={activePage}
        setCurrentPage={setCurrentPage}
      />
      {users.map((el) => (
        <User
          user={el}
          isToggleFollow={isToggleFollow}
          toggleUnFollow={toggleUnFollow}
          toggleFollow={toggleFollow}
          key={el.id}
        />
      ))}
    </div>
  );
})

export default Users;


type UsersStateToPropsType = {
  users : Array<UserResponseType>
  pageCount : number 
  totalUsers : number
  activePage : number
  isToggleFollow : Array<number>
}

type UsersDispatchToPropsType = {
  toggleFollow : (userId: number) => void
  toggleUnFollow : (userId: number) => void
}