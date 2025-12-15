import Navbar from "./components/NavBar/navBar";
import Intro from "./components/Intro/intro";
import Skill from "./components/Skills/skill";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Project from "./components/Projects/project";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
