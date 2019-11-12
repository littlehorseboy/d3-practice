import React from 'react';

export default function SVGPracticePathA2(): JSX.Element {
  return (
    <svg width="100%" height="250">
      <path d="M10 215 L110 215 A1 2 30 0 1 310 215 L540 215" style={{ stroke: '#333', fill: 'Crimson', fillOpacity: 0.5 }} />

      <circle cx="110" cy="215" r="4" fill="red" />
      <text x="110" y="235" fill="red">110, 315</text>

      <circle cx="310" cy="215" r="4" fill="red" />
      <text x="310" y="235" fill="red">162, 225</text>

      <line x1="110" y1="215" x2="310" y2="215" style={{ stroke: 'green' }} transform="rotate(30, 210, 215)" />

      <line x1="210" y1="215" x2="210" y2="15" style={{ stroke: 'green' }} transform="rotate(30, 210, 215)" />
    </svg>
  );
}
