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
  Pressable,
} from 'react-native';
import React, {useState, useCallback, useMemo, useRef} from 'react';
import tab from '../../../assets/images/tab.png';
import profile from '../../../assets/images/profile1.png';
import notificationDot from '../../../assets/images/notificationDot.png';
import Alternate from '../../../assets/images/alternate.png';
import Active from '../../../assets/images/active.png';
import BusinessProfile from '../../../assets/images/profileImage.png';
import Vector3 from '../../../assets/images/Vector3.png';
import Vector4 from '../../../assets/images/Vector4.png';
import Vector5 from '../../../assets/images/Vector5.png';
import Vector6 from '../../../assets/images/Vector6.png';
import Group12 from '../../../assets/images/Group12.png';
import CharliesBagelGarden from '../../../assets/images/CharliesBagelGarden.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors, Font} from '../../constants';
import BottomSheet from '@gorhom/bottom-sheet';

const MoreAndBusinnessCreatedScreen = ({navigation}) => {
  const BottomSheetRef = useRef(null);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const snapPoints = useMemo(() => ['40%'], []);

  // callbacks
  const handleSheetChange = useCallback(index => {
    console.log(index);
  }, []);

  return (
    <View style={styles.container}>
      {showBottomSheet && (
        <BottomSheet
          ref={BottomSheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChange}
          containerStyle={{
            zIndex: 1,
            borderWidth: 1,
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 5,
            opacity: 1,
          }}>
          <View style={styles.customButtonContainer}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={BusinessProfile}
                style={[styles.customButtonProfile]}
              />
              <View style={{paddingLeft: 10, paddingTop: 2}}>
                <Text style={styles.bottomSheetText}>Purple Closet</Text>
              </View>
            </View>
            <Image
              style={{height: 20, width: 20}}
              source={Active}
              resizeMode="contain"
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingTop: 24,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image source={profile} style={[styles.customButtonProfile]} />
              <View style={{paddingLeft: 10, paddingTop: 2}}>
                <Text style={styles.bottomSheetText}>Purple Ify</Text>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={{height: 6, width: 6, alignSelf: 'center'}}
                    source={notificationDot}
                    resizeMode="contain"
                  />
                  <Text style={styles.nofication}>12 notifications</Text>
                </View>
              </View>
            </View>
            <Image
              style={{height: 20, width: 20}}
              source={Alternate}
              resizeMode="contain"
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingTop: 24,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 36,
                  width: 36,
                  justifyContent: 'center',
                  borderRadius: 36,
                  borderWidth: 1,
                  borderColor: Colors.SECONDARY_GREY,
                }}>
                <Feather
                  name={'plus'}
                  size={25}
                  color={Colors.PINK}
                  style={{alignSelf: 'center'}}
                  onPress={() => setShowBottomSheet(!showBottomSheet)}
                />
              </View>
              <View style={{paddingLeft: 10, paddingTop: 2}}>
                <Text style={styles.bottomSheetText}>Add new business</Text>
              </View>
            </View>
          </View>
        </BottomSheet>
      )}
      <View
        style={[
          styles.container,
          {
            backgroundColor: showBottomSheet
              ? Colors.SHEET_OPEN
              : Colors.DEFAULT_WHITE,
            opacity: showBottomSheet ? 0.6 : 1,
          },
        ]}>
        <ScrollView style={[styles.scrollView]}>
          <View style={styles.nav}>
            <View style={styles.profileStyle}>
              <View style={styles.profileImageContainer}>
                <Image source={BusinessProfile} style={[styles.profile]} />
              </View>
              <View>
                <Text style={styles.profileText}> Purple Closet</Text>
                <Text style={styles.profileCategory}> Fashion</Text>
                <Pressable
                  onPress={() => navigation.navigate('BusinessProfile')}>
                  <Text style={styles.BusinessProfileText}>
                    {' '}
                    Business Profile
                  </Text>
                </Pressable>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image source={profile} style={styles.notify} />
              <Feather
                name={'chevron-down'}
                size={25}
                color={Colors.HEADER_BLACK}
                style={{marginLeft: 17, marginTop: 2}}
                onPress={() => setShowBottomSheet(!showBottomSheet)}
              />
            </View>
          </View>
          <View style={{paddingHorizontal: 20, paddingTop: 50}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.links}>Account Settings</Text>
              <Feather
                name={'chevron-right'}
                size={25}
                color={Colors.HEADER_BLACK}
                style={{marginLeft: 17, marginTop: 2}}
                onPress={() => navigation.navigate('AccountSettingScreen')}
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.links}>Ads & Promotions</Text>
              <Feather
                name={'chevron-right'}
                size={25}
                color={Colors.HEADER_BLACK}
                style={{marginLeft: 17, marginTop: 2}}
                onPress={() => navigation.navigate('AdsAndPromotionScreen')}
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.links}>Email marketing</Text>
              <Feather
                name={'chevron-right'}
                size={25}
                color={Colors.HEADER_BLACK}
                style={{marginLeft: 17, marginTop: 2}}
                onPress={() => navigation.navigate('FilterScreen')}
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.links}>Insights</Text>
              <Feather
                name={'chevron-right'}
                size={25}
                color={Colors.HEADER_BLACK}
                style={{marginLeft: 17, marginTop: 2}}
                onPress={() => navigation.navigate('FilterScreen')}
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.links}>FAQs</Text>
              <Feather
                name={'chevron-right'}
                size={25}
                color={Colors.HEADER_BLACK}
                style={{marginLeft: 17, marginTop: 2}}
                onPress={() => navigation.navigate('FilterScreen')}
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.links}>Lets Talk</Text>
              <Feather
                name={'chevron-right'}
                size={25}
                color={Colors.HEADER_BLACK}
                style={{marginLeft: 17, marginTop: 2}}
                onPress={() => navigation.navigate('FilterScreen')}
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.links}>About</Text>
              <Feather
                name={'chevron-right'}
                size={25}
                color={Colors.HEADER_BLACK}
                style={{marginLeft: 17, marginTop: 2}}
                onPress={() => navigation.navigate('FilterScreen')}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Image source={Group12} style={styles.vector} resizeMode="contain" />
          <Image source={Vector3} style={styles.vector} resizeMode="contain" />
          <Image source={Vector4} style={styles.vector} resizeMode="contain" />
          <Image source={Vector5} style={styles.vector} resizeMode="contain" />
          <Image source={Vector6} style={styles.vector} resizeMode="contain" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rank: {
    flexDirection: 'row',
  },
  bottomSheetText: {
    fontFamily: Font.AVENIR_MEDIUM,
    fontSize: 16,
    lineHeight: 16,
    color: Colors.BOLD_BLACK,
  },
  customButtonContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    paddingTop: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nofication: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: Font.AVENIR_MEDIUM,
    paddingLeft: 2,
  },
  customButtonProfile: {
    width: 36,
    height: 36,
  },
  nav: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 30,
    flexDirection: 'row',
  },
  links: {
    fontFamily: Font.AVENIR_MEDIUM,
    color: Colors.SECONDARY_GREY,
    fontSize: 14,
    lineHeight: 24,
    paddingBottom: 24,
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
    width: 80,
    height: 80,
  },
  notify: {
    width: 28,
    height: 28,
    flexDirection: 'row',
  },
  profiletab: {
    width: 130,
    height: 32,
  },
  profileStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 80,
    borderColor: Colors.BOLD_BLACK,
    overflow: 'hidden',
  },
  profileText: {
    fontFamily: Font.AVENIR_BOLD,
    color: Colors.HEADER_BLACK,
    fontSize: 16,
    lineHeight: 19,
    paddingTop: 10,
  },
  profileCategory: {
    fontFamily: Font.AVENIR_MEDIUM,
    fontSize: 14,
    lineHeight: 16,
    paddingTop: 2,
    paddingBottom: 12,
  },
  BusinessProfileText: {
    fontFamily: Font.AVENIR_MEDIUM,
    color: Colors.PINK,
    fontSize: 14,
    lineHeight: 16,
    paddingTop: 2,
    paddingBottom: 12,
  },
  body: {
    marginBottom: 15,
  },
  images: {
    width: '100%',
    borderRadius: 10,
  },
  header: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
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
  filterContainer: {
    alignItems: 'flex-end',
  },
  filterSubContainer: {
    flexDirection: 'row',
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
    marginTop: 5,
    marginBottom: 5,
    color: Colors.BOLD_BLACK,
    fontFamily: Font.AVENIR_BOLD,
  },
  bussinessCategory: {
    fontSize: 16,
    marginBottom: 5,
    color: Colors.CATEGORY_PURPLE,
    fontFamily: Font.AVENIR_BOLD,
  },
  bussinessLocation: {
    fontFamily: Font.AVENIR_MEDIUM,
    marginBottom: 5,
    fontSize: 16,
    color: Colors.CATEGORY_GREY,
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

export default MoreAndBusinnessCreatedScreen;
