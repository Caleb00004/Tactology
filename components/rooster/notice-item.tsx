import { View } from "react-native"
import { ThemedText } from "../themed-text"

const NoticeItem = () => {
    return (
        <View style={{borderWidth: 1, borderColor: "#F3F4F6", borderRadius: 10, paddingVertical: 8, gap: 8, paddingHorizontal: 5, flexDirection: "row"}}>
            <View style={{height: 28, width: 28, marginVertical: "auto", borderRadius: 100, backgroundColor: "#aaa"}} />
            <View style={{flex:1}}>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <ThemedText style={{color: "#242424", fontWeight: 600}}>Omar r</ThemedText>
                <ThemedText style={{color: "#4E5D69", fontSize: 13}}>2 min geleden</ThemedText>
                </View>
                <ThemedText style={{fontSize: 13, color: "#242424"}}>{"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sed dolores quaerat suscipit minima ullam".substring(0, 40)}...</ThemedText>
            </View>
        </View>
    )
}

export default NoticeItem