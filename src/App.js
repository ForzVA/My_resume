import { useEffect } from "react";
import "./App.css";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import HardSkills from "./components/HardSkills/HardSkills";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SoftSkills from "./components/SoftSkills/SoftSkills";

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
