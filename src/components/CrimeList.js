import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CrimeItem from './CrimeItem';
import FullReport from './FullReport'; // Import the FullReport component

const crimeData = [
  {
    id: 1,
    description: "Robbery at Main Street Bank",
    time: "2023-08-25 10:30 AM",
    location: "Downtown",
    status: "Active",
  },
  {
    id: 2,
    description: "Vandalism at City Park",
    time: "2023-08-25 10:30 AM",
    location: "City Park",
    status: "Investigating",
  },
  // Add more dummy data
];

const CrimeList = () => {
  const [selectedCrime, setSelectedCrime] = useState(null);
const [crimeData, setCrimeData] = useState([])

useEffect(()=>{
  fetch('https://vigilance.onrender.com/api/reports').then(res=>{
    // setCrimeData(data)
    console.log(res)
    return res.json()
  }).then(data=>setCrimeData(data.data))
}, [])

  const handleCrimeClick = (crime) => {
    setSelectedCrime(crime);
  };

  return (
    <div
      style={{
        width: '60%',
        marginLeft: '250px',
        padding: '20px',
        backgroundColor: '#fff',
        marginTop: '50px',
        borderRadius: '20px',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2>Crime List</h2>
      </div>
      {selectedCrime ? (
        <FullReport crime={selectedCrime} onClose={() => setSelectedCrime(null)} />
      ) : (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ flex: 8 }}>
              <strong>Description</strong>
            </div>
            <div style={{ flex: 1 }}>
              <strong>Status</strong>
            </div>
          </div>
          {crimeData.map(crime => (
            <div
              key={crime.id}
              onClick={() => handleCrimeClick(crime)}
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              <CrimeItem crime={crime} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CrimeList;
