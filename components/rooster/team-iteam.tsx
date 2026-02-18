import { Text, View } from "react-native"
import { getRandomColor } from "../util/getRandomColor"

const TeamItem = () => {
    const {mainColor, feintColor} = getRandomColor()
    return (
        <View style={{flexDirection: "row", backgroundColor: feintColor, justifyContent: "space-between", paddingHorizontal: 10, paddingVertical: 12, borderRadius: 30}}>
            <View style={{flexDirection: "row"}}>
                <View style={{height: 25, width: 25, backgroundColor: "#aaa", borderWidth: 1.5, borderColor: "white", borderRadius: 100}} />
                <View style={{height: 25, width: 25, backgroundColor: "#aaa", borderWidth: 1.5, borderColor: "white", borderRadius: 100, transform: [{translateX: -10}]}} />
                <Text>Omar r. , Elijah a.</Text>
            </View>
            <View>
                <Text style={{color: mainColor, fontWeight: 500}}>4:00 - 8:00</Text>
            </View>
        </View>
    )
}

export default TeamItem