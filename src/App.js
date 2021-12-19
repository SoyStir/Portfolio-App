import "./App.css";
import Home from "./portfolioContainer/Home/Home";
import AboutMe from "./portfolioContainer/AboutMe/AboutMe";
import Course from "./portfolioContainer/Course/Course";
import Contactme from "./portfolioContainer/ContactMe/Contactme";
import Footer from "./portfolioContainer/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <Home />
      <AboutMe/>
      <Course/>
      <Contactme/>
      <Footer/>
    </div>
  );
}
export default App;
