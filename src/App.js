import NavigationBar from "./components/Navigation";
import UniqueLines from "./pages/UniqueLines";
import JsonFormatter from "./pages/JsonFormatter";
import StringOperations from "./pages/StringOperations";
import React from "react";
import { Routes, Route } from "react-router-dom";
import EncodeDecode from "./pages/EncodeDecode";

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Routes>
        <Route exact path="/jsonformatter" element={<JsonFormatter />} />
        <Route exact path="/encodeDecode" element={<EncodeDecode />} />
        <Route exact path="/stringOperations" element={<StringOperations/>} />
        <Route exact path="/" element={<UniqueLines />} />
      </Routes>
    </React.Fragment>


  );
}

export default App;