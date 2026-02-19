import { FC } from "react"
import { Pressable, Text, View } from "react-native"
import ProfileImage from "../secondary/profile-image"
import { ThemedText } from "../themed-text"
import { ThemedView } from "../themed-view"

interface Props {
    feintColor: string,
    mainColor: string,
    openShiftDetailsSheet: () => void
}

const RoosterItem:FC<Props> = ({feintColor, mainColor, openShiftDetailsSheet}) => {
    return (
        <Pressable onPress={openShiftDetailsSheet}>
            <ThemedView style={{flexDirection: "row", gap: 10, }}>
                <ThemedText style={{color: "#535862"}}>08:30</ThemedText>
                <View style={{backgroundColor: feintColor, flex: 1, borderLeftWidth: 2, borderLeftColor: mainColor , borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10}}>
                <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: "center"}}>
                    <Text style={{fontWeight: 600}}>OctendedisentsShift</Text>
                    <Text style={{color: mainColor}}>12:00 - 20:00</Text>
                </View>
                <View style={{flexDirection: "row",gap: 6, alignItems: "center", marginTop: 22}}>
                    <ProfileImage size={20} />
                    <ThemedText style={{color: "#242424"}}>Omar r. <Text style={{color: "#535862", fontSize: 13}}>Beschikbar</Text></ThemedText>
                </View>
                </View>
            </ThemedView>
        </Pressable>
    )
}

export default RoosterItem