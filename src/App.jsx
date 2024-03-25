import "./App.css";
import Custom_nav from "./components/Custom_nav/Custom_nav";
import LineChart from "./components/LineChart/LineChart";
import PriceOptions from "./components/PriceOptions/PriceOptions";
// import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Custom_nav></Custom_nav>
      {/* <Navbar></Navbar> */}
      {/* <h1 className="text-7xl text-white bg-purple-400">Vite + React</h1> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  );
}

export default App;
