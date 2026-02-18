import React, { FC } from "react"
import { Pressable, View } from "react-native"
import { ThemedText } from "../themed-text"

interface props {
    isSelectedDay: boolean,
    data: {day: string, date: number},
    handleSelectDay: (date: number) => void
}

const DateItem:FC<props> = ({isSelectedDay, data, handleSelectDay}) => {
    return (
        <Pressable onPress={() => {handleSelectDay(data.date)}} style={{marginHorizontal: 4, justifyContent: "center", alignItems: "center", backgroundColor: isSelectedDay ? "#F3F4F6" : "transparent", paddingHorizontal: 10, paddingVertical: 11, borderRadius: 50, width: 52 }}>
            <ThemedText style={{color: isSelectedDay ? "white" : "#4E5D69", fontWeight: "600", backgroundColor: isSelectedDay ? "#5653FC" : "transparent", alignItems: "center", justifyContent: "center", textAlign: "center", width: 31, paddingVertical: 2, borderRadius: 100}}>{data.date}</ThemedText>
            <ThemedText style={{marginTop: 5, fontSize: 14, color: "#7E919F"}}>{data.day}</ThemedText>
            {isSelectedDay && <View style={{height: 8, width: 8, borderRadius: 100, backgroundColor: "#5653FC"}} />}
        </Pressable>
    )
}

export default React.memo(DateItem)