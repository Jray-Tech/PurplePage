import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import PurpleCloset from '../../../assets/images/purplecloset.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {
  CustomButton,
  CustomBottomTab,
  Nav,
  CustomBusinessTab,
} from '../../components/CustomComponents';
import {Colors, Font} from '../../constants';
import Edit from '../../../assets/images/edit.png';

const BusinessProfile = ({navigation}) => {
  const [isSubscribed, setIsSubscribed] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Nav onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.header}>
        <View style={styles.body}>
          <Image source={PurpleCloset} style={styles.images} />
          <TouchableOpacity onPress={() => navigation.navigate('FilterScreen')}>
            <View style={styles.action}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={[styles.bussinessName, {paddingRight: 24}]}>
                  Purple Closet
                </Text>
                <Image source={Edit} resizeMode="contain" />
              </View>
              <View
                style={{
                  backgroundColor: isSubscribed
                    ? Colors.DEFAULT_PURPLE
                    : Colors.DEFAULT_GREY,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    color: isSubscribed
                      ? Colors.DEFAULT_WHITE
                      : Colors.BOLD_BLACK,
                    paddingHorizontal: 5,
                    fontFamily: Font.AVENIR_MEDIUM,
                  }}>
                  {isSubscribed ? 'Promote Page' : 'Promoted'}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.bussinessCategory}>Fashion</Text>
          <Text style={styles.bussinessLocation}>1.24k Subscribers</Text>
          <Text style={styles.bussinessLocation}>Abule-egba, Lagos</Text>
          <View style={styles.action}>
            <View style={styles.rank}>
              <FontAwesome
                name={'star'}
                size={16}
                color={Colors.RANK}
                style={{marginRight: 2}}
              />
              <FontAwesome
                name={'star'}
                size={16}
                color={Colors.RANK}
                style={{marginRight: 2}}
              />
              <FontAwesome
                name={'star'}
                size={16}
                color={Colors.RANK}
                style={{marginRight: 2}}
              />
              <FontAwesome
                name={'star'}
                size={16}
                color={Colors.RANK}
                style={{marginRight: 2}}
              />
              <FontAwesome
                name={'star-o'}
                size={16}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 2}}
              />
            </View>
          </View>
        </View>
        <CustomBusinessTab />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  rank: {
    flexDirection: 'row',
  },
  nav: {
    paddingHorizontal: 20,
  },
  footer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
    shadowColor: Colors.DASH_GREEN,
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowOffset: 1,
    elevation: 3,
  },

  profile: {
    width: 32,
    height: 32,
  },
  profiletab: {
    width: 130,
    height: 32,
  },
  profileStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileText: {
    fontFamily: Font.AVENIR_BOLD,
    color: Colors.HEADER_BLACK,
  },
  body: {
    paddingHorizontal: 20,
  },
  images: {
    width: '100%',
    borderRadius: 10,
  },
  header: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    marginTop: 10,
  },
  text_header: {
    color: Colors.PINK,
    fontSize: 20,
    lineHeight: 20,
    fontFamily: Font.AVENIR_MEDIUM,
  },
  text_footer: {
    color: Colors.SECONDARY_GREY,
    fontSize: 17,
    paddingBottom: 16,
    fontFamily: Font.AVENIR_MEDIUM,
  },
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
    marginTop: 5,
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

  forgotPasswordContainer: {
    alignItems: 'flex-end',
  },
  filter: {
    fontFamily: Font.AVENIR_MEDIUM,
    color: Colors.BOLD_BLACK,
    fontSize: 15,
    paddingTop: 16,
  },
  result: {
    color: Colors.CATEGORY_GREY,
    fontFamily: Font.AVENIR_REGULAR,
    fontSize: 14,
  },
  filterContainer: {
    alignItems: 'flex-end',
  },
  filterSubContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
  },

  icons: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
  },
  action_text: {
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: Font.AVENIR_MEDIUM,
  },

  bussinessName: {
    fontSize: 19,
    marginBottom: 5,
    color: Colors.BOLD_BLACK,
    fontFamily: Font.AVENIR_BOLD,
  },
  bussinessCategory: {
    fontSize: 14,
    lineHeight: 14.4,
    paddingBottom: 1,
    color: Colors.CATEGORY_PURPLE,
    fontFamily: Font.AVENIR_BOLD,
  },
  bussinessLocation: {
    paddingBottom: 1,
    fontSize: 12,
    lineHeight: 14.4,
    color: Colors.CATEGORY_GREY,
    fontFamily: Font.AVENIR_MEDIUM,
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

export default BusinessProfile;
