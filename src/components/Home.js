import * as React from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';

export default function HomeScreen({route, navigation}) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Image style={styles.tinyLogo} source={require('../assets/logo.png')} />
        <Text type="primary">
          Welcome to Parsley Health demo app, in order to register please
          complete the form
        </Text>
        <Button
          title="Go to Form"
          onPress={() => navigation.navigate('Register')}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
