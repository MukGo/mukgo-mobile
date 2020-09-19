import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

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
            <View>
              <Text key={item.id} >{item.snippet.title}</Text>

              <Image
                source={{
                  uri: item.snippet.thumbnails.default.url
                }}
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
  }
});

export default ChannelList;