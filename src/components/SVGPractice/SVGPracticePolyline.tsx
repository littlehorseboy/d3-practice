import React from 'react';

export default function SVGPracticePolyline(): JSX.Element {
  return (
    <svg>
      <polyline points="40,0 60,60 0, 60" style={{ stroke: 'red', strokeWidth: 3 }} />
      <polyline points="140,0 160,60 100, 60" style={{ fill: 'red', stroke: 'red', strokeWidth: 3 }} />
      <polyline points="240,0 260,60 200, 60" style={{ fill: 'none', stroke: 'red', strokeWidth: 3 }} />
    </svg>
  );
}
