import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    flex: 1,
    alignContent: 'center', 
    justifyContent: 'center', 
    padding: 16,
  },
  text: { 
    marginVertical: 16 
  },
  textInput: {
    padding: 8, 
    backgroundColor: '#f5f5f5'
  }
});