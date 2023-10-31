import Navbar from "./Components/NavBar/navbar.js";
import Intro from "./Components/Intro/intro.js";
import Skills from "./Components/Skills/skills";
import Project from "./Components/Projects/projects";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer"

function App() {
  return (
    <div className="App">

      <Navbar />
      <Intro />
      <Skills />
      <Project />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
