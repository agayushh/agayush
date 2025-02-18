import Navbar from "./components/Navbar";
import About from "./components/About";
import Information from "./components/Information";
import Socials from "./components/Socials";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div>
      <div className="sticky">
        <Navbar />
      </div>
      <div className="h-[300vh] w-full bg-gradient-radial bg-black flex justify-center relative">
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 h-[300vh] w-[890px] mt-5 rounded-md ">
          <About />
          <Information />
          <AboutMe />
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default App;
