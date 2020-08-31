import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import subscriptions from '../api/youtube/subscriptions';

const OverViewScreen = () => {
  const [results, setResults] = useState(['test']);

  /*
  const subscriptionApi = async () => {
    const resposne = await subscriptions();
    setResults(response);
    console.log(results);
  }

  subscriptionApi();
  */
  return (
    <View style={styles.container}>
      <Text>hello world!!!</Text>
      <Text>Results: {results.kind}</Text>
      <Text>?: {results}</Text>
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

