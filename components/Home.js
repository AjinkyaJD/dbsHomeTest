import React, {useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import apiCall from '../services/ApiActionCreator';
import DoggoWalkImageView from './DoggoWalkImageView';
import StyleDetails from '../common/StyleDetails';
import {StatusBar} from 'react-native';
import SearchComponent from './SearchComponent';
import PostsComponent from './PostsComponent';
const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.apiReducer.data);
  const loading = useSelector(state => state.apiReducer.loading);
  // const [query, setQuery] = useState('');

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
        <SearchComponent />
        <PostsComponent loading={loading} data={data} />
      </View>
    </View>
  );
};

export default Home;
