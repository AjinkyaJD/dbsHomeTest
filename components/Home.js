import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
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
  const [filteredData, setFilteredData] = useState(null);

  function searchFilterFunction(query) {
    query = query.toLowerCase();
    console.log('searchFilterFunction -' + query);
    const filtered = data.filter(item => {
      if (item.body.includes(query)) {
        return item;
      }
    });
    console.log('searchFilterFunction filtered Length-' + filtered.length);
    setFilteredData(filtered);
  }

  function reRenderListWithRandomNumbers() {
    console.log('reRenderListWithRandomNumbers');
    data.map(item => {
      item.randomNumber = ((Math.random() + 1) * 1000000000).toFixed(0);
    });
    setFilteredData(data);
  }

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
        <SearchComponent
          searchFilterFunction={searchFilterFunction}
          reRenderListWithRandomNumbers={reRenderListWithRandomNumbers}
        />
        <PostsComponent
          loading={loading}
          data={data}
          filteredData={filteredData}
        />
      </View>
    </View>
  );
};

export default Home;
