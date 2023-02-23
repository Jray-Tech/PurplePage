import {
  Text,
  View,
  Button,
  Switch,
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
import Feather from 'react-native-vector-icons/Feather';
import {Colors, Font} from '../../constants';
import {
  CustomButton,
  CustomBottomTab,
  Nav,
  HomeNav,
  CustomBorder,
  Spacer,
} from '../../components/CustomComponents';

const InAppNotificationScreen = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [text, setText] = useState('Press the Switch:');

  const toggleSwitch = () => {
    if (isEnabled) {
      setText('Inactive');
    } else {
      setText('Active');
    }
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <HomeNav
        text="In-app Notifications"
        onPress={() => navigation.goBack()}
      />
      <View style={{paddingHorizontal: 20, paddingTop: 38}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.links}>New subscriber</Text>
          <Switch
            trackColor={{
              false: Colors.DEFAULT_GREY,
              true: Colors.PROGRESS_GREY,
            }}
            thumbColor={isEnabled ? Colors.PINK : Colors.THUMB_GREY}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.links}>Comments on blogpost</Text>
          <Switch
            trackColor={{
              false: Colors.DEFAULT_GREY,
              true: Colors.PROGRESS_GREY,
            }}
            thumbColor={isEnabled ? Colors.PINK : Colors.THUMB_GREY}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.links}>New Reviews</Text>
          <Switch
            trackColor={{
              false: Colors.DEFAULT_GREY,
              true: Colors.PROGRESS_GREY,
            }}
            thumbColor={isEnabled ? Colors.PINK : Colors.THUMB_GREY}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.links}>Blogpost likes</Text>
          <Switch
            trackColor={{
              false: Colors.DEFAULT_GREY,
              true: Colors.PROGRESS_GREY,
            }}
            thumbColor={isEnabled ? Colors.PINK : Colors.THUMB_GREY}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.links}>Blogpost Shares</Text>
          <Switch
            trackColor={{
              false: Colors.DEFAULT_GREY,
              true: Colors.PROGRESS_GREY,
            }}
            thumbColor={isEnabled ? Colors.PINK : Colors.THUMB_GREY}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.links}>Product likes</Text>
          <Switch
            trackColor={{
              false: Colors.DEFAULT_GREY,
              true: Colors.PROGRESS_GREY,
            }}
            thumbColor={isEnabled ? Colors.PINK : Colors.THUMB_GREY}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.links}>Product Shares</Text>
          <Switch
            trackColor={{
              false: Colors.DEFAULT_GREY,
              true: Colors.PROGRESS_GREY,
            }}
            thumbColor={isEnabled ? Colors.PINK : Colors.THUMB_GREY}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.links}>Ads & Promo goes live</Text>
          <Switch
            trackColor={{
              false: Colors.DEFAULT_GREY,
              true: Colors.PROGRESS_GREY,
            }}
            thumbColor={isEnabled ? Colors.PINK : Colors.THUMB_GREY}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <Spacer size={320} />
      <View style={styles.buttonView}>
        <CustomButton
          text="Sign out"
          onPress={() => navigation.navigate('PaymentSuccessScreen')}
          type="SIGNOUT"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  rank: {
    flexDirection: 'row',
  },
  buttonView: {
    marginBottom: 40,
    paddingHorizontal: 20,
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
    paddingBottom: 20,
  },
  delete: {
    fontFamily: Font.AVENIR_MEDIUM,
    color: Colors.DASH_PINK,
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

export default InAppNotificationScreen;
