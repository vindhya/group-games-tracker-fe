import React, { useEffect } from 'react';

import BarGraph from './BarGraph';

const data = [
  { name: 'kaveri', wins: 5 },
  { name: 'sampath', wins: 3 },
  { name: 'kushi', wins: 5 },
  { name: 'vindhya', wins: 2 },
  { name: 'natashya', wins: 6 },
  { name: 'vimalan', wins: 7 },
  { name: 'nirosha', wins: 7 }
];

const Home = () => {
  return (
    <>
      <BarGraph title="Total Wins for All Games" data={data} />
    </>
  );
};

export default Home;
