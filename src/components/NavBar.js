import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  title: { flexGrow: 1 },
  headerItem: { marginLeft: theme.spacing(2) }
}));

const HeaderItem = ({ text }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.headerItem} variant="body1" color="inherit">
      {text}
    </Typography>
  );
};

const NavBar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" color="inherit">
            Game Stats
          </Typography>
          <HeaderItem text="Home" />
          <HeaderItem text="Games" />
          <HeaderItem text="Players" />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
