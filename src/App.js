
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './pages/Utilities/navbar';
import { Footer } from './pages/Utilities/footer';
import { NotFound } from './pages/Utilities/notfound';
import { HomePage } from './pages/HomePage/Homepage';
import LoginPage from './pages/HomePage/LoginPage';
import DoctorCreate from './pages/DoctorsView/DoctorCreate';
import DoctorList from './pages/DoctorsView/DoctorsLists';
import DoctorsDetails from './pages/DoctorsView/DentistDetails';
import DoctorEdit from './pages/DoctorsView/DoctorEdit';


function App() {
  return (
<>
<BrowserRouter>
    <Routes>
       <Route path="/navbar" element={< Navbar/>}></Route>
       <Route path="/footer" element={< Footer/>}></Route>
       <Route path="*" element={< NotFound/>}></Route>
       <Route path="/" element={< HomePage/>}></Route>
       <Route path="/Login" element={< LoginPage/>}></Route>

       <Route path="/Doctors-registration-form" element={< DoctorCreate/>}></Route>
       <Route path="/Doctors" element={< DoctorList/>}></Route>
       <Route path="/Doctors/:id" element={< DoctorsDetails/>}></Route>
       <Route path="/Doctors/edit/:id" element={< DoctorEdit/>}></Route>
       </Routes>
       </BrowserRouter>
</>
  );
}

export default App;
