import React, {FC, useEffect} from "react";
import {Provider, useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";
import "./App.css";
import 'formik-antd/es/input/style'
import Preloader from "./components/commons/Preloader/Preloader";
import {initializedApp} from "./redux/app-reducer"
import store, {AppStateType} from "./redux/store";
import 'antd/dist/antd.css';
import {StartLoginPage} from "./Pages/StartLoginPage/StartLoginPage";

const App: FC = () => {

  const initialized = useSelector((state: AppStateType) => state.appReducer.initialized)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializedApp())
  }, [initializedApp])

  if (!initialized) return <Preloader/>
  return (
      <Route path="/" render={() => <StartLoginPage/>}/>
  )
}

export const AppSocialProject = () => {
  return <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
}


