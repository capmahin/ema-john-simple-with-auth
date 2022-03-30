import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Header/Shop/Shop";
import { Route, Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/home" element={<Shop></Shop>}></Route>
      </Router>
      <Shop></Shop>
    </div>
  );
}

export default App;
