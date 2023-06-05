import Footer from "./components/Footer";
import NavigationBar from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className='px-0' fluid={true}>
      <NavigationBar/>
      <Container className="px-1 pb-5">
      <BrowserRouter>
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </Container>
      <Footer/>
    </Container>


  );
}

export default App;