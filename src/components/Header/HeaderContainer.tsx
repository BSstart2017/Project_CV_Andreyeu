import { connect } from "react-redux";
import Header from "./Header";
import {getLogout} from "../../redux/auth-reducer"
import { AppStateType } from "../../redux/store";


const mapStateToProps = (state:AppStateType): HeaderStateToPropsType => ({
  isLogin: state.authReducer.isLogin,
  login: state.authReducer.login
})

export default connect<HeaderStateToPropsType, HeaderDispatchToPropsType, {} , AppStateType>(mapStateToProps, {getLogout})(Header)


export type HeaderDispatchToPropsType = {
  getLogout : () => void
}

export type HeaderStateToPropsType = {
  isLogin: boolean
  login: string | null
}