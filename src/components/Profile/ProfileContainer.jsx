import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {getProfileUser} from "./../../redux/profile-reducer";
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {
  
  componentDidMount(){
    let userId = this.props.match.params.userId
    if (!userId){
      userId = this.props.myId
    }
    this.props.getProfileUser(userId)
   } 
  
  render() {
    return (
      <>
      <Profile {...this.props}  profile={this.props.profile} />
      </>
    );
  }
}

let mapPropsToState = (state) => ({
  profile: state.profileReducer.profile,
  myId: state.authReducer.id
})

let witchRouterProfile = withRouter(ProfileContainer)

export default connect(mapPropsToState, {getProfileUser})(witchRouterProfile);
