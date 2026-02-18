// utils/colors.ts

const COLORS = [
  "#5653FC",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
  "#06B6D4",
  "#8B5CF6",
  "#EC4899",
];

export function getRandomColor(index?: number) {
  // optional index keeps colors stable per item
  const color = COLORS[index !== undefined
    ? index % COLORS.length
    : Math.floor(Math.random() * COLORS.length)
  ];

  return {
    borderColor: color,
    backgroundColor: `${color}1e`, // light transparent version
  };
}
