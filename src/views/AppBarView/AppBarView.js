import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import SimpleMenu from '../../Components/SimpleMenu/SimpleMenu';

import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const AppBarView = ({ isAuthenticated }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <SimpleMenu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Phonebook
          </Typography>
          <Navigation />
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBarView);