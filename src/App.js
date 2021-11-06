import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SiteBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <SiteBar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile" render={() => <Profile /> } />
          <Route path="/users" render={() => <UsersContainer /> } />
        </div>
        <Footer />
      </div>
  );
};

export default App;
