import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Index from './components/Home'
import Profile from './views/admin/profile';
import Layout from './Layout'
import Register from './components/Register'
import axios from 'axios'
import { UserContextProvider } from './userContext'
import Account from './components/Account'
import PlacesPage from './components/PlacesPage'
import PlacesForm from './components/PlacesForm'
import SinglePage from './components/SinglePage'
import Bookings from './components/Bookings'
import SingleBooking from './components/SingleBooking'
import ReportPage from './components/ReportPage'
import AdminLayout from "./layouts/admin";
import TestComponent from './components/TestComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL ;
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
        <ToastContainer />
    <Routes>
        {/* <Route path='/admin/enlist_request' element={<Profile/>}/> */}
        <Route path="admin/*" element={<AdminLayout />} />
        <Route path='/' element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/booking" element={<Bookings/>} />
        <Route path="/report" element={<ReportPage/>} />
        <Route path="/account/booking/:id" element={<SingleBooking/>} />
        <Route path="/account/:subpage?" element={<Account />} />
        <Route path="/account/places" element={<PlacesPage/>} />
        <Route path="/account/places/new" element={<PlacesForm />} />
        <Route path="/account/places/:id" element={<PlacesForm />} />
        <Route path="/places/:id" element={<SinglePage />} />
        <Route path="/test" element={<TestComponent/>}/>
      {/* <Route path="/" element={<Navigate to="/admin" replace />} /> */}
        {/* <Route path="/report" element={<Report />} /> */}
      </Route>
    </Routes>

    </UserContextProvider>

  )
}

export default App
