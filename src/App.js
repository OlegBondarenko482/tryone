import React from 'react';
import Header from "./comp/Header";
import Menu from "./comp/Menu";
import Main from "./comp/Content";
import Footer from "./comp/Footer";
import './App.css';

function App() {
  return (

    <div className="App">

        <Header/>

        <Menu/>

        <Main/>

        <Footer/>

     </div>

  );
}



export default App;
