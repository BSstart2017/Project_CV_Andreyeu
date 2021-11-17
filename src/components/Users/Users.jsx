import React from "react";
import Paginator from "../commons/Paginator/Paginator";
import User from "./User";

const Users = ({
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
};

export default Users;
