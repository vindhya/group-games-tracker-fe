import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const BarGraph = ({ data, title }) => {
  return (
    <>
      <Box mb={2}>
        <Typography variant="h4">{title}</Typography>
      </Box>
      <ResponsiveContainer aspect={2}>
        <BarChart data={data}>
          <Tooltip />
          <XAxis dataKey="name" />
          <YAxis
            label={{
              value: 'Number of Wins',
              angle: -90,
              position: 'insideLeft',
              style: { textAnchor: 'middle' }
            }}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="count" fill="#e91e63" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarGraph;
