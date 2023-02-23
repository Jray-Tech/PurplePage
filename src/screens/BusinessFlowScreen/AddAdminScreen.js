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
import Feather from 'react-native-vector-icons/Feather';
import {
  CustomButton,
  CustomBottomTab,
  Nav,
  HomeNav,
  CustomBorder,
  Spacer,
} from '../../components/CustomComponents';
import Colors from '../../constants/Colors';
import Font from '../../constants/Font';
import BottomSheet from '@gorhom/bottom-sheet';

export const AddAdminScreen = ({navigation}) => {
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
            <View
              style={{
                paddingLeft: 10,
                paddingTop: 2,
                justifyContent: 'center',
              }}>
              <Text style={styles.bottomSheetText}>
                Are you sure you want to add @purplepeaches as your admin?
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', paddingTop: 24}}>
            <View
              style={{
                paddingLeft: 10,
                borderColor: Colors.DEFAULT_GREY,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderRightWidth: 1,
                width: '50%',
                height: 57,
                justifyContent: 'center',
              }}>
              <Pressable onPress={() => navigation.navigate('AdminScreen')}>
                <Text style={styles.bottomSheetTextYes}>Yes</Text>
              </Pressable>
            </View>

            <View
              style={{
                paddingLeft: 10,
                borderColor: Colors.DEFAULT_GREY,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                width: '50%',
                height: 57,
                justifyContent: 'center',
              }}>
              <Pressable onPress={() => setShowBottomSheet(!showBottomSheet)}>
                <Text style={styles.bottomSheetTextNo}>No</Text>
              </Pressable>
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
        <HomeNav text="Add Admin" onPress={() => navigation.goBack()} />

        <View style={{paddingHorizontal: 20, paddingTop: 20}}>
          <Text style={styles.username}>Admin username</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <TextInput
                placeholder="Search for a user to assign role"
                placeholderTextColor={Colors.SECONDARY_GREY}
                selectionColor={Colors.SECONDARY_GREY}
                style={styles.inputText}
                onChangeText={text => setPassword(text)}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.links}>
              With admin access, this user can do the following:
            </Text>
          </View>
          <View>
            <Text style={styles.linkTop}>Content</Text>
            <Text style={styles.links}>
              Create, manage or delete posts, blogs and other things on your
              business account
            </Text>
          </View>
          <View>
            <Text style={styles.linkTop}>Reviews and Replies</Text>
            <Text style={styles.links}>
              Can respond to reviews and comment on blog posts
            </Text>
          </View>
          <View>
            <Text style={styles.linkTop}>Ads & Promos</Text>
            <Text style={styles.links}>
              Can create, manage and delete ads and promos for the business
            </Text>
          </View>
          <View>
            <Text style={styles.linkTop}>Insight</Text>
            <Text style={styles.links}>
              Can see and download insights about the business
            </Text>
          </View>
        </View>
        <Spacer size={45} />
        <View style={styles.buttonView}>
          <CustomButton
            text="Give access"
            onPress={() => setShowBottomSheet(!showBottomSheet)}
            type="PRIMARY"
          />
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
    textAlign: 'center',
  },
  bottomSheetTextYes: {
    fontFamily: Font.AVENIR_MEDIUM,
    fontSize: 16,
    lineHeight: 16,
    color: Colors.PINK,
    alignSelf: 'center',
    alignItems: 'center',
  },
  bottomSheetTextNo: {
    fontFamily: Font.AVENIR_MEDIUM,
    fontSize: 16,
    lineHeight: 16,
    color: Colors.DASH_PINK,
    alignSelf: 'center',
    alignItems: 'center',
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
    width: 360,
    lineHeight: 20,
    paddingBottom: 8,
  },
  buttonView: {
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  linkTop: {
    fontFamily: Font.AVENIR_BLACK,
    color: Colors.HEADER_BLACK,
    fontSize: 16,
    paddingTop: 16,
    lineHeight: 20,
    paddingBottom: 8,
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
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.SECONDARY_GREY,
    justifyContent: 'center',
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
