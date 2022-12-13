import "./App.css";
import { Navbar } from "./compnents/Navbar";
import { About } from "./compnents/About";
import { Home } from "./compnents/Home";
import { Alert } from "./compnents/Alert";
import NoteState from "./context/notes/NoteState";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <div className="App">
      <NoteState>
      <Navbar />
      {/* <Alert message="Vanshita Roopchandani"/> */}
        <div className="container" >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        </div>
      </NoteState>
       
      
    </div>
    </>
    
  );
}

export default App;
