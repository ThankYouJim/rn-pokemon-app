import React from 'react';
import {View, StyleSheet} from 'react-native';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';

import {Pokemons} from './src/containers/Pokemons';

Amplify.configure({
  ...awsExports,
  Analytics: {
    disabled: true,
  },
});

const App = () => {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh',
  });

  return (
    <ApolloProvider client={client}>
      <View style={styles.main}>
        <Pokemons />
      </View>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
