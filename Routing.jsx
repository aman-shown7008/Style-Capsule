// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import "./Routing.css";

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import RecoveryCode from './components/RecoveryCode/RecoveryCode';
import ResetPassword from './components/ResetPassword/ResetPassword';

import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import ProfileAvatar from './components/ProfileAvatar/ProfileAvatar';
import ProfileBody from './components/ProfileBody/ProfileBody';
import PandQ from './components/PandQ/PandQ';
import PageNotFound from './components/PageNotFound/PageNotFound';
import FullAvatar from './components/FullAvatar/FullAvatar';
import Body from './components/Body/Body';
import Appointment from './components/Appointment/Appointment';
import ChangePassword from './components/ChangePassword/ChangePassword';
import ClosetManagement from './components/ClosetManagement/ClosetManagement';
import MyAddedProducts from './components/MyAddedProducts/MyAddedProducts';
import OrderHistory from './components/OrderHistory/OrderHistory';
import CalendarStyleCapsule from './components/CalendarStyleCapsule/CalendarStyleCapsule';
import EmojiStyleCapsule from './components/EmojiStyleCapsule/EmojiStyleCapsule';

// Layout Component
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// App Component
const Routing = () => {
  return (
    <Router>
      <Routes>

        {/* Routes that do not require Navbar and Footer */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/recovery-code" element={<RecoveryCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        

        {/* Routes that require Navbar and Footer */}
        <Route element={<MainLayout />} >
              
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/edit-profile-avatar" element={<ProfileAvatar />} />
              <Route path="/edit-profile-body" element={<ProfileBody />} />
              <Route path="/pq" element={<PandQ />} />
              <Route path="/full-avatar" element={<FullAvatar />} />
              <Route path="/body" element={<Body />} />
              <Route path="/scheduled-appointment" element={<Appointment />} />
              <Route path="/change-password" element={<ChangePassword />} />
              <Route path="/closetmanagement" element={<ClosetManagement />} />
              <Route path="/myaddedproducts" element={<MyAddedProducts />} />          
              <Route path="/orderhistory" element={<OrderHistory />} />      
              <Route path="/calendarstylecapsule" element={<CalendarStyleCapsule />} />
              <Route path="/emojistylecapsule" element={<EmojiStyleCapsule />} />    
              <Route path="*" element={<PageNotFound />} />
        </Route>

      </Routes>
    </Router>
  );
};

export default Routing;
