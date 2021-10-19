import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import getLocation from './services/location.service';

const Item = ({ location, followers }) => (
  <View>
    <View style={styles.item}>
      <Text style={styles.location}>{location}</Text>
    </View>
    <View style={styles.item}>
      <Text style={styles.location}>{followers}</Text>
    </View>
  </View>
);

export default function App() {

  const renderItem = ({ item }) => (
    <Item location={item.location} followers={item.followers} />
  );

  const [data, setData] = useState([])
  useEffect(() => {
    getLocation().then(xx => {
      setData(xx)
    }).catch(x => console.log(x))
  }, [])
  
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => `${Math.random()}`}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight+100 || 100,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  location: {
    fontSize: 32,
  },
});
