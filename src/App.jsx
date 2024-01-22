import "./App.css";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import { Nav } from "./component/Nav";

function App() {
  return (
    <div className="bg-black flex flex-col h-screen justify-between">
      <Nav />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
