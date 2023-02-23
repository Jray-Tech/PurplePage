import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Upload from '../../../assets/images/upload.png';
import {
  CustomButton,
  CustomBorder,
  HomeNav,
} from '../../components/CustomComponents';
import Font from '../../constants/Font';
import Colors from '../../constants/Colors';

export const ReviewScreen = ({navigation}) => {
  const [isRate, setIsRate] = useState([false, false, false, false, false]);
  const [isNotification, setIsNotification] = useState(false);
  const [starStates, setStarStates] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [review, setReview] = useState('');
  if (isNotification) {
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <HomeNav text="Rate & Review" onPress={() => navigation.goBack()} />

        <View style={styles.Notifications}>
          <Text style={styles.ClearNotification}>Tell us what you think</Text>
        </View>
        <View style={styles.action}>
          <View style={styles.rank}>
            <FontAwesome
              name={'star'}
              size={20}
              color={starStates[0] ? Colors.RANK : Colors.DEFAULT_GREY}
              style={{marginRight: 8}}
              onPress={() => {
                let newStarStates = [...starStates];
                newStarStates[0] = !newStarStates[0];
                setStarStates(newStarStates);
              }}
            />
            <FontAwesome
              name={'star'}
              size={20}
              color={starStates[1] ? Colors.RANK : Colors.DEFAULT_GREY}
              style={{marginRight: 8}}
              onPress={() => {
                let newStarStates = [...starStates];
                newStarStates[1] = !newStarStates[1];
                setStarStates(newStarStates);
              }}
            />
            <FontAwesome
              name={'star'}
              size={20}
              color={starStates[2] ? Colors.RANK : Colors.DEFAULT_GREY}
              style={{marginRight: 8}}
              onPress={() => {
                let newStarStates = [...starStates];
                newStarStates[2] = !newStarStates[2];
                setStarStates(newStarStates);
              }}
            />
            <FontAwesome
              name={'star'}
              size={20}
              color={starStates[3] ? Colors.RANK : Colors.DEFAULT_GREY}
              style={{marginRight: 8}}
              onPress={() => {
                let newStarStates = [...starStates];
                newStarStates[3] = !newStarStates[3];
                setStarStates(newStarStates);
              }}
            />
            <FontAwesome
              name={'star'}
              size={20}
              color={starStates[4] ? Colors.RANK : Colors.DEFAULT_GREY}
              style={{marginRight: 8}}
              onPress={() => {
                let newStarStates = [...starStates];
                newStarStates[4] = !newStarStates[4];
                setStarStates(newStarStates);
              }}
            />
          </View>
        </View>
        <View style={styles.notificationsHead}>
          <Text style={styles.notificationsTitle}>
            Describe your experience
          </Text>

          <View style={styles.notificationsParagraph}>
            <TextInput
              style={styles.textArea}
              multiline={true}
              numberOfLines={4}
              placeholder="(optional)"
              onChangeText={text => setReview(text)}
              value={review}
              textAlignVertical="top"
            />
          </View>

          <Text style={styles.notificationsTitle}>
            Upload photos/videos
            <Text
              style={{
                color: Colors.DEFAULT_GREY,
                fontFamily: Font.AVENIR_MEDIUM,
              }}>
              (optional)
            </Text>
          </Text>

          <View style={styles.notificationsParagraph}>
            <View
              style={{
                borderRadius: 5,
                borderWidth: 1,
                height: 100,
                width: '100%',
                borderColor: Colors.DEFAULT_GREY,
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <Image
                source={Upload}
                style={{width: 50, height: 50, alignSelf: 'center'}}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonView}>
        <CustomButton
          text="Submit Review"
          onPress={() => navigation.navigate('ReviewScreen')}
          type="PRIMARY"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  Notifications: {
    flexDirection: 'row',
    lineHeight: 19,
    paddingHorizontal: 20,
  },
  rank: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginStart: 16,
    marginTop: 16,
  },
  notificationsHead: {
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  notificationsTitle: {
    fontSize: 16,
    fontFamily: Font.AVENIR_BLACK,
    paddingTop: 10,
  },
  buttonView: {
    alignSelf: 'center',
    width: 200,
    paddingTop: 20,
  },
  notificationsRead: {
    fontFamily: Font.AVENIR_BLACK,
    paddingVertical: 10,
  },
  notificationsParagraph: {
    flexDirection: 'row',
    paddingVertical: 5,

    justifyContent: 'space-between',
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

  ClearNotification: {
    fontFamily: Font.AVENIR_BLACK,
    paddingVertical: 10,
  },
  verifyText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: Font.AVENIR_MEDIUM,
    paddingHorizontal: 40,
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 16,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 158,
    height: 201,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    paddingBottom: 30,
  },
  nav: {
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 48,
    paddingHorizontal: 20,
  },
  navText: {
    flex: 1,
    alignItems: 'center',
    fontFamily: Font.AVENIR_MEDIUM,
    fontSize: 14,
    lineHeight: 19,
  },
  text: {
    fontFamily: Font.AVENIR_MEDIUM,
    fontSize: 16,
  },
  textContent: {
    paddingHorizontal: 20,
    width: '80%',
  },
  date: {
    fontFamily: Font.AVENIR_REGULAR,
    fontSize: 12,
  },
  optionalText: {
    fontFamily: Font.AVENIR_REGULAR,
    color: Colors.DEFAULT_GREY,
    fontSize: 14,
    marginTop: 8,
    marginLeft: 20,
  },
});
