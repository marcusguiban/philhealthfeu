
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
import AdminList from './pages/AdminView/AdminList';
import Overview from './pages/Utilities/overview';
import AdminCreate from './pages/AdminView/AdminCreate';
import AdminDetails from './pages/AdminView/AdminDetials';
import AdminEdit from './pages/AdminView/AdminEdit';
import TransactionCreate from './pages/Transactions/transactionCreate';
import TransactionList from './pages/Transactions/transactionList';
import TransactionDetails from './pages/Transactions/transactionDetails';
import TransactionEdit from './pages/Transactions/transactionEdit';
import AppointmentList from './pages/Appointments.jsx/AppointmentList';
import AppointmentCreate from './pages/Appointments.jsx/AppointmentCreate';
import AppointmentDetails from './pages/Appointments.jsx/AppointmentDetails';
import AppointmentEdit from './pages/Appointments.jsx/AppointmentEdit';


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
       <Route path="/Overview" element={< Overview/>}></Route>

       <Route path="/Doctors-registration-form" element={< DoctorCreate/>}></Route>
       <Route path="/Doctors" element={< DoctorList/>}></Route>
       <Route path="/Doctors/:id" element={< DoctorsDetails/>}></Route>
       <Route path="/Doctors/edit/:id" element={< DoctorEdit/>}></Route>

       <Route path="/Patients" element={< PatientList/>}></Route>
       <Route path="/Patients/:id" element={< PatientsDetails/>}></Route>
       <Route path="/Patients-registration-form" element={< PatientCreate/>}></Route>
       <Route path="/Patients/edit/:id" element={< PatientEdit/>}></Route>

       <Route path="/Admin" element={< AdminList/>}></Route>
       <Route path="/Admin-registration-form" element={< AdminCreate/>}></Route>
       <Route path="/Admin/:id" element={< AdminDetails/>}></Route>
       <Route path="/Admin/edit/:id" element={< AdminEdit/>}></Route>

       <Route path="/Transaction-Form" element={< TransactionCreate/>}></Route>
       <Route path="/Transaction" element={< TransactionList/>}></Route>
       <Route path="/Transaction/:id" element={< TransactionDetails/>}></Route>
       <Route path="/Transaction/edit/:id" element={< TransactionEdit/>}></Route>


       <Route path="/Appointment-Form" element={< AppointmentCreate/>}></Route>
       <Route path="/Appointment" element={< AppointmentList/>}></Route>
       <Route path="/Appointment/:id" element={< AppointmentDetails/>}></Route>
       <Route path="/Appointment/edit/:id" element={< AppointmentEdit/>}></Route>
       </Routes>
</BrowserRouter>
</>
  );
}

export default App;
