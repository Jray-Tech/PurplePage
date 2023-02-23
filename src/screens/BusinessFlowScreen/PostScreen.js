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
import Feather from 'react-native-vector-icons/Feather';
import {
  CustomButton,
  CustomBottomTab,
  Nav,
  CustomBusinessTab,
  Spacer,
} from '../../components/CustomComponents';
import {Colors, Font} from '../../constants';
import Calendar from '../../../assets/images/Calendar.png';
import Profile from '../../../assets/images/notifyIcon.png';
import Edit from '../../../assets/images/edit.png';
import Comment from '../../../assets/images/Comment.png';
import Like from '../../../assets/images/Like.png';
import Bookmark from '../../../assets/images/Bookmark.png';
import Share from '../../../assets/images/Share.png';
import Insights from '../../../assets/images/Insights.png';

const PostScreen = ({navigation}) => {
  const [review, setReview] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.nav}>
          <Nav onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.header}>
          <View style={styles.body}>
            <View style={styles.action}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={[styles.bussinessName, {paddingRight: 24}]}>
                  Lorem ipsum dolor sit amet consectetur. Cursus quisque.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',

                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  borderRadius: 5,
                }}>
                <Feather
                  name={'more-vertical'}
                  size={22}
                  color={Colors.LIGHT_MODE_GREY}
                  style={{marginRight: 2}}
                />
              </View>
            </View>

            <Text style={styles.Author}>
              By <Text style={{color: Colors.PINK}}>Purple Closet</Text>
            </Text>
          </View>
          <View style={styles.postDate}>
            <Image source={Calendar} resizeMode="contain" />
            <Text style={styles.Date}>December 21, 2022</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.username}>
              Lorem ipsum dolor sit amet consectetur. Nulla sit non amet nec
              tellus massa turpis diam. Sollicitudin maecenas platea duis
              scelerisque varius ullamcorper velit suspendisse sed.{' '}
            </Text>
            <Spacer />
            <Text style={styles.username}>
              Sollicitudin turpis adipiscing ut integer vestibulum a sed. Fames
              lectus aliquam at diam facilisis nunc orci. Dignissim porttitor
              non nisi habitant venenatis.{' '}
            </Text>
            <Spacer />
            <Text style={styles.username}>
              Vel faucibus semper tempus a fringilla urna magna. Nullam mi et
              massa vitae imperdiet arcu libero etiam nisl. Et vulputate leo
              blandit pellentesque lectus pretium pharetra quam. Lectus nulla
              lectus in enim.
            </Text>
          </View>
          <View style="">
            <Text
              style={{
                fontFamily: Font.AVENIR_BLACK,
                color: Colors.BOLD_BLACK,
                fontSize: 18,
                lineHeight: 28,
              }}>
              TAGS:{' '}
              <Text
                style={{
                  fontSize: 16,
                  color: Colors.PINK,
                  fontFamily: Font.AVENIR_MEDIUM,
                }}>
                faucibus, faucibus, faucibus, faucibus
              </Text>
            </Text>
          </View>
          <Spacer size={24} />
          <View style="">
            <Text
              style={{
                fontFamily: Font.AVENIR_BLACK,
                color: Colors.BOLD_BLACK,
                fontSize: 12,
                lineHeight: 14.4,
              }}>
              3 comments
            </Text>
            <View style={styles.headerContainer}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={Profile}
                  style={{marginTop: 10}}
                  resizeMode="contain"
                />

                <View style={{flex: 1, paddingTop: 10}}>
                  <Text style={styles.headerBlogText}>Purplepages01</Text>
                </View>
              </View>
              <View
                style={{paddingLeft: 50, paddingBottom: 20, paddingRight: 20}}>
                <Text
                  style={{
                    fontFamily: Font.AVENIR_MEDIUM,
                    fontSize: 14,
                  }}>
                  Love this piece, so informative. Keep it up purple closet👏
                </Text>

                <Text
                  style={{
                    fontFamily: Font.AVENIR_MEDIUM,
                    fontSize: 14,
                    paddingTop: 6,
                    color: Colors.PINK,
                  }}>
                  Reply
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image
                    source={Profile}
                    style={{marginTop: 10}}
                    resizeMode="contain"
                  />
                </View>
                <View style={{flex: 1, paddingTop: 10}}>
                  <Text style={styles.headerBlogText}>Purplepages01</Text>
                </View>
              </View>
              <View
                style={{paddingLeft: 50, paddingBottom: 20, paddingRight: 20}}>
                <Text
                  style={{
                    fontFamily: Font.AVENIR_MEDIUM,
                    fontSize: 14,
                  }}>
                  Love this piece, so informative. Keep it up purple closet👏
                </Text>

                <Text
                  style={{
                    fontFamily: Font.AVENIR_MEDIUM,
                    fontSize: 14,
                    paddingTop: 6,
                    color: Colors.PINK,
                  }}>
                  Reply
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image
                    source={Profile}
                    style={{marginTop: 10}}
                    resizeMode="contain"
                  />
                </View>
                <View style={{flex: 1, paddingTop: 10}}>
                  <Text style={styles.headerBlogText}>Purplepages01</Text>
                </View>
              </View>
              <View
                style={{paddingLeft: 50, paddingBottom: 20, paddingRight: 20}}>
                <Text
                  style={{
                    fontFamily: Font.AVENIR_MEDIUM,
                    fontSize: 14,
                  }}>
                  Love this piece, so informative. Keep it up purple closet👏
                </Text>

                <Text
                  style={{
                    fontFamily: Font.AVENIR_MEDIUM,
                    fontSize: 14,
                    paddingTop: 6,
                    color: Colors.PINK,
                  }}>
                  Reply
                </Text>
              </View>
              <Spacer size={20} />
              <Text style={styles.notificationsTitle}>Add a comment</Text>

              <View style={styles.notificationsParagraph}>
                <TextInput
                  style={styles.textArea}
                  multiline={true}
                  numberOfLines={4}
                  placeholder=""
                  onChangeText={text => setReview(text)}
                  value={review}
                  textAlignVertical="top"
                />
              </View>
            </View>
          </View>
          <View style={{justifyContent: 'flex-end', alignSelf: 'flex-end'}}>
            <CustomButton
              text="Post Comment"
              onPress={() => navigation.navigate('ReviewScreen')}
              type="BORDERED"
            />
          </View>
        </View>
      </ScrollView>
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
  postDate: {
    flexDirection: 'row',
    paddingTop: 24,
    paddingBottom: 16,
    alignItems: 'center',
  },

  notificationsTitle: {
    fontSize: 14,
    fontFamily: Font.AVENIR_MEDIUM,
    paddingBottom: 5,
  },
  textArea: {
    paddingHorizontal: 10,
    fontSize: 14,
    fontFamily: Font.AVENIR_REGULAR,
    borderWidth: 1,
    borderColor: Colors.DEFAULT_GREY,
    borderRadius: 5,
    width: '100%',
  },
  headerBlogText: {
    color: Colors.HEADER_BLACK,
    fontSize: 16,

    fontFamily: Font.AVENIR_BLACK,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  nav: {
    paddingHorizontal: 20,
  },

  header: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    marginTop: 10,
    paddingHorizontal: 20,
  },

  username: {
    marginTop: 15,
    fontSize: 16,
    lineHeight: 28,
    color: Colors.LIGHT_MODE_GREY,
    fontFamily: Font.AVENIR_REGULAR,
    paddingBottom: 10,
  },

  action: {
    flexDirection: 'row',
    //marginTop: 10,
    justifyContent: 'space-between',
    marginTop: 5,
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
  bussinessName: {
    fontSize: 19,
    marginBottom: 5,
    color: Colors.BOLD_BLACK,
    fontFamily: Font.AVENIR_BOLD,
  },

  Author: {
    paddingBottom: 1,
    fontSize: 14,
    lineHeight: 14.4,
    color: Colors.LIGHT_MODE_GREY,
    fontFamily: Font.AVENIR_MEDIUM,
  },
  Date: {
    fontSize: 14,

    alignSelf: 'center',
    paddingLeft: 10,

    color: Colors.LIGHT_MODE_GREY,
    fontFamily: Font.AVENIR_MEDIUM,
  },
});

export default PostScreen;
