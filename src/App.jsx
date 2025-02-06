import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <div className="h-auto w-full bg-gradient-radial from-slate-900 to-slate-950 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] flex justify-center items-center">
        <div className="bg-white h-[200vh] w-[890px]">
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
