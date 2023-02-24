import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Font from '../../constants/Font';
import Colors from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';

const SearchFilter = () => {
  const {navigate} = useNavigation<any>();
  return (
    <View style={styles.searchContainer}>
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name={'search'}
            size={22}
            color={Colors.HEADER_BLACK}
            style={{marginRight: 10}}
            onPress={() => navigate('FilterScreen')}
          />

          <TextInput
            placeholder="Search"
            placeholderTextColor={Colors.HEADER_BLACK}
            selectionColor={Colors.HEADER_BLACK}
            style={styles.inputText}
            editable={false}
          />
        </View>
      </View>
      <Image
        source={require('../../../assets/images/Vector.png')}
        style={styles.vector}
        resizeMode="contain"
      />
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  inputText: {},
  username: {
    marginTop: 15,
    color: Colors.SECONDARY_GREY,
    fontFamily: Font.AVENIR_MEDIUM,
    paddingBottom: 10,
  },
  tab: {
    width: 90,
    height: 4,
  },
  action: {
    flexDirection: 'row',
    //marginTop: 10,
    justifyContent: 'space-between',
  },
  actionContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  vector: {
    width: 18,
    paddingTop: 10,
    paddingBottom: 40,
  },

  filter: {
    fontFamily: Font.AVENIR_MEDIUM,
    color: Colors.BOLD_BLACK,
    fontSize: 15,
    paddingTop: 16,
  },
  filterContainer: {
    alignItems: 'flex-end',
  },
  filterSubContainer: {
    flexDirection: 'row',
  },

  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: Colors.HEADER_BLACK,
    alignItems: 'center',
  },
  inputContainer: {
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.BORDER_COLOR,
    justifyContent: 'center',
    width: '90%',
    backgroundColor: Colors.SEARCH_GREY,
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
