import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CrimeList from './components/CrimeList';
import FullReport from './components/FullReport'; // Import the FullReport component

const App = () => {
  return (
    // <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        {/* <Switch> */}
          <Routes>
          <Route path="/" element={<CrimeList/>} />
          <Route path="/reports/:id" element={FullReport} />
          </Routes>
        {/* </Switch> */}
      </div>
    // </Router>
  );
};

export default App;
