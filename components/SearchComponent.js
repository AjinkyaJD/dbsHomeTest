import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const SearchComponent = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Search a text" />
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Re-render</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 24,
  },
  input: {
    padding: 15,
    marginVertical: 15,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 18,
    borderColor: '#000',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#808080',
    padding: 5,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    height: 35,
  },
  submitButtonText: {
    color: '#000',
  },
});
export default SearchComponent;
