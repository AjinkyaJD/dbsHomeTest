import {Image, StyleSheet} from 'react-native';
import React from 'react';
import ImageDetails from '../common/ImageDetails';

const DoggoWalkImageView = () => {
  return (
    <Image style={styles.onBoardImage} source={ImageDetails.doggoWalkImage} />
  );
};

const styles = StyleSheet.create({
  onBoardImage: {
    width: '100%',
    resizeMode: 'cover',
  },
});
export default DoggoWalkImageView;
