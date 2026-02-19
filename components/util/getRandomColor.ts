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
  const color = COLORS[index !== undefined
    ? index % COLORS.length
    : Math.floor(Math.random() * COLORS.length)
  ];

  return {
    mainColor: color,
    feintColor: `${color}1e`, // light transparent version
  };
}
