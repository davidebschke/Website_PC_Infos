import React from 'react';
import './App.css';
import { HashRouter } from "react-router-dom";

import Footer from "./components/Footer";
import AllRoutes from "./components/Routes";
import Header from "./components/Header";



function App() {
  return (
    <>
      <HashRouter>
          <Header/>
          <AllRoutes/>
          <Footer/>
      </HashRouter>
    </>
  );
}
export default App;
