import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Notification from '../../../assets/images/notification.png';
import Entypo from 'react-native-vector-icons/Entypo';
import NotifyIcon from '../../../assets/images/notifyIcon.png';
import {
  CustomButton,
  CustomBorder,
  HomeNav,
} from '../../components/CustomComponents';
import Colors from '../../constants/Colors';
import Font from '../../constants/Font';

export const NotifyScreen = ({navigation}) => {
  const [isNotification, setIsNotification] = useState(false);
  if (isNotification) {
    return (
      <View style={styles.container}>
        <HomeNav
          style={{paddingHorizontal: 20}}
          text="Notifications"
          onPress={() => navigation.goBack()}
        />
        <View>
          <Image
            source={Notification}
            style={[styles.logo]}
            resizeMode="contain"
          />
          <Text style={styles.verifyText}>No new notifications!</Text>
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <HomeNav text="Notifications" onPress={() => navigation.goBack()} />

        <View style={styles.Notifications}>
          <Text style={styles.ClearNotification}>Clear all</Text>
        </View>
        <View style={styles.notificationsHead}>
          <Text style={styles.notificationsTitle}>Today</Text>
          <Text style={styles.notificationsRead}>Mark all as read</Text>
        </View>
        <View style={styles.notificationsParagraph}>
          <Image
            source={NotifyIcon}
            style={[styles.logo]}
            resizeMode="contain"
          />
          <View style={styles.textContent}>
            <Text style={styles.text}>
              <Text style={{color: Colors.PINK}}>Charlies Bagel Garden</Text>{' '}
              just replied your review
            </Text>
            <Text style={styles.date}>12:30pm</Text>
          </View>
          <Entypo name="dot-single" color={Colors.PINK} size={35} />
        </View>
        <CustomBorder />
        <View style={styles.notificationsParagraph}>
          <Image
            source={NotifyIcon}
            style={[styles.logo]}
            resizeMode="contain"
          />
          <View style={styles.textContent}>
            <Text style={styles.text}>
              <Text style={{color: Colors.PINK}}>Charlies Bagel Garden</Text>{' '}
              just replied your review
            </Text>
            <Text style={styles.date}>12:30pm</Text>
          </View>
          <Entypo name="dot-single" color={Colors.PINK} size={35} />
        </View>
        <CustomBorder />

        <View style={styles.notificationsHead}>
          <Text style={styles.notificationsTitle}>Older</Text>
        </View>
        <View style={styles.notificationsParagraph}>
          <Image
            source={NotifyIcon}
            style={[styles.logo]}
            resizeMode="contain"
          />
          <View style={styles.textContent}>
            <Text style={styles.text}>
              <Text style={{color: Colors.PINK}}>Charlies Bagel Garden</Text>{' '}
              just replied your review
            </Text>
            <Text style={styles.date}>12:30pm</Text>
          </View>
          <Entypo name="dot-single" color={Colors.DEFAULT_WHITE} size={35} />
        </View>
        <CustomBorder />
        <View style={styles.notificationsParagraph}>
          <Image
            source={NotifyIcon}
            style={[styles.logo]}
            resizeMode="contain"
          />
          <View style={styles.textContent}>
            <Text style={styles.text}>
              <Text style={{color: Colors.PINK}}>Charlies Bagel Garden</Text>{' '}
              just replied your review
            </Text>
            <Text style={styles.date}>12:30pm</Text>
          </View>
          <Entypo name="dot-single" color={Colors.DEFAULT_WHITE} size={35} />
        </View>
        <CustomBorder />

        <View style={styles.notificationsParagraph}>
          <Image
            source={NotifyIcon}
            style={[styles.logo]}
            resizeMode="contain"
          />
          <View style={styles.textContent}>
            <Text style={styles.text}>
              <Text style={{color: Colors.PINK}}>Charlies Bagel Garden</Text>{' '}
              just replied your review
            </Text>
            <Text style={styles.date}>12:30pm</Text>
          </View>
          <Entypo name="dot-single" color={Colors.DEFAULT_WHITE} size={35} />
        </View>
        <CustomBorder />
      </ScrollView>
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
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  notificationsHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  notificationsTitle: {
    fontSize: 20,
    fontFamily: Font.AVENIR_BLACK,
    paddingVertical: 10,
  },
  notificationsRead: {
    fontFamily: Font.AVENIR_BLACK,
    paddingVertical: 10,
  },
  notificationsParagraph: {
    flexDirection: 'row',
    paddingVertical: 10,

    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  ClearNotification: {
    fontFamily: Font.AVENIR_BLACK,
    color: Colors.DEFAULT_PURPLE,
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
});
