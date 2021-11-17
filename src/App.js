import React, {useEffect} from "react";
import { connect, Provider } from "react-redux";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import Preloader from "./components/commons/Preloader/Preloader";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Footer from "./components/Footer/Footer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import SiteBar from "./components/NavBar/NavBar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {initializedApp} from "./redux/app-reducer"
import store from "./redux/store";

const App = ({initializedApp, initialized}) => {

  useEffect(() => {
      initializedApp()
  })

    if(!initialized) return <Preloader />
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <SiteBar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginContainer />} />
        </div>
        <Footer />
      </div>
    );
}

const mapStateToProps = (state) =>{
  return {
    initialized: state.appReducer.initialized
  }
}


const AppContainer = compose(withRouter, connect(mapStateToProps, {initializedApp}))(App)

const AppSocialProject = () => {
 return <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
</React.StrictMode>
}

export default AppSocialProject
