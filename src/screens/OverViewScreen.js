import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import subscriptions from '../api/youtube/subscriptions';

const OverViewScreen = () => {
  const [results, setResults] = useState(['test']);

  const subscriptionApi = async () => {
    const response = await subscriptions();
    console.log(response);
    setResults(response);
  }

  useEffect(() => {
    subscriptionApi();
  }, []);

  return (
    <View style={styles.container}>
      <Text>hello chungang!!!</Text>
      <Text>Results: {results.kind}</Text>
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

