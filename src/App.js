import React from "react";
import Navbar from './components/Navbar';
import Header from './components/Header'
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




export default function App() {
  return (
    <div>
      <Header>
        <Navbar />
      </Header>
      <Footer />

    </div>

  );
};
