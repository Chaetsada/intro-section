import "./App.css";
import Navbar from "./Components/Navbar";
import Client from './Components/Clients';
import heroDesktop from './assets/image-hero-desktop.png';
import heroMobile from './assets/image-hero-mobile.png';
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="h-[90vh]">
        <div className="flex flex-col md:flex-row h-full container mx-auto ">
          <div className="flex-1 h-full flex flex-col justify-center order-2 md:order-1">
            <h1 className="text-3xl md:text-8xl text-center md:text-left font-bold mb-10 md:pr-5">
              Make Remote work
            </h1>
            <p className="text-gray text-center md:text-left mb-10 max-w-[450px]">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="px-5 py-2 border rounded-xl bg-black text-white hover:text-black hover:bg-white">Learn more</button>
            </div>
            <div className="mt-20 px-5">
              <Client/>
            </div>
          </div>
          <div className="flex-1 h-full order-1 md:order-2">
            <div className="h-full md:p-10">
              <img className="md:hidden h-full w-full object-cover" src={heroMobile} alt="" />
              <img className="hidden md:block h-full w-full object-cover" src={heroDesktop} alt="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
