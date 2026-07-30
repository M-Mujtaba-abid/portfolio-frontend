import { useMemo } from "react";

function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const buildNetwork = (count, width, height, maxDist, seed) => {
  const rand = mulberry32(seed);
  const points = Array.from({ length: count }, () => ({
    x: rand() * width,
    y: rand() * height,
  }));

  const edges = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dx = points[i].x - points[j].x;
      const dy = points[i].y - points[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDist) {
        edges.push({ x1: points[i].x, y1: points[i].y, x2: points[j].x, y2: points[j].y, dist });
      }
    }
  }

  return { points, edges };
};

const ConstellationBackground = ({ className = "" }) => {
  const { points, edges } = useMemo(() => buildNetwork(46, 1000, 620, 170, 7), []);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1000 620"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full opacity-70 animate-float-slower"
      >
        {edges.map((edge, i) => (
          <line
            key={i}
            x1={edge.x1}
            y1={edge.y1}
            x2={edge.x2}
            y2={edge.y2}
            stroke="rgba(148,163,184,0.18)"
            strokeWidth="1"
          />
        ))}
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={i % 7 === 0 ? 3 : 1.6} fill="rgba(148,163,184,0.55)" />
        ))}
      </svg>
    </div>
  );
};

export default ConstellationBackground;
