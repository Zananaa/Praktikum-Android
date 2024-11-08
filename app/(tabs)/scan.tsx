import { Text, View, StyleSheet } from 'react-native';

export default function ScantScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Scan screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#0a0a0a',
  },
});
