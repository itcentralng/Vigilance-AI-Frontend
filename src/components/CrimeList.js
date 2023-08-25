import React from 'react';
import CrimeItem from './CrimeItem';

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
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div style={{ flex: 3 }}>
            <strong>Description</strong>
          </div>
          <div style={{ flex: 3 }}>
            <strong>Location</strong>
          </div>
          <div style={{ flex: 2 }}>
            <strong>Status</strong>
          </div>
        </div>
        {crimeData.map(crime => (
          <CrimeItem key={crime.id} crime={crime} />
        ))}
      </div>
    </div>
  );
};

export default CrimeList;
