import "./App.css";
import { Navbar } from "./compnents/Navbar";
import { About } from "./compnents/About";
import { Home } from "./compnents/Home";
import NoteState from "./context/notes/NoteState";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <div className="App">
      <NoteState>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </NoteState>
       
      
    </div>
    </>
    
  );
}

export default App;
