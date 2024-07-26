import Home from "./UI/Home";
import About from "./UI/About";
import Projects from "./UI/Projects";
import Skills from "./UI/Skills";
import Socials from "./UI/Socials";
import Cta from "./UI/Cta";
import Footer from "./UI/Footer";
import Navigation from "./UI/Navigation";

function App() {
  return (
    <div className="m-12 tabletPortrait:m-8  overflow-x-hidden">
      <Navigation />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Socials />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
