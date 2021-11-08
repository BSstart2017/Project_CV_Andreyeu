import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {getAuthUser} from "./../../redux/auth-reducer"

class HeaderContainer extends React.Component{

  componentDidMount(){
    this.props.getAuthUser()
   }

  render(){
    return <Header {...this.props}/>
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.authReducer.isLogin,
  login: state.authReducer.login
})

export default connect(mapStateToProps, {getAuthUser})(HeaderContainer)