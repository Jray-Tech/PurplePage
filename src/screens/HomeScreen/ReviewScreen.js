import { View, Text, Button, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native'
import React, {useState} from 'react';
import Notification from '../../../assets/images/notification.png';
import {Colors, Font} from "../../constants";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import NotifyIcon from '../../../assets/images/notifyIcon.png';
import {CustomButton, CustomBorder} from '../../components/CustomComponents';


const ReviewScreen = ({navigation}) => {
const [isNotification, setIsNotification] = useState(false);
if (isNotification) {
} return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.nav}>
        <FontAwesome
            onPress={()=> navigation.goBack()}
            name='chevron-left'
            color='#000000'
            size={20}
        />
       
    
        <View style={styles.navText}>
        <Text style={styles.navText}>Rate & Review</Text>
        </View>
     </View>
    

    <View style={styles.Notifications}>
        <Text style={styles.ClearNotification}>Tell us what you think</Text>
    </View>
    <View style={styles.action}>
            <View style={styles.rank}>
              <FontAwesome
                name={'star'}
                size={20}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 8}}
              />
              <FontAwesome
                name={'star'}
                size={20}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 8}}
              />
              <FontAwesome
                name={'star'}
                size={20}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 8}}
              />
              <FontAwesome
                name={'star'}
                size={20}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 8}}
              />
              <FontAwesome
                name={'star'}
                size={20}
                color={Colors.DEFAULT_GREY}
                
              />
              
              </View>
              </View>
    <View style={styles.notificationsHead}>
        <Text style={styles.notificationsTitle}>Describe your experience</Text>
    </View>


    
   

    </ScrollView>
    </SafeAreaView>
)
}

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  notificationsTitle: {
    fontSize: 16,
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
    lineHeight: 19
  },
  text: {
    fontFamily: Font.AVENIR_MEDIUM,
    fontSize: 16,
    
  },
  textContent: {
    paddingHorizontal: 20,
    width: '80%'
  },
  date: {
    fontFamily: Font.AVENIR_REGULAR,
    fontSize: 12,
  }

  
});


export default ReviewScreen;