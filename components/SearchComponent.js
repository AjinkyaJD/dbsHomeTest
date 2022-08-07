import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const SearchComponent = props => {
  const {searchFilterFunction, reRenderListWithRandomNumbers} = props;
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search a text"
        selectTextOnFocus={false}
        selectionColor={'#00000000'}
        numberOfLines={1}
        multiline={false}
        textContentType={'none'}
        autoCapitalize={'none'}
        autoComplete={false}
        placeholderTextColor={'#000'}
        onChangeText={text => searchFilterFunction(text)}
      />
      <TouchableOpacity
        style={styles.reRenderButton}
        onPress={reRenderListWithRandomNumbers}>
        <Text style={styles.reRenderButtonText}>Re-render</Text>
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
  input: {
    padding: 5,
    marginVertical: 15,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 18,
    color: '#000000',
    borderColor: '#000',
    borderWidth: 1,
    height: 35,
  },
  reRenderButton: {
    backgroundColor: '#808080',
    padding: 5,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    height: 35,
  },
  reRenderButtonText: {
    color: '#000',
  },
});
export default SearchComponent;
