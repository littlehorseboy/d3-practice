import React from 'react';

export default function SVGPracticePath(): JSX.Element {
  return (
    <svg width="400" height="180">
      <path d="M150 5 L300 150 L5 150 Z" style={{ stroke: '#333', strokeWidth: 3, fill: 'MediumOrchid' }} />

      <circle cx="150" cy="5" r="4" fill="red" />
      <text x="165" y="13" fill="red">150, 5</text>

      <circle cx="300" cy="150" r="4" fill="red" />
      <text x="310" y="150" fill="red">300, 150</text>

      <circle cx="5" cy="150" r="4" fill="red" />
      <text x="10" y="170" fill="red">5, 150</text>
    </svg>
  );
}
