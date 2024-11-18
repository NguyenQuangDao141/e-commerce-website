import React from 'react';
import logo from './logo.svg';
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import './App.css';
import Container from "./ui/Container";

function App() {
  return (
    <main>
        <Header />
        <Container>
            <p>Ecommerce demo</p>
        </Container>
        <Footer/>
    </main>
  );
}

export default App;
