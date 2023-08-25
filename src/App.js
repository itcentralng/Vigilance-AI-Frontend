import React from 'react';
import Sidebar from './components/Sidebar'
import CrimeList from './components/CrimeList';

function App() {
  return (
    <div 
      style={{ 
        display: 'flex', 
        backgroundColor: "#f1f1f1", 
        flex: "1",
        width: "100%",
        height: "100vh"
      }}>
      <Sidebar />
      <CrimeList />
    </div>
  );
}

export default App;
