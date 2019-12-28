import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

import TabPanel from './TabPanel';
import TabContent from './TabContent';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
}));

const Games = () => {
  const classes = useStyles();
  const [value, setValue] = useState('avalon');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="games tabs"
          textColor="primary"
          indicatorColor="primary"
          variant="fullWidth"
        >
          <Tab value="avalon" label="Avalon" />
          <Tab value="coup" label="Coup" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="avalon">
        <TabContent content="avalon" />
      </TabPanel>
      <TabPanel value={value} index="coup">
        <TabContent content="coup" />
      </TabPanel>
    </div>
  );
};

export default Games;
