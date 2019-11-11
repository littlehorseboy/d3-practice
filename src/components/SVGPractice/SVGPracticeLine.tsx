import React from 'react';

export default function SVGPractice(): JSX.Element {
  return (
    <svg width="350" height="200">
      <line x1="0" y1="0" x2="250" y2="0" style={{ stroke: 'Tomato', strokeWidth: 3 }} />
      <line x1="0" y1="10" x2="350" y2="200" style={{ stroke: 'Tomato', strokeWidth: 3 }} />
    </svg>
  );
}
