import { connect } from "react-redux";
import {getLogin} from "../../redux/auth-reducer"
import Login from "./Login";


let mapStateToProps = (state) => {
 return {
  isLogin: state.authReducer.isLogin
 }
}

export default connect(mapStateToProps,{getLogin})(Login)
