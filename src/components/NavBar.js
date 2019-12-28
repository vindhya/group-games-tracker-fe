import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  title: { flexGrow: 1 },
  headerItem: { marginLeft: theme.spacing(2) }
}));

const HeaderItem = ({ path, text }) => {
  const classes = useStyles();
  return (
    <Link
      className={classes.headerItem}
      variant="body1"
      color="inherit"
      component={RouterLink}
      to={path}
    >
      {text}
    </Link>
  );
};

const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
          >
            <Link component={RouterLink} to="/" color="inherit">
              Game Stats
            </Link>
          </Typography>
          <HeaderItem path="/" text="Home" />
          <HeaderItem path="/games" text="Games" />
          <HeaderItem path="/players" text="Players" />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
