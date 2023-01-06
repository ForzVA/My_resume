import { useEffect } from "react";
import "./App.scss";
import Courses from "../Courses/Courses";
import Footer from "../Footer/Footer";
import HardSkills from "../HardSkills/HardSkills";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SoftSkills from "../SoftSkills/SoftSkills";

function App() {
  useEffect(() => {
    document.title = "Alex Vasilevsky";
  }, []);

  return (
    <div className="App">
      <div className="helloBlock">
        <div className="helloText">Hello, visitor</div>
        <div className="progressBar">
          <span></span>
        </div>
      </div>

      <div className="all">
        <Header />
        <Main />
        <SoftSkills />
        <HardSkills />
        <Courses />
        <Footer />
      </div>
    </div>
  );
}

export default App;
