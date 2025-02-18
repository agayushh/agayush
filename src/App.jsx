import Navbar from "./components/Navbar";
import About from "./components/About";
import Information from "./components/Information";
import Socials from "./components/Socials";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <div className="h-auto w-full bg-gradient-radial from-slate-900 to-slate-950 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] flex justify-center items-center">
        <div className="bg-black h-[200vh] w-[890px]">
          <About />
          <Information />
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default App;
