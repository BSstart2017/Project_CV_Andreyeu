import { connect } from "react-redux";
import {getLogin} from "./../../redux/auth-reducer"
import { AppStateType } from "../../redux/store";
import Login from "./Login";

let mapStateToProps = (state : AppStateType) : LoginStateToPropsType => {
 return {
  isLogin: state.authReducer.isLogin,
  captcha: state.authReducer.captcha
 }
}

export default connect<LoginStateToPropsType, LoginDispatchToPropsType, {} , AppStateType>(mapStateToProps, {getLogin})(Login)

export type LoginStateToPropsType = {
    isLogin: boolean
    captcha: string | null
}

export type LoginDispatchToPropsType = {
    getLogin: (email : string, password: string, rememberMe: boolean, captcha: any) => void
}