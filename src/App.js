import NavigationBar from "./components/Navigation";
import UniqueLines from "./pages/UniqueLines";
import JsonFormatter from "./pages/JsonFormatter";
import StringOperations from "./pages/StringOperations";
import React from "react";
import { Routes, Route } from "react-router-dom";
import EncodeDecode from "./pages/EncodeDecode";
import About from "./pages/About";

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Routes>
        <Route exact path="/jsonformatter" element={<JsonFormatter />} />
        <Route exact path="/encodeDecodeUrl" element={<EncodeDecode />} />
        <Route exact path="/stringOperations" element={<StringOperations/>} />
        <Route exact path="/" element={<UniqueLines />} />
        <Route exact path="/aboutus" element={<About />} />
      </Routes>
    </React.Fragment>


  );
}

export default App;