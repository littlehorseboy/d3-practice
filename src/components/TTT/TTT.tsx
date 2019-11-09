import React, { useEffect } from 'react';
import * as d3 from 'd3';

export default function TTT(): JSX.Element {
  useEffect(() => {
    d3.selectAll('.root > p')
      .data([16, 30])
      .style('font-size', (d): string => {
        debugger;
        return `${d}px`;
      });
  }, []);

  return (
    <div className="root">
      <p>123</p>
      <p>456</p>
    </div>
  );
}
