import { ArrowIcon, CalendarIcon } from '@/assets/nav-icons';
import { appContext } from '@/components/contexts/appContext';
import DateItem from '@/components/rooster/date-item';
import RoosterItem from '@/components/rooster/rooster-item';
import GradientOverlay from '@/components/secondary/GradientOverlay';
import { PressableScale } from '@/components/secondary/pressable-scale';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { getRandomColor } from '@/components/util/getRandomColor';
import useLoading from '@/components/util/useLoading';
import { useContext, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function getMonthDays(year: number, month: number) {
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
    const [selectedDay, setSelectedDay] = useState<number | null>(null)
    const {openShiftDetailsSheet} = useContext(appContext)
    const {loading, startLoading, stopLoading} = useLoading()

    const handleSelectDay = (day: number) => {
      setSelectedDay(day)
      startLoading()
      setTimeout(() => {
        stopLoading()
      },1000)
    }

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
        viewPosition: 0, // to center item
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
            <PressableScale
              onPress={goToPrevMonth}
              style={styles.navButton}
            >
              <ArrowIcon />
            </PressableScale>

            <View style={{flexDirection: "row", alignItems: "center", gap: 6}}>
              <CalendarIcon /> 
              <ThemedText style={{fontWeight: 600}} >{monthYearLabel}</ThemedText></View>
            <PressableScale 
              onPress={goToNextMonth} 
              style={[{...styles.navButton, transform: [{rotateY: "180deg"}]}]}
            >
              <ArrowIcon />
            </PressableScale>
          </ThemedView>

          <View style={{}}>
            
            <GradientOverlay />
            <GradientOverlay rightSide />

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
                  <DateItem key={index} isSelectedDay={isSelectedDay} data={item} handleSelectDay={handleSelectDay} />
              )}}
            />
          </View>
          
          {loading ?
            <ActivityIndicator color={"#aaa"} size={100} style={{marginTop: 100}} />
          : 
            <>
              <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 18, paddingHorizontal: 14, borderBottomColor: "#F3F4F6", borderBottomWidth: 2}}>
                <ThemedText style={{fontWeight: 600, fontSize: 18}}>Room1</ThemedText>
                <Pressable style={{paddingHorizontal: 13, borderColor: "#F3F4F6", borderWidth: 1, paddingVertical: 12, borderRadius: 5, transform: [{rotateZ: "-90deg"}]}}><ArrowIcon /></Pressable>
              </View>
              <View style={{}}>
                <FlatList
                  data={[1,2,4,43,5]}
                  contentContainerStyle={{
                    gap: 25,
                    paddingBottom:250,
                    paddingTop: 10,
                    paddingHorizontal: 14,
                  }}
                  renderItem={({item, index}) => {
                    const { feintColor, mainColor } = getRandomColor(index);

                    return (
                      <RoosterItem key={index} feintColor={feintColor} mainColor={mainColor} openShiftDetailsSheet={openShiftDetailsSheet} />
                    )
                  }}
                />
              </View>
            </>
          }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  navButton: {
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: "#F3F4F6",
  },
});

