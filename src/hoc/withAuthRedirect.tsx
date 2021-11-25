import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { AppStateType } from "../redux/store";

let mapStateToProps = (state : AppStateType): MapStateToPropsType => ({
        isLogin: state.authReducer.isLogin
})

export function withAuthRedirect<CP>(Component : React.ComponentType<CP>){

    const RedirectComponent: React.FC<MapStateToPropsType> = (props) => {
        let {isLogin , ...restProps} = props
            if(!isLogin) return <Redirect to="/login"/>
            return <Component {...restProps as CP}/>
    }

    let withAuthRedirectConnect = connect<MapStateToPropsType, {}, CP, AppStateType>(mapStateToProps)
    (RedirectComponent)

    return withAuthRedirectConnect
}

type MapStateToPropsType = {
    isLogin: boolean
}