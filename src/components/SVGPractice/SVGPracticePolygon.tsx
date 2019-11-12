import React from 'react';

export default function SVGPracticePolygon(): JSX.Element {
  return (
    <svg>
      <polygon points="40,0 60,60 0, 60" style={{ stroke: 'red', strokeWidth: 3 }} />
      <polygon points="140,0 160,60 100, 60" style={{ fill: 'red', stroke: 'red', strokeWidth: 3 }} />
      <polygon points="240,0 260,60 200, 60" style={{ fill: 'none', stroke: 'red', strokeWidth: 3 }} />
    </svg>
  );
}
