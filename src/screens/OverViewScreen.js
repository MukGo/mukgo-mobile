import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ChannelList from '../components/ChannelList';
import subscriptions from '../api/youtube/subscriptions';

const OverViewScreen = () => {

  const [results, setResults] = useState('');

  const subscriptionApi = async () => {
    const response = await subscriptions.get('');
    console.log(response.data.items);
    setResults(response.data.items);
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
    justifyContent: 'center',
  },
});

export default OverViewScreen;

