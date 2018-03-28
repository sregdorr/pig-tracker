import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Hidden from 'material-ui/Hidden';
import Typography from 'material-ui/Typography';

import { DRAWER_WIDTH } from '../../ui-config';

import Header from "./Header";
import AppDrawer from './AppDrawer';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: DRAWER_WIDTH,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: DRAWER_WIDTH,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileOpen: false,
    }
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <Header
          handleDrawerToggle={this.handleDrawerToggle.bind(this)}
          classes={{
            appBar: classes.appBar,
            navIconHide: classes.navIconHide,
          }}
        />
        <Hidden mdUp>
          <AppDrawer
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              drawerPaper: classes.drawerPaper,
              toolbar: classes.toolbar,
            }}
          />
        </Hidden>
        <Hidden smDown >
          <AppDrawer
            variant='permanent'
            open
            classes={{
              drawerPaper: classes.drawerPaper,
              toolbar: classes.toolbar,
            }}
          />
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography>Testing</Typography>
        </main>
      </div>
    );
  }
}

App.propTypes = {};

export default withStyles(styles, { withTheme: true })(App);
