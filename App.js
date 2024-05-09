import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TodoScreeen from './src/screen/TodoScreeen';

export default function App() {
  return (
    <SafeAreaView>
    <View>
      <TodoScreeen />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
