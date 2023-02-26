import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../components/styles';
import Colors from '../../../constants/Colors';
import {Spacer} from '../../../components/CustomComponents';
import {DIMENSIONS} from '../../../constants/Sizes';

const images = [
  {
    uri: require('../../../../assets/images/CharliesBagelGarden.png'),
  },
  {
    uri: require('../../../../assets/images/bag.png'),
  },
  {
    uri: require('../../../../assets/images/products5.png'),
  },
  {
    uri: require('../../../../assets/images/products6.png'),
  },
];
const images2 = [
  {
    uri: require('../../../../assets/images/products4.png'),
  },
  {
    uri: require('../../../../assets/images/products13.png'),
  },
  {
    uri: require('../../../../assets/images/products15.png'),
  },
  {
    uri: require('../../../../assets/images/products13.png'),
  },
];
const IMAGE_WIDTH = (DIMENSIONS.SCREEN_WIDTH - 48) * 0.25; // get 1/4 of the available screen
interface WishListProductsTypes {
  imageSource?: any;
}
const WishListProducts: React.FC<WishListProductsTypes> = ({imageSource}) => {
  return (
    <View>
      <Text style={{...globalStyles.textPrimary, color: Colors.BOLD_BLACK}}>
        Products(19)
      </Text>
      <Spacer size={16} />
      <View style={styles.row1}>
        {images.map((image, index) => (
          <Image
            style={styles.imageStyle}
            source={image.uri}
            resizeMode="cover"
          />
        ))}
      </View>
      <View style={styles.row1}>
        {images2.map((image, index) => (
          <Image
            style={styles.imageStyle}
            source={image.uri}
            resizeMode="cover"
          />
        ))}
      </View>
    </View>
  );
};

export default WishListProducts;

const styles = StyleSheet.create({
  row1: {
    flexDirection: 'row',
  },
  imageStyle: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
  },
});
