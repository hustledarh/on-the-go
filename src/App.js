import Footer from "./components/Footer";
import NavigationBar from "./components/Navigation";
import UniqueLines from "./pages/UniqueLines";
import About from "./pages/About";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className='px-0' fluid={true}>
      <NavigationBar/>
      <Container className="my-auto px-1 pb-5 pt-5">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<UniqueLines />} />
        </Routes>
      </Container>
      <Footer/>
    </Container>


  );
}

export default App;