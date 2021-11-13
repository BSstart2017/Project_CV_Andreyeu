import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {getProfileUser, getProfileStatus, getAddProfileStatus} from "./../../redux/profile-reducer";
import { withRouter } from "react-router";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  
  componentDidMount(){
    let userId = this.props.match.params.userId
    if (!userId){
      userId = this.props.myId
    }
    this.props.getProfileUser(userId)
    this.props.getProfileStatus(userId)
   } 
  
  render() {
    return (
      <>
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} getAddProfileStatus={this.props.getAddProfileStatus}/>
      </>
    );
  }
}

let mapPropsToState = (state) => ({
  profile: state.profileReducer.profile,
  myId: state.authReducer.id,
  status: state.profileReducer.status
})

export default compose(connect(mapPropsToState, {getProfileUser, getProfileStatus,getAddProfileStatus}), 
withRouter)(ProfileContainer)