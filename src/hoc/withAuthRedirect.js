import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

let mapStateToProps = (state) => {
    return {
        isLogin: state.authReducer.isLogin
    }
}

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component{
        render(){
            if(!this.props.isLogin) return <Redirect to="/login"/>
            return <Component {...this.props}/>
        }      
    }

    let withAuthRedirectConnect = connect(mapStateToProps)(RedirectComponent)

    return withAuthRedirectConnect
}