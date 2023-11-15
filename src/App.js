
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './pages/Utilities/navbar';
import { Footer } from './pages/Utilities/footer';
import { NotFound } from './pages/Utilities/notfound';
import { HomePage } from './pages/HomePage/Homepage';
import LoginPage from './pages/HomePage/LoginPage';
import DoctorCreate from './pages/DoctorsView/DoctorCreate';
import DoctorList from './pages/DoctorsView/DoctorsLists';
import DoctorsDetails from './pages/DoctorsView/DoctorDetails';
import DoctorEdit from './pages/DoctorsView/DoctorEdit';
import PatientList from './pages/PatientView/PatientList';
import PatientsDetails from './pages/PatientView/PatientDetails';
import PatientCreate from './pages/PatientView/PatientCreate';
import PatientEdit from './pages/PatientView/PatientEdit';


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

       <Route path="/Patients" element={< PatientList/>}></Route>
       <Route path="/Patients/:id" element={< PatientsDetails/>}></Route>
       <Route path="/Patients-registration-form" element={< PatientCreate/>}></Route>
       <Route path="/Patients/edit/:id" element={< PatientEdit/>}></Route>
       </Routes>
       </BrowserRouter>
</>
  );
}

export default App;
