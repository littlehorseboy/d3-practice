import React from 'react';

export default function SVGPracticePathQT(): JSX.Element {
  return (
    <svg width="100%" height="200">
      <path d="M10 80 Q150 150,300 80,Q450 10,590 80" style={{ stroke: 'black', fill: 'none' }} />

      <circle cx="10" cy="80" r="4" fill="red" />
      <text x="20" y="80" fill="red">M10 80</text>

      <circle cx="150" cy="150" r="4" fill="red" />
      <text x="150" y="170" fill="red">Q150 150</text>

      <circle cx="300" cy="80" r="4" fill="red" />
      <text x="300" y="100" fill="red">300 80</text>

      <circle cx="450" cy="10" r="4" fill="green" />
      <text x="460" y="15" fill="red">450 10</text>

      <circle cx="590" cy="80" r="4" fill="green" />
      <text x="600" y="85" fill="red">590 80</text>

      <line x1="10" y1="80" x2="150" y2="150" style={{ stroke: 'Tomato' }} />

      <line x1="150" y1="150" x2="300" y2="80" style={{ stroke: 'Tomato' }} />

      <line x1="300" y1="80" x2="450" y2="10" style={{ stroke: 'green' }} />

      <line x1="450" y1="10" x2="590" y2="80" style={{ stroke: 'green' }} />
    </svg>
  );
}
