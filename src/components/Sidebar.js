import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      {/* Sidebar content */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        {/* Navigation options */}
        <List>
          <ListItem button component={NavLink} to="/dashboard" activeClassName="active-link">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={NavLink} to="/reports" activeClassName="active-link">
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
