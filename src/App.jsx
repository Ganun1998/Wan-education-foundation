import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import About_us from './Pages/About_us/About_us.jsx'; // Adjust paths as necessary
import Service from './Pages/Service/Service.jsx'; // Adjust paths as necessary
import Contacts from './Pages/Contacts/Contacts.jsx'; // Adjust paths as necessary
import Donate from './Pages/Donate/Donate.jsx'; // Adjust paths as necessary

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<About_us />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;