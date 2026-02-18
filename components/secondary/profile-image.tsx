import { Image, StyleSheet, View } from "react-native";

type ProfileImageProps = {
  size?: number;
  url?: string;
};

const ProfileImage = ({ size = 45, url }: ProfileImageProps) => {
    return (
        <View style={{width: size, height: size, backgroundColor: "#aaa", borderRadius: 100}}>
            <Image 
                source={
                    url
                        ? { uri: url }
                        : require("@/assets/images/male-doctor.png")
                }
                style={styles.imageStyle}
            />
        </View>
    )
}

export default ProfileImage

const styles = StyleSheet.create({
  imageStyle: {
    objectFit: "cover", 
    height: "100%", 
    width: "100%"
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
