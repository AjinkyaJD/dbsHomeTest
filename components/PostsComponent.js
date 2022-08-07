import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const PostsComponent = props => {
  const {loading, data} = props;

  const renderDetailedText = item => (
    <Text>
      {item.id + ':' + item.body + ' '}
      <Text style={{fontWeight: 'bold'}}> {item.randomNumber}</Text>
    </Text>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => renderDetailedText(item)}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginLeft: 15,
    marginRight: 15,
  },
});
export default PostsComponent;
