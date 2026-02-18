import React, { useEffect } from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import { Gesture, GestureDetector, ScrollView } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

type Props = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function BottomSheet({
  visible,
  onClose,
  children,
}: Props) {
  const translateY = useSharedValue(SCREEN_HEIGHT);
  // const [isMounted, setIsMounted] = useState(visible);

   useEffect(() => {
    if (visible) {
      translateY.value = withSpring(0);
    } else {
      translateY.value = withSpring(SCREEN_HEIGHT);
    }
  }, [visible])

  const closeSheet = () => {
    translateY.value = withSpring(SCREEN_HEIGHT)
    setTimeout(() => {
      onClose()
    },250)
    // translateY.value = withSpring(SCREEN_HEIGHT, {}, () => {
    //   runOnJS(onClose)();
    // });
  };

  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      if (event.translationY > 0) {
        translateY.value = event.translationY;
      }
    })
    .onEnd((event) => {
      if (event.translationY > 120) {
        // closeSheet();
        scheduleOnRN(closeSheet)
        // translateY.value = withSpring(SCREEN_HEIGHT)
        // setTimeout(() => {
        //   onClose()
        // }, 1000)
        // console.log("Close Sheet")
      } else {
        translateY.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  if (!visible) return null;

  return (
    <>
      <Pressable style={styles.overlay} onPress={closeSheet} />

      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.sheet, animatedStyle]}>
          <Animated.View style={styles.handle} />
          <ScrollView style={{padding: 16}} >
            <View style={{paddingBottom: 30}}>
              {children}
            </View>
          </ScrollView>
        </Animated.View>
      </GestureDetector>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 2
  },
  sheet: {
    position: "absolute",
    zIndex: 3,
    bottom: 0,
    width: "100%",
    height: SCREEN_HEIGHT * 0.8,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // padding: 16,
    paddingTop: 16
  },
  handle: {
    width: 50,
    height: 10,
    backgroundColor: "#D9E5F2",
    alignSelf: "center",
    borderRadius: 6,
    marginBottom: 10,
  },
});
