import Objectives from "./Objectives";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Education from "./Education";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Justin Elder Resume</h1>
      <Contact/>
      <AboutMe/>
      <Header/>
      <Objectives/>
      <Education/>
    </div>
    
  );
}

export default App;
