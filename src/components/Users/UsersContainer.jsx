import React from "react";
import { connect } from "react-redux";
import {toggleUnFollow, getUsers, toggleFollow } from "../../redux/users-reducer";
import Preloader from "./../commons/Preloader/Preloader";
import Users from './Users';

class UsersContainer extends React.Component {
  componentDidMount(){
    this.props.getUsers(this.props.activePage, this.props.pageCount)
     }
   
   setCurrentPage = (page) => {
    this.props.getUsers(page, this.props.pageCount)
   }
   
   render(){
      return <>
      {this.props.isPreloader ? <Preloader /> 
      : <Users totalUsers = {this.props.totalUsers} pageCount={this.props.pageCount} activePage={this.props.activePage}
      users = {this.props.users} setCurrentPage = {this.setCurrentPage} isToggleFollow= {this.props.isToggleFollow} 
      toggleFollow={this.props.toggleFollow} toggleUnFollow={this.props.toggleUnFollow}
     />} 
      </>
   }
}

let mapPropsToState = (state) => {
  return {
    users: state.usersReducer.users,
    pageCount: state.usersReducer.pageCount,
    totalUsers: state.usersReducer.totalUsers,
    activePage: state.usersReducer.activePage,
    isPreloader: state.usersReducer.isPreloader,
    isToggleFollow: state.usersReducer.isToggleFollow
  }
}

export default connect(mapPropsToState, { getUsers, toggleFollow, toggleUnFollow} )(UsersContainer)
