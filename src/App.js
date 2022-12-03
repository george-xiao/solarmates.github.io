import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Project } from "./components/Project";
import { Team } from "./components/Team";
import { Details } from "./components/Details";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Project />
      <Team />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
