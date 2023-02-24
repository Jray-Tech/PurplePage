import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../components/styles';
import {Spacer} from '../../../components/CustomComponents';
import Colors from '../../../constants/Colors';
import Font from '../../../constants/Font';

const BlogList = () => {
  return (
    <View style={styles.container}>
      <Spacer />
      <Text style={globalStyles.textHeader}>
        Lorem ipsum dolor sit amet consectetur. Cursus quisque.
      </Text>
      <Spacer size={4} />
      <Text style={globalStyles.textPrimaryGrey}>
        Lorem ipsum dolor sit amet consectetur. Cursus quisque.
      </Text>
      <Spacer size={10} />
      <Text style={styles.littleBottomText}>
        By
        <Text
          style={{...styles.littleBottomText, color: Colors.DEFAULT_PURPLE}}>
          {' '}
          Purple Closet{' '}
        </Text>
        | December 21, 2022
      </Text>
      <Spacer size={12} />
    </View>
  );
};

export default BlogList;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.PROGRESS_GREY,
  },
  littleBottomText: {
    fontFamily: Font.AVENIR_REGULAR,
    fontSize: 10,
    color: Colors.LIGHT_MODE_GREY,
    fontWeight: '400',
  },
});
