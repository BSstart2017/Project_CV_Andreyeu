import React, {FC, useEffect} from "react";
import {Provider, useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";
import Preloader from "./components/commons/Preloader/Preloader";
import {initializedApp} from "./redux/app-reducer"
import store from "./redux/store";
import {StartLoginPage} from "./Pages/StartLoginPage/StartLoginPage";
import {getInitialized} from "./redux/Selectors/appSelector";

const App: FC = () => {
  const initialized = useSelector(getInitialized)
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


