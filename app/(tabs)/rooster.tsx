import { ArrowIcon, CalendarIcon } from '@/assets/nav-icons';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { getRandomColor } from '@/components/util/getRandomColor';
import { useEffect, useRef, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function getMonthDays(year: number, month: number) {
  const days: { day: string; date: number }[] = [];

  // Get number of days in month
  const totalDays = new Date(year, month + 1, 0).getDate();

  for (let date = 1; date <= totalDays; date++) {
    const current = new Date(year, month, date);

    const day = current.toLocaleDateString("en-US", {
      weekday: "short",
    });

    days.push({
      day,   // "Mon"
      date,  // 1, 2, 3...
    });
  }

  return days;
}

const ITEM_WIDTH = 40;

export default function RoosterScreen() {
    const listRef = useRef<FlatList>(null);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState(null)

    const days = getMonthDays(
        currentDate.getFullYear(),
        currentDate.getMonth()
    );

    const goToNextMonth = () => {
      setCurrentDate(prev => {
        const next = new Date(prev);
        next.setMonth(prev.getMonth() + 1);
        return next;
      });
    };

    const goToPrevMonth = () => {
      setCurrentDate(prev => {
        const next = new Date(prev);
        next.setMonth(prev.getMonth() - 1);
        return next;
      });
    };

    const monthYearLabel = currentDate.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });

    const scrollToDay = (index: number) => {
      listRef.current?.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0, // centers item
      });
    };

    useEffect(() => {
      const today = new Date();

      const isCurrentMonth =
        today.getFullYear() === currentDate.getFullYear() &&
        today.getMonth() === currentDate.getMonth();

      if (!isCurrentMonth) {
        setSelectedDay(null);
        return;
      }

      const todayIndex = days.findIndex(
        d => d.date === today.getDate()
      );

      if (todayIndex !== -1) {
        setSelectedDay(today.getDate());

        setTimeout(() => {
          scrollToDay(todayIndex);
        }, 100);
      }
    }, [days, currentDate]);


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
            <ThemedView style={{justifyContent: "space-between", alignItems: "center", flexDirection: "row", paddingHorizontal: 14}}>
              <Pressable onPress={goToPrevMonth} style={{backgroundColor: "#F3F4F6", paddingHorizontal: 13, paddingVertical: 10, borderRadius: 5, }}><ArrowIcon /></Pressable>
              <View style={{flexDirection: "row", alignItems: "center", gap: 6}}>
                <CalendarIcon /> 
                <ThemedText style={{fontWeight: 600}} >{monthYearLabel}</ThemedText></View>
              <Pressable onPress={goToNextMonth} style={{backgroundColor: "#F3F4F6", paddingHorizontal: 13, paddingVertical: 10, borderRadius: 5, transform: [{rotateY: "180deg"}]}}><ArrowIcon /></Pressable>
            </ThemedView>
            {/* <ScrollView horizontal style={{flexGrow: 0, flexShrink: 0, gap: 13, marginTop: 20, borderBottomWidth: 2, paddingHorizontal: 5, borderBottomColor: "#F3F4F6", paddingBottom: 30}} showsHorizontalScrollIndicator={false}>
                {days.map(item => {
                    return (
                        <Pressable style={{marginHorizontal: 4, justifyContent: "center", alignItems: "center", backgroundColor: "#F3F4F6", paddingHorizontal: 10, paddingVertical: 11, borderRadius: 50 }}>
                            <ThemedText style={{color: "white", fontWeight: "600", backgroundColor: "#5653FC", alignItems: "center", justifyContent: "center", textAlign: "center", width: 31, paddingVertical: 2, borderRadius: 100}}>{item.date}</ThemedText>
                            <ThemedText style={{marginTop: 5, fontSize: 14, color: "#7E919F"}}>{item.day}</ThemedText>
                            <View style={{height: 8, width: 8, borderRadius: 100, backgroundColor: "#5653FC"}} />
                        </Pressable>
                    )
                })}
            </ScrollView> */}
            <View style={{}}>
              <FlatList
                ref={listRef}
                horizontal
                data={days}
                keyExtractor={(item) => item.date.toString()}
                showsHorizontalScrollIndicator={false}
                getItemLayout={(_, index) => ({
                  length: ITEM_WIDTH,
                  offset: (ITEM_WIDTH+ 10) * index,
                  index,
                })}
                contentContainerStyle={{
                  gap: 5,
                  marginTop: 20,
                  borderBottomWidth: 2,
                  paddingHorizontal: 5,
                  borderBottomColor: "#F3F4F6",
                  paddingBottom: 30,
                }}
                renderItem={({ item, index }) => {
                  const isSelectedDay = item.date === selectedDay
                  return (
                  <Pressable onPress={() => {setSelectedDay(item.date)}} style={{marginHorizontal: 4, justifyContent: "center", alignItems: "center", backgroundColor: isSelectedDay ? "#F3F4F6" : "transparent", paddingHorizontal: 10, paddingVertical: 11, borderRadius: 50, width: 52 }}>
                    <ThemedText style={{color: isSelectedDay ? "white" : "#4E5D69", fontWeight: "600", backgroundColor: isSelectedDay ? "#5653FC" : "transparent", alignItems: "center", justifyContent: "center", textAlign: "center", width: 31, paddingVertical: 2, borderRadius: 100}}>{item.date}</ThemedText>
                    <ThemedText style={{marginTop: 5, fontSize: 14, color: "#7E919F"}}>{item.day}</ThemedText>
                    {isSelectedDay && <View style={{height: 8, width: 8, borderRadius: 100, backgroundColor: "#5653FC"}} />}
                  </Pressable>
                )}}
              />
            </View>
            

            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 18, paddingHorizontal: 14, borderBottomColor: "#F3F4F6", borderBottomWidth: 2}}>
                <ThemedText style={{fontWeight: 600, fontSize: 18}}>Room1</ThemedText>
                <Pressable style={{paddingHorizontal: 13, borderColor: "#F3F4F6", borderWidth: 1, paddingVertical: 12, borderRadius: 5, transform: [{rotateZ: "-90deg"}]}}><ArrowIcon /></Pressable>
            </View>
            <View style={{}}>
              <FlatList
                data={[1,2,4,43,5]}
                contentContainerStyle={{
                  gap: 25,
                  paddingBottom:240,
                  paddingTop: 10,
                  paddingHorizontal: 14,
                }}
                renderItem={({item, index}) => {
                  const { backgroundColor, borderColor } = getRandomColor(index);

                  return (
                    <ThemedView style={{flexDirection: "row", gap: 10, }}>
                      <ThemedText style={{color: "#535862"}}>08:30</ThemedText>
                      <View style={{backgroundColor, flex: 1, borderLeftWidth: 2, borderLeftColor: borderColor , borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10}}>
                        <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: "center"}}>
                          <Text style={{fontWeight: 600}}>OctendedisentsShift</Text>
                          <Text style={{color: borderColor}}>12:00 - 20:00</Text>
                        </View>
                        <View style={{flexDirection: "row",gap: 6, alignItems: "center", marginTop: 22}}>
                          <View style={{height:20, width: 20, borderRadius: 100, backgroundColor:"#aaa"}} />
                          <ThemedText style={{color: "#242424"}}>Omar r. <Text style={{color: "#535862", fontSize: 13}}>Beschikbar</Text></ThemedText>
                        </View>
                      </View>
                    </ThemedView>
                  )
                }}
              />

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
