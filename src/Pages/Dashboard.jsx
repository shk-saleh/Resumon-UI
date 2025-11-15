import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

const Dashboard = () => {

  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/get-started');
  }

  return (
    <div className="min-h-screen bg-white">
        <Navbar />
        <div className='flex justify-center items-center h-100'>
          <button onClick={handleLogout} className='bg-gray-500 p-4 rounded-2xl cursor-pointer'>Logout</button>
        </div>
        <Footer />
    </div>
  )
}
export default Dashboard