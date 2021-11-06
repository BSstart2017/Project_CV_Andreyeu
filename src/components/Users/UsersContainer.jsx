import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { activePageAC, followAC, setUsersAC, totalUsersAC, unfollowAC } from "../../redux/users-reducer";
import Users from './Users';

class UsersApiContainer extends React.Component {
  componentDidMount(){
       axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageCount}`).then(response=> {
         this.props.setUsers(response.data.items)
         this.props.setTotalUsers(response.data.totalCount)
       })
     }
   
   setCurrentPage = (page) => {
     this.props.setActivePage(page)
     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageCount}`).then(response=> {
         this.props.setUsers(response.data.items)
       })
   }

   render(){
      return <Users totalUsers = {this.props.totalUsers} pageCount={this.props.pageCount} activePage={this.props.activePage}
      users = {this.props.users} follow = {this.props.follow} unfollow = {this.props.unfollow} setActivePage = {this.props.setActivePage} 
      setCurrentPage = {this.setCurrentPage}
     />
   }
}

let mapPropsToState = (state) => {
  return {
    users: state.usersReducer.users,
    pageCount: state.usersReducer.pageCount,
    totalUsers: state.usersReducer.totalUsers,
    activePage: state.usersReducer.activePage
  }
}

let mapDispatchToState = (dispatch) => {
  return {
    follow : (userId) => {
      dispatch(followAC(userId))
    },
    unfollow : (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers : (users) => {
      dispatch(setUsersAC(users))
    },
    setTotalUsers :(totalUsers) => {
      dispatch(totalUsersAC(totalUsers))
    },
    setActivePage :(activePage) => {
      dispatch(activePageAC(activePage))
    }
  }
}

const UsersContainer = connect(mapPropsToState, mapDispatchToState )(UsersApiContainer)

export default UsersContainer;
