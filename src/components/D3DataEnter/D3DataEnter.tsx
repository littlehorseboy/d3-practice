import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function D3DataEnter(): JSX.Element {
  const rootRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (rootRef) {
      d3.select(rootRef.current)
        .selectAll('p')
        .data([15, 30, 45, 60])
        .style('font-size', (d): string => `${d}px`)
        .enter()
        .append('p')
        .text((d): string => `${d}px`);
    }
  }, []);

  return (
    <div ref={rootRef}>
      <p>123</p>
      <p>456</p>
      <p>789</p>
    </div>
  );
}
