import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const CrimeItem = ({ crime }) => {
  return (
    <ListItem
      style={{
        borderBottom: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 0',
        cursor: "pointer"
      }}
    >
      <ListItemText
        primary={crime.report.substring(0,75)}
        secondary={new Date(crime.created_at).toDateString()}
        style={{ flex: '1' }}
      />
      <div
        style={{
          backgroundColor: crime.status === 'Active' ? '#81c784' : 'red',
          color: '#fff',
          padding: '5px 10px',
          borderRadius: '5px',
        }}
      >
        {crime.status || "Unattended"}
      </div>
    </ListItem>
  );
};

export default CrimeItem;
