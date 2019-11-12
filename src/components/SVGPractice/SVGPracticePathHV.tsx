import React from 'react';

export default function SVGPracticePathHV(): JSX.Element {
  return (
    <svg>
      <path d="M20 20 H100 V100 H20 Z" style={{ fill: 'black' }} />

      <circle cx="20" cy="20" r="4" fill="red" />
      <text x="5" y="13" fill="red">20, 20</text>

      <circle cx="100" cy="20" r="4" fill="red" />
      <text x="85" y="13" fill="red">100, 20</text>

      <circle cx="100" cy="100" r="4" fill="red" />
      <text x="85" y="118" fill="red">100, 100</text>

      <circle cx="20" cy="100" r="4" fill="red" />
      <text x="5" y="118" fill="red">20, 100</text>
    </svg>
  );
}
