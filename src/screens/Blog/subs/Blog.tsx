import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../components/styles';
import {Spacer} from '../../../components/styles/Spacer';
import Colors from '../../../constants/Colors';
import Font from '../../../constants/Font';

const Blog = () => {
  return (
    <View>
      <View>
        <Text style={{...globalStyles.textHeader, fontSize: 20}}>
          Lorem ipsum dolor sit amet consectetur. Cursus quisque.
        </Text>
        <Spacer size={8} />
        <Text style={globalStyles.textPrimary}>
          By
          <Text style={{...globalStyles.textPrimary, color: Colors.PINK}}>
            {' '}
            Purple Closet
          </Text>
        </Text>
      </View>
      <Spacer />
      <Text style={globalStyles.textPrimary}>December 21, 2022</Text>
      <Spacer />
      <Text style={{...globalStyles.textPrimary, fontSize: 16}}>
        Lorem ipsum dolor sit amet consectetur. Nulla sit non amet nec tellus
        massa turpis diam. Sollicitudin maecenas platea duis scelerisque varius
        ullamcorper velit suspendisse sed. Sollicitudin turpis adipiscing ut
      </Text>
      <Spacer />
      <Text style={{...globalStyles.textPrimary, fontSize: 16}}>
        integer vestibulum a sed. Fames lectus aliquam at diam facilisis nunc
        orci. Dignissim porttitor non nisi habitant venenatis. Vel faucibus
        semper tempus a fringilla urna magna. Nullam mi et massa vitae imperdiet
        arcu libero etiam nisl. Et vulputate leo blandit pellentesque lectus
        pretium pharetra quam. Lectus nulla lectus in enim.
      </Text>
      <Spacer />
      <Text style={globalStyles.textHeader}>
        TAGS:{' '}
        <Text style={{...globalStyles.textHeader, color: Colors.PINK}}>
          faucibus, faucibus, faucibus, faucibus
        </Text>
      </Text>
      <Spacer />
    </View>
  );
};

export default Blog;

const styles = StyleSheet.create({
  littleBottomText: {
    fontFamily: Font.AVENIR_REGULAR,
    fontSize: 14,
    color: Colors.LIGHT_MODE_GREY,
    fontWeight: '400',
  },
});
