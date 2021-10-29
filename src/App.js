import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SiteBar from "./components/NavBar";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <SiteBar />
      <Profile />
      <Footer />
    </div>
  );
};

export default App;
