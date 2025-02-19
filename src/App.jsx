import Navbar from "./components/Navbar";
import About from "./components/About";
import Information from "./components/Information";
import Socials from "./components/Socials";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import OpenSourceContributions from "./components/OpenSourceContribution";
import Blogs from "./components/Blogs";
import Events from "./components/Events";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <div className="sticky bg-gradient-to-b from-black via-[#1B2C4F] to-[#1B2C4F]">
        <Navbar />
      <div className="w-full flex justify-center h-fit pb-6">
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 h-fit w-[890px] rounded-2xl ">
          <About />
          <Information />
          <AboutMe />
          <Skills />
          <Experience />
          <Projects />
          <OpenSourceContributions />
          <Blogs />
          <Events />
          <Contact />
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
