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
import React, {useState} from 'react';
import tab from '../../../assets/images/tab.png';
import profile from '../../../assets/images/profile1.png';
import notify from '../../../assets/images/notify.png';
import PurpleCloset from '../../../assets/images/purplecloset.png';
import Vector from '../../../assets/images/Vector.png';
import Vector2 from '../../../assets/images/Vector2.png';
import Vector3 from '../../../assets/images/Vector3.png';
import Vector4 from '../../../assets/images/Vector4.png';
import Vector5 from '../../../assets/images/Vector5.png';
import Vector6 from '../../../assets/images/Vector6.png';
import Group12 from '../../../assets/images/Group12.png';
import CharliesBagelGarden from '../../../assets/images/CharliesBagelGarden.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../constants/colors';
import Font from '../../constants/Font';

const HomeScreen = ({navigation}) => {
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
      <ScrollView style={styles.scrollView}>
        <View style={styles.nav}>
          <View style={styles.profileStyle}>
            <Image
              source={profile}
              style={[styles.profile]}
              resizeMode="contain"
            />
            <Text style={styles.profileText}> Purplepages01</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('NotifyScreen')}>
            <Image
              source={notify}
              style={[styles.nofity]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Text style={styles.text_header}>All Categories</Text>
          <View style={styles.text_header}>
            <Image
              source={tab}
              style={[styles.profiletab]}
              resizeMode="contain"
            />
          </View>
          <View style={styles.searchContainer}>
            <View style={styles.inputContainer}>
              <View style={styles.inputSubContainer}>
                <Feather
                  name={'search'}
                  size={22}
                  color={Colors.HEADER_BLACK}
                  style={{marginRight: 10}}
                  onPress={() => navigation.navigate('FilterScreen')}
                />

                <TextInput
                  placeholder="Search"
                  placeholderTextColor={Colors.HEADER_BLACK}
                  selectionColor={Colors.HEADER_BLACK}
                  style={styles.inputText}
                />
              </View>
            </View>
            <Image source={Vector} style={styles.vector} resizeMode="contain" />
          </View>

          <View style={styles.filterContainer}>
            <View style={styles.filterSubContainer}>
              <Text style={styles.filter} onPress={''}>
                Newest to Oldest{' '}
              </Text>
              <Image
                source={Vector2}
                style={styles.vector}
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={styles.body}>
            <Pressable
              onPress={() => navigation.navigate('BusinessInfoScreen')}>
              <Image source={PurpleCloset} style={styles.images} />
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('BusinessInfoScreen')}>
              <Text style={styles.bussinessName}>Purple Closet</Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('ListBusinessScreen')}>
              <Text style={styles.bussinessCategory}>Fashion</Text>
            </Pressable>
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
                  color={Colors.RANK}
                  style={{marginRight: 2}}
                />
              </View>
              <View style={styles.actionContent}>
                <Feather
                  name={'bookmark'}
                  size={18}
                  color={Colors.CATEGORY_PURPLE}
                  style={{marginRight: 20}}
                />
                <Feather
                  name={'share-2'}
                  size={18}
                  color={Colors.CATEGORY_PURPLE}
                  style={{marginRight: 2}}
                />
              </View>
            </View>
          </View>

          <View style={styles.body}>
            <Image source={CharliesBagelGarden} style={styles.images} />
            <Text style={styles.bussinessName}>Charlies Bagel Garden</Text>
            <Text style={styles.bussinessCategory}>Food & Drinks</Text>
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
                  color={Colors.RANK}
                  style={{marginRight: 2}}
                />
              </View>
              <View style={styles.actionContent}>
                <Feather
                  name={'bookmark'}
                  size={18}
                  color={Colors.CATEGORY_PURPLE}
                  style={{marginRight: 20}}
                />
                <Feather
                  name={'share-2'}
                  size={18}
                  color={Colors.CATEGORY_PURPLE}
                  style={{marginRight: 2}}
                />
              </View>
            </View>
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
    </SafeAreaView>
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
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
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

export default HomeScreen;
