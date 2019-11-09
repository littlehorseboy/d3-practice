import React, { useEffect } from 'react';
import * as d3 from 'd3';

export default function D3TransitionCircle(): JSX.Element {
  useEffect(() => {
    d3.select('circle')
      .transition()
      .duration(1500)
      .delay(800)
      .attr('cx', 50)
      .attr('cy', 50)
      .attr('r', 50);
  }, []);

  return (
    <svg>
      <circle />
    </svg>
  );
}
