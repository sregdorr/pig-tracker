import React from 'react';
import Drawer from 'material-ui/Drawer';
import Toolbar from 'material-ui/Toolbar';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const AppDrawer = props => {
  const { variant, anchor, open, onClose, classes } = props;

  return (
    <Drawer
      variant={variant}
      anchor={anchor}
      open={open}
      onClose={onClose}
      classes={{
        paper: classes.drawerPaper
      }}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <div>
        <Toolbar>
          <img src='favicon.ico' height='60px' />
        </Toolbar>
        <Divider/>
        <List>
          <ListItem>
            <ListItemText primary='Testing'/>
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default AppDrawer;
