import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Analysis from "./pages/Analysis";
import Report from "./pages/Report";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/upload" element={<Upload></Upload>}></Route>
        <Route path="/analysis" element={<Analysis></Analysis>}></Route>
        <Route path="/report" element={<Report></Report>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
