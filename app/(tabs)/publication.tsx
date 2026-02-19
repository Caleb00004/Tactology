import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import Search from '@/components/secondary/search';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PublicationScreen() {
  

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#fff", paddingHorizontal: 14}}>

      <Search 
         style={{
          borderRadius: 10,
          marginBottom: 20,
        }}
        placeholder='Search Publications'
        value={""}
        onChangeText={(text) => {}}
      />

      <ThemedText style={{fontWeight: 700, fontSize: 21, marginBottom: 20, marginTop: 10}}>Latest publications</ThemedText>
      <FlatList 
        data={[0,3,3]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 23,
          paddingBottom: 10
        }}
        renderItem={({item}) => {
          return (
            <ThemedView style={{borderColor: "#D9E5F2", borderWidth: 1, padding: 12, borderRadius: 15}}>
              <View style={{backgroundColor: "#aaa", width: "auto", height: 190, borderRadius: 10, overflow: "hidden"}}>
                <Image 
                  source={require("@/assets/images/first-aid.png")}
                  style={styles.imageStyle}
                />
              </View>
              <View style={{flexDirection: "row", gap: 10, marginVertical: 15}}>
                <Text style={{backgroundColor: "#F0F9FF", color: "#026AA2", paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20, fontWeight: 500}}>Covid</Text>
                <Text style={{backgroundColor: "#FDF2FA", color: "#C11574", paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20, fontWeight: 500}}>Vaccine</Text>
              </View>
              <View>
                <ThemedText style={{color: "#242424", fontWeight: 600, marginBottom: 5}}>Vaccine hesitancy trends</ThemedText>
                <ThemedText style={{fontSize: 14, color: "#4E5D69", lineHeight: 20}} >How do you build stroke risk tools that are both clinically powerful and user-friendly for everyday care?</ThemedText>
              </View>
              
              <View style={{flexDirection: "row", alignItems: "center", gap: 10, marginTop: 20}}>
                <View style={{width: 45, height: 45, backgroundColor: "#aaa", borderRadius: 100}}>
                  <Image 
                    source={require("@/assets/images/male-doctor.png")}
                    style={styles.imageStyle}
                  />
                </View>
                <View style={{gap: 4}}>
                  <Text style={{fontWeight: 500, color: "#242424"}}>Elijah Oyindamola</Text>
                  <View style={{flexDirection: "row", alignItems: "center" }}>
                    <Text style={{color: "#4E5D69", fontSize: 12}}>20 Jan 2022</Text>
                    <View style={{backgroundColor: "#aaa", height: 8, width: 8, borderRadius: 50, marginLeft: 13, marginRight: 5}} />
                    <Text style={{color: "#4E5D69", fontSize: 12}}>3mins</Text>
                  </View>
                </View>
              </View>
            </ThemedView>
          )
        }}
      />
    </SafeAreaView>
  );
}

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
