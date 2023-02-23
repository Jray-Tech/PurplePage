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
import Vector from '../../../assets/images/Vector.png';
import Vector2 from '../../../assets/images/Vector2.png';
import CharliesBagelGarden from '../../../assets/images/CharliesBagelGarden.png';
import Shoe from '../../../assets/images/shoe.png';
import Bag from '../../../assets/images/bag.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors, Font} from '../../constants';
import {color} from 'react-native-reanimated';
import profile from '../../../assets/images/profile1.png';
import Ellipse3 from '../../../assets/images/Ellipse3.png';
import Ellipse4 from '../../../assets/images/Ellipse4.png';
import Ellipse5 from '../../../assets/images/Ellipse5.png';
import {Nav, Spacer} from '../../components/CustomComponents';

const BusinessProductScreen = ({navigation}) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () => {
    console.warn('Log in');
  };

  const forgotPasswordPressed = () => {
    console.warn('Forgot Password');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <Nav onPress={() => navigation.goBack()} />

        <View style={styles.header}>
          <View style={styles.profileHead}>
            <View style={styles.profileStyle}>
              <Image
                source={profile}
                style={[styles.profile]}
                resizeMode="contain"
              />
              <Text style={styles.profileText}> Charlies Bagel Garden</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('NotifyScreen')}>
              <Feather
                name={'more-vertical'}
                size={22}
                color={Colors.LIGHT_MODE_GREY}
                style={{marginRight: 2}}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.body}>
            <Image source={Shoe} style={styles.images} />
            <View style={styles.action}>
              <View style={styles.rank}>
                <Text style={styles.bussinessLocation}>
                  Strappy Sandals with mini purse
                </Text>
              </View>
            </View>
            <Text style={styles.bussinessCategory}>₦8000.00</Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={Ellipse3}
                style={{width: 16}}
                resizeMode="contain"
              />
              <Image
                source={Ellipse4}
                style={{width: 16}}
                resizeMode="contain"
              />
              <Image
                source={Ellipse5}
                style={{width: 16}}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        <View style={styles.header}>
          <View style={styles.profileHead}>
            <View style={styles.profileStyle}>
              <Image
                source={profile}
                style={[styles.profile]}
                resizeMode="contain"
              />
              <Text style={styles.profileText}> Charlies Bagel Garden</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('NotifyScreen')}>
              <Feather
                name={'more-vertical'}
                size={22}
                color={Colors.LIGHT_MODE_GREY}
                style={{marginRight: 2}}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.body}>
            <Image source={Bag} style={styles.images} />

            <View style={styles.action}>
              <View style={styles.rank}>
                <Text style={styles.bussinessLocation}>
                  Strappy Sandals with mini purse
                </Text>
              </View>
            </View>
            <Text style={styles.bussinessCategory}>₦18000.00</Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={Ellipse3}
                style={{width: 16}}
                resizeMode="contain"
              />
              <Image
                source={Ellipse4}
                style={{width: 16}}
                resizeMode="contain"
              />
              <Image
                source={Ellipse5}
                style={{width: 16}}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
        <Spacer size={60} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  rank: {
    flexDirection: 'row',
  },

  footer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  profileHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
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
    fontSize: 16,
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
    marginTop: 5,
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
    marginTop: 5,
    marginBottom: 5,
    color: Colors.BOLD_BLACK,
    fontFamily: Font.AVENIR_BOLD,
  },
  bussinessCategory: {
    fontSize: 16,
    marginBottom: 5,
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

export default BusinessProductScreen;
