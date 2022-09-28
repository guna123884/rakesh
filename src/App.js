import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<h1>House</h1>} exact />
        <Route path="/fields" element={<h1>Fields</h1>} />
      </Routes>
    </div>
  );
}

export default App;
