import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {getLogout} from "./../../redux/auth-reducer"

const HeaderContainer = ({getLogout, ...props}) =>{
    return <Header {...props} getLogout={getLogout}/>
}

const mapStateToProps = (state) => ({
  isLogin: state.authReducer.isLogin,
  login: state.authReducer.login
})

export default connect(mapStateToProps, {getLogout})(HeaderContainer)