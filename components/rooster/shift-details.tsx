import { ArrowIcon, ArrowRightIcon, BuildingsIcon, CalendarIcon, TimeQuaterIcon, Xicon } from "@/assets/nav-icons"
import { FC } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import BottomSheet from "../secondary/bottom-sheet"
import { ThemedText } from "../themed-text"
import { ThemedView } from "../themed-view"
import NoticeItem from "./notice-item"
import TeamItem from "./team-iteam"

interface props {
    isSheetOpen: boolean,
    closeSheet: () => void,
    data: {}
}

const ShiftDetails:FC<props> = ({isSheetOpen, closeSheet, data}) => {
    return (
        <BottomSheet visible={isSheetOpen} onClose={closeSheet}>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
              <Pressable style={{paddingHorizontal: 13, borderColor: "#F3F4F6", borderWidth: 1, paddingVertical: 12, borderRadius: 5}}><ArrowIcon /></Pressable>
              <ThemedText style={{fontWeight: 600, fontSize: 18}}>Shift Details</ThemedText>
              <Xicon />
            </View>

            <View style={{flexDirection: "row", alignItems: "center", marginTop: 18}}>
              <View style={{flexDirection: "row", alignItems: "center", flex: 1, gap: 6, paddingRight: 15}}>
                <TimeQuaterIcon />
                <ThemedText style={{fontSize: 15}}>8:00 am - 12:00 pm</ThemedText>
              </View>
              <View style={{flexDirection: "row", alignItems: "center", flex: 1, gap: 6, borderLeftWidth: 1, borderLeftColor: "#D9E5F2", paddingLeft: 15}}>
                <CalendarIcon />
                <ThemedText style={{fontSize: 15}}>10 - 02 - 2024</ThemedText>
              </View>
            </View>

            <ThemedView style={{marginTop: 20}}>
              <ThemedText style={styles.sectionHeader}>Beschrijving</ThemedText>
              <ThemedText style={{fontSize: 14, color: "#4E5D69", lineHeight: 24}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veritatis voluptate, esse earum, commodi rerum nisi nesciunt ipsa, unde quia soluta.
                Voluptas dicta molestias minus repellendus. Ratione illum voluptatem maxime?</ThemedText>
            </ThemedView>

            <ThemedView style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 20}}>
              <View style={{flex: 1, borderRightWidth: 1, borderRightColor: "#D9E5F2", paddingRight: 15}}>
                <ThemedText style={styles.sectionHeader}>Dienst</ThemedText>
                <ThemedText style={{backgroundColor: "#FFF8EB",fontSize: 14, fontWeight: 600, color: "#E35F00", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 25}}>Ochtend 8:00 - 12:00</ThemedText>
              </View>
              <View style={{flex: 1, paddingLeft: 15}}>
                <View style={{flexDirection: "row", alignItems: "flex-start", gap: 5, marginBottom: 8}}>
                  <BuildingsIcon />
                  <ThemedText style={{color: "#7E919F"}}>Kamers</ThemedText>
                </View>
                <ThemedText style={{fontSize: 14, fontWeight: 600, color: "#4E5D69"}}>Verkoeverruimte</ThemedText>
              </View>
            </ThemedView>

            <ThemedView>
              <ThemedText style={styles.sectionHeader}>Team</ThemedText>
              <View style={{gap: 20}}>
                {[0,2].map((item, i) => {
                  return (
                    <TeamItem key={i} />
                  )
                })}
              </View>
            </ThemedView>
            
            <ThemedView style={{marginTop: 20}}>
              <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <ThemedText style={styles.sectionHeader}>Notices</ThemedText>
                <View style={{flexDirection: "row", gap: 5, alignItems: "center", paddingHorizontal: 10, borderRadius: 20, backgroundColor: "#F3F4F6"}}>
                  <Text style={{fontSize: 15, color: "#242424"}}>3 notices</Text>
                  <ArrowRightIcon />
                </View>
              </View>
              
              <View style={{gap: 10, marginTop: 20}}>
                {[0,2,4].map((item, i) => {
                  return (
                    <NoticeItem key={i} />
                  )
                })}
              </View>
            </ThemedView>
          </BottomSheet>
    )
}

export default ShiftDetails

const styles = StyleSheet.create({
  sectionHeader: {
    fontWeight: 500,
    color: "#242424",
    marginBottom: 8
  },
});
