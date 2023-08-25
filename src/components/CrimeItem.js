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
        primary={crime.description}
        secondary={crime.time}
        style={{ flex: '1' }}
      />
      <div
        style={{
          backgroundColor: crime.status === 'Active' ? '#e57373' : '#81c784',
          color: '#fff',
          padding: '5px 10px',
          borderRadius: '5px',
        }}
      >
        {crime.status}
      </div>
    </ListItem>
  );
};

export default CrimeItem;
