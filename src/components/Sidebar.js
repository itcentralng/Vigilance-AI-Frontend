import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const listItemStyle = {
    borderBottom: '1px solid #ccc',
    padding: '10px 0',
  };

  const activeLinkStyle = {
    color: 'green', // Change the color to your preferred indicator color
    /* Add any other styles you want to apply to the active link */
  };

  return (
    <Drawer variant="permanent" anchor="left">
      {/* Sidebar content */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        {/* Logo */}
        <img
          src="../logo.png" // Replace with the actual path to your logo image
          alt="Logo"
          style={{ width: '80%', marginBottom: '20px' }}
        />
        
        {/* Navigation options */}
        <List>
          <ListItem
            button
            component={NavLink}
            to="/"
            style={listItemStyle}
            activeStyle={activeLinkStyle} // Apply styles for active link
          >
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/reports"
            style={listItemStyle}
            activeStyle={activeLinkStyle} // Apply styles for active link
          >
            <ListItemText primary="Reports" />
          </ListItem>
        </List>
        
        {/* Logout button */}
        <Button variant="outlined" color="secondary" style={{ marginTop: 'auto' }}>
          Logout
        </Button>
      </div>
    </Drawer>
  );
};

export default Sidebar;
