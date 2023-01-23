import "./App.css";
import { Navbar } from "./compnents/Navbar";
import { About } from "./compnents/About";
import { Home } from "./compnents/Home";
import  Alert  from "./compnents/Alert";
import NoteState from "./context/notes/NoteState";
import { Route, Routes } from "react-router-dom";
import { Login } from "./compnents/Login";
import { useState } from "react";
import { Signup } from "./compnents/Signup";
import {Footer} from "./compnents/Footer.js"
function App() {
  const  [alert, setAlert] = useState(null)
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })   
    setTimeout(() => {
      setAlert(null);
    }, 1500);
}
  return (
    <>
    <div className="App">
      <NoteState>
      <Navbar />
      <Alert alert={alert}/>
        <div className="container" >
        <Routes>
          <Route exact path="/" element={<Home showAlert={showAlert} />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login showAlert={showAlert} />} />
          <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
        </Routes>
        </div>
        <Footer/>
      </NoteState>
       
      
    </div>
    </>
    
  );
}

export default App;
