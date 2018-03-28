import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';

class Header extends Component {
  render() {
    const { classes, handleDrawerToggle } = this.props;

    return (
      <AppBar
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.navIconHide}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='title' color='inherit'>Pig Tracker</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {};

export default Header;
