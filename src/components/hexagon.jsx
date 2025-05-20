// src/components/Hexagon.jsx
export default function Hexagon({ size = 100, stroke = '#fff', strokeWidth = 2 }) {
  const h = size;
  const w = Math.sqrt(3) / 2 * h;
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <polygon
        points={`
          ${w/2},0 
          ${w},${h/4} 
          ${w},${3*h/4} 
          ${w/2},${h} 
          0,${3*h/4} 
          0,${h/4}
        `}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
