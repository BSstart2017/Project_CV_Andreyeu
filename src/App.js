import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Footer from "./components/Footer/Footer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import SiteBar from "./components/NavBar/NavBar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";



const App = () => {
  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <SiteBar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer /> } />
          <Route path="/users" render={() => <UsersContainer /> } />
          <Route path="/login" render={() => <Login /> } />
        </div>
        <Footer />
      </div>
  );
};

export default App;
