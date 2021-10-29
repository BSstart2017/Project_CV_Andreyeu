import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SiteBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <SiteBar />
      <div className="app-wrapper-content">
        <Route path= "/dialogs" component={Dialogs}/>
        <Route path= "/profile" component={Profile}/>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
};

export default App;
