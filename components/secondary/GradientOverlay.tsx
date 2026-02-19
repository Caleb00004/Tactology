import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";

const GradientOverlay = ({ rightSide }: { rightSide?: boolean }) => {
  const gradientId = rightSide ? "gradRight" : "gradLeft";

  return (
    <Svg
      width={60}
      height="100%"
      style={{
        position: "absolute",
        zIndex: 2,
        opacity: 0.9,
        pointerEvents: "none",
        right: rightSide ? 0 : undefined,
        left: rightSide ? undefined : 0,
      }}
    >
      <Defs>
        <LinearGradient
          id={gradientId}
          x1={rightSide ? "0%" : "100%"}
          y1="0%"
          x2={rightSide ? "100%" : "0%"}
          y2="0%"
        >
          <Stop offset="0%" stopColor="#fff" stopOpacity="0.1" />
          <Stop offset="100%" stopColor="#eeeeee" stopOpacity="1" />
        </LinearGradient>
      </Defs>

      <Rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill={`url(#${gradientId})`}
      />
    </Svg>
  );
};

export default GradientOverlay;
