import React, { useEffect } from 'react';
import * as d3 from 'd3';

export default function D3DataExit(): JSX.Element {
  useEffect(() => {
    d3.selectAll('.root > p')
      .data([15, 30, 45, 60])
      .style('font-size', (d): string => `${d}px`)
      .exit()
      .remove();
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
