import Navbar from "./component/navbar/navbar";
import Intro from "./component/intro/intro";
import Services from "./component/services/services";
import "./App.css";
import Portfolio from "./component/portefolio/portefolio";
import Contact from "./component/contact/contact";
import Footer from "./component/footer/footer";
import { useContext } from "react";
import { themeContext } from "./context";

import Home from "./component/home/home";
import Allproject from "./component/Allprojetct/Allproject";
import { Route, Routes } from "react-router-dom";
 function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    
      <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
       {/* <Home/> */}
       <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="intro" element={<Intro/>} />
        <Route path="p-projet" element={<Services />} />
        <Route path="d-projet" element={<Portfolio />} />
        <Route path="contact" element={<Contact/>} />
        <Route path="t-projet" element={<Allproject/>} />
        </Routes>
    
      
      <Footer/>
     
      
      
    </div>
    
    
  );
}
export default App