import React, { useEffect } from 'react';
import * as d3 from 'd3';

export default function D3Transitions(): JSX.Element {
  useEffect(() => {
    d3.select('.root')
      .transition()
      .style('background-color', 'black')
      .selectAll('p')
      .style('color', 'white');
  }, []);

  return (
    <div className="root">
      <p>123</p>
      <p>456</p>
      <p>789</p>
      <p>123</p>
      <p>456</p>
      <p>789</p>
    </div>
  );
}
