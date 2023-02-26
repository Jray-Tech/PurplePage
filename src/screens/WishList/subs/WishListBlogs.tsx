import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../../constants/Colors';
import {globalStyles} from '../../../components/styles';
import {Spacer} from '../../../components/CustomComponents';

const Blog = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Text style={{...globalStyles.textHeader, fontSize: 14}}>
        Lorem ipsum dolor site amet consecteturty Cursus quisque.
      </Text>
      <View
        style={{flexDirection: 'row', marginBottom: 8, alignItems: 'center'}}>
        <Text style={{...globalStyles.textPrimaryGrey, fontSize: 10}}>By </Text>
        <Text
          style={{
            ...globalStyles.textHeader,
            fontSize: 10,
            color: Colors.PINK,
          }}>
          {' '}
          Purple Closet
        </Text>
      </View>
      <Text style={{...globalStyles.textPrimaryGrey, fontSize: 10}}>
        December 21, 2021
      </Text>
    </View>
  );
};

const WishListBlogs = () => {
  return (
    <View>
      <Text style={{...globalStyles.textPrimary, color: Colors.BOLD_BLACK}}>
        Blogs(12)
      </Text>
      <Spacer size={12} />
      <View style={styles.row}>
        <Blog />
        <Blog />
      </View>
      <Spacer size={16} />
      <View style={styles.row}>
        <Blog />
        <Blog />
      </View>
    </View>
  );
};

export default WishListBlogs;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
  },
});
