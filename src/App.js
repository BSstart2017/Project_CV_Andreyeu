import { Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SiteBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";


const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <SiteBar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogPage} dispatch={props.dispatch}/>} />
          <Route path="/profile" render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch} /> } />
        </div>
        <Footer />
      </div>
  );
};

export default App;
