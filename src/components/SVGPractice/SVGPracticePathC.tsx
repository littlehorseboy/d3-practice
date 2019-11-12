import React from 'react';

export default function SVGPracticePathC(): JSX.Element {
  return (
    <svg width="100%" height="200">
      <path d="M10 10 C140 140,160 140,300 20" style={{ stroke: 'black', fill: 'none' }} />

      <circle cx="10" cy="10" r="4" fill="red" />
      <text x="15" y="13" fill="red">10 10</text>

      <circle cx="140" cy="140" r="4" fill="red" />
      <text x="65" y="143" fill="red">C140, 140</text>

      <circle cx="160" cy="140" r="4" fill="red" />
      <text x="170" y="143" fill="red">160 140</text>

      <circle cx="300" cy="20" r="4" fill="red" />
      <text x="305" y="13" fill="red">300 20</text>

      <line x1="10" y1="10" x2="140" y2="140" style={{ stroke: 'Tomato' }} />

      <line x1="160" y1="140" x2="300" y2="20" style={{ stroke: 'Tomato' }} />
    </svg>
  );
}
