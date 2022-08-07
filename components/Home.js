import React, {useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import apiCall from '../services/ApiActionCreator';
import DoggoWalkImageView from './DoggoWalkImageView';
import StyleDetails from '../common/StyleDetails';
import {StatusBar} from 'react-native';
const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.apiReducer.data);
  const loading = useSelector(state => state.apiReducer.loading);
  useEffect(() => {
    dispatch(apiCall('https://jsonplaceholder.typicode.com/posts'));
  }, []);

  return (
    <View style={[StyleDetails.fullScreen, StyleDetails.bgWhite]}>
      <StatusBar translucent backgroundColor="transparent" />
      <View
        style={[
          StyleDetails.verticalMarginContainer,
          StyleDetails.statusBarSpace,
        ]}>
        <DoggoWalkImageView />
        {loading ? (
          <ActivityIndicator size="large" color="red" />
        ) : (
          <FlatList
            data={data}
            renderItem={({item}) => <Text>{item.title}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    </View>
  );
};

export default Home;
