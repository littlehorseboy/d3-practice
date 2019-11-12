import React from 'react';

export default function SVGPracticePathS(): JSX.Element {
  return (
    <svg width="100%" height="200">
      <path d="M10 80 C140 140,160 140,300 80 S 520 20,600 80" style={{ stroke: 'black', fill: 'none' }} />

      <circle cx="10" cy="80" r="4" fill="red" />
      <text x="20" y="80" fill="red">M10 80</text>

      <circle cx="140" cy="140" r="4" fill="red" />
      <text x="65" y="140" fill="red">C140 140</text>

      <circle cx="160" cy="140" r="4" fill="red" />
      <text x="170" y="140" fill="red">160 140</text>

      <circle cx="300" cy="80" r="4" fill="red" />
      <text x="310" y="90" fill="red">300 80</text>

      <circle cx="440" cy="20" r="4" fill="green" />
      <text x="385" y="20" fill="red">440 20</text>

      <circle cx="520" cy="20" r="4" fill="blue" />
      <text x="530" y="20" fill="red">S520 40</text>

      <circle cx="600" cy="80" r="4" fill="blue" />
      <text x="610" y="80" fill="red">600 80</text>

      <line x1="10" y1="80" x2="140" y2="140" style={{ stroke: 'Tomato' }} />

      <line x1="160" y1="140" x2="300" y2="80" style={{ stroke: 'Tomato' }} />

      <line x1="300" y1="80" x2="440" y2="20" style={{ stroke: 'green' }} />

      <line x1="520" y1="20" x2="600" y2="80" style={{ stroke: 'blue' }} />
    </svg>
  );
}
