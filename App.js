import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          あ<Text style={{ fontWeight: '500' }}>あ</Text>
          あ<Text style={{ fontWeight: '500' }}>N</Text>
        </Text>
        <Text>
          あ<Text style={{ fontWeight: '500' }}> あ</Text>
          あ<Text style={{ fontWeight: '500' }}>N</Text>
        </Text>

        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
