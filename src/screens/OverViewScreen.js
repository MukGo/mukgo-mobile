import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ChannelList from '../components/ChannelList';
import subscriptions from '../api/youtube/subscriptions';

const OverViewScreen = () => {
  const [results, setResults] = useState(['test']);

  const subscriptionApi = async () => {
    const response = await subscriptions();
    console.log(response.items);
    setResults(response.items);
  }

  useEffect(() => {
    subscriptionApi();
  }, []);

  return (
    <View style={styles.container}>
      <ChannelList title='Channel List' results={results} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OverViewScreen;

