import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default function Chart({ data, color, units }) {
  const limit = 20;
  const length = 100;
  const width = 200;

  const avg = Math.floor(data.reduce((a, b) => a + b) / data.length);
  return (
    <td>
      <Sparklines data={data} limit={limit} length={length} width={width}>
        <SparklinesLine color={color} />
      </Sparklines>
      <h6>{avg} {units}</h6>
    </td>
  );
}
