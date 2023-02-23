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
import PurpleCloset from '../../../assets/images/purplecloset.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {
  CustomButton,
  CustomBottomTab,
  Nav,
  HomeNav,
  CustomBorder,
  Spacer,
} from '../../components/CustomComponents';
import {Colors, Font} from '../../constants';
import Subscribed from '../../../assets/images/Subcribed.png';
import Comment from '../../../assets/images/Comment.png';
import Like from '../../../assets/images/Like.png';
import Bookmark from '../../../assets/images/Bookmark.png';
import Share from '../../../assets/images/Share.png';
import Insights from '../../../assets/images/Insights.png';
import Profile from '../../../assets/images/businessProfile.png';

const BlogInsightScreen = ({navigation}) => {
  const [isSubscribed, setIsSubscribed] = useState(true);

  return (
    <View style={styles.container}>
      <HomeNav text="Blog Insight" onPress={() => navigation.goBack()} />

      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <View style={{flexDirection: 'row'}}>
            <View style={{paddingLeft: 20}}>
              <Image
                source={Profile}
                style={{marginTop: 20}}
                resizeMode="contain"
              />
            </View>
            <View style={{flex: 1, paddingTop: 20}}>
              <Pressable onPress={() => navigation.navigate('PostScreen')}>
                <Text style={styles.headerBlogText}>
                  Lorem ipsum dolor sit amet consectetur. Cursus quisque.
                </Text>
              </Pressable>
            </View>

            <Text style={styles.pubDate}>5h</Text>
          </View>
          <View style={{paddingLeft: 70, paddingBottom: 10, paddingRight: 20}}>
            <Text
              style={{
                fontFamily: Font.AVENIR_MEDIUM,
                fontSize: 14,
              }}>
              Lorem ipsum dolor sit amet consectetur Mi commodo enim.Lorem
              ipsum...
            </Text>
            <View style={{flexDirection: 'row', paddingTop: 13.33}}>
              <View style={{flexDirection: 'row', paddingRight: 32}}>
                <Image source={Comment} resizeMode="contain" />
                <Text
                  style={{
                    fontFamily: Font.AVENIR_MEDIUM,
                    fontSize: 14,
                    paddingLeft: 10,
                  }}>
                  12
                </Text>
              </View>
              <View style={{flexDirection: 'row', paddingRight: 32}}>
                <Image source={Like} resizeMode="contain" />
                <Text
                  style={{
                    fontFamily: Font.AVENIR_MEDIUM,
                    fontSize: 14,
                    paddingLeft: 10,
                  }}>
                  24
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={Bookmark} resizeMode="contain" />
                <Text
                  style={{
                    fontFamily: Font.AVENIR_MEDIUM,
                    fontSize: 14,
                    paddingLeft: 10,
                  }}>
                  24
                </Text>
              </View>
            </View>
          </View>
        </View>
        <CustomBorder />
        <Spacer size={35} />
        <View style={styles.InsightsHeader}>
          <Text style={styles.InsightsBody}>Users Reached</Text>
          <Text style={styles.InsightsResult}>35</Text>
        </View>
        <Spacer size={12} />
        <View style={styles.InsightsHeader}>
          <Text style={styles.InsightsBody}>Post Shares</Text>
          <Text style={styles.InsightsResult}>24</Text>
        </View>
        <Spacer size={12} />
        <View style={styles.InsightsHeader}>
          <Text style={styles.InsightsBody}>Profile visits</Text>
          <Text style={styles.InsightsResult}>213</Text>
        </View>
        <Spacer size={12} />
        <View style={styles.InsightsHeader}>
          <Text style={styles.InsightsBody}>Engagements</Text>
          <Text style={styles.InsightsResult}>65</Text>
        </View>
      </View>
      <View style={{paddingHorizontal: 20, paddingBottom: 80}}>
        <CustomButton
          text="Promote this Post"
          onPress={() => navigation.navigate('PricingScreen')}
          type="PRIMARY"
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
  headerBlogText: {
    color: Colors.HEADER_BLACK,
    fontSize: 16,
    lineHeight: 20,
    fontFamily: Font.AVENIR_BLACK,
    paddingHorizontal: 20,
  },
  pubDate: {
    paddingRight: 20,
    paddingTop: 20,
  },
  rank: {
    flexDirection: 'row',
  },
  InsightsHeader: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  InsightsBody: {
    color: Colors.LIGHT_MODE_GREY,
    fontFamily: Font.AVENIR_REGULAR,
    lineHeight: 19.6,
  },
  InsightsResult: {
    color: Colors.LIGHT_MODE_GREY,
    fontFamily: Font.AVENIR_MEDIUM,
    lineHeight: 19.6,
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
  body: {},
  images: {
    width: '100%',
    borderRadius: 10,
  },
  header: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
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

export default BlogInsightScreen;
