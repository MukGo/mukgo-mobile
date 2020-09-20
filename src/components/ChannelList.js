import { FlatList, Image, Linking, StyleSheet, Text, View } from 'react-native';

import { Fontisto } from '@expo/vector-icons';
import React from 'react';

const ChannelList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({ item }) => {

          return (
            <View style={styles.row}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: `${item.snippet.thumbnails.default.url}`,
                }}
              />
              <Text key={item.id} >{item.snippet.title} </Text>
              <Fontisto
                name="youtube-play"
                style={styles.icon}
                onPress={() => Linking.openURL(`https://www.youtube.com/channel/${item.snippet.resourceId.channelId}`)}
              />

            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  icon: {
    fontSize: 24,
    color: 'red'
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default ChannelList;