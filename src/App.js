
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './pages/Utilities/navbar';
import { Footer } from './pages/Utilities/footer';
import { NotFound } from './pages/Utilities/notfound';
import { HomePage } from './pages/HomePage/Homepage';


function App() {
  return (
<>
<BrowserRouter>
    <Routes>
       <Route path="/navbar" element={< Navbar/>}></Route>
       <Route path="/footer" element={< Footer/>}></Route>
       <Route path="*" element={< NotFound/>}></Route>
       <Route path="/" element={< HomePage/>}></Route>
       </Routes>
       </BrowserRouter>
</>
  );
}

export default App;
