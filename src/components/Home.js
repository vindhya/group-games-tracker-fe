import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import { fetchWinsThunk } from '../store/actions/stats.actions';
import BarGraph from './BarGraph';

const Home = () => {
  const dispatch = useDispatch();
  const winData = useSelector(state => state.stats.total_wins);

  useEffect(() => {
    dispatch(fetchWinsThunk());
  }, [dispatch]);

  return (
    <>
      {!isEmpty(winData) && (
        <BarGraph title="Total Wins for All Games" data={winData} />
      )}
    </>
  );
};

export default Home;
