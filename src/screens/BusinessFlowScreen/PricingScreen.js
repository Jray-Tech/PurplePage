import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {
  CustomButton,
  CustomBottomTab,
  Nav,
  HomeNav,
  CustomBorder,
  Spacer,
} from '../../components/CustomComponents';
import {Colors, Font} from '../../constants';
import Basic from '../../../assets/images/Basic.png';
import Premium from '../../../assets/images/Premium.png';
import AntDesign from 'react-native-vector-icons/AntDesign';

const listTab = [
  {
    status: 'Daily',
  },
  {
    status: 'Weekly',
  },
  {
    status: 'Monthly',
  },
];
const data = [
  {
    name: 'Basic Plan',
    status: 'Daily',
    price: '₦400',
    detailOne: 'Your product/blog/brand gets visibility',
    detailTwo: 'Can select more than a day',
    detailThree: 'Can select more than a day',
    backgroundColor: Colors.DEFAULT_PURPLE,
    color: Colors.DEFAULT_WHITE,
    textColor: Colors.DEFAULT_WHITE,
  },
  {
    name: 'Premium Plan',
    status: 'Daily',
    price: '₦700',
    detailOne: 'You get way more visibility',
    detailTwo: 'Featured in various locations',
    backgroundColor: Colors.PROGRESS_GREY,
    color: Colors.DEFAULT_PURPLE,
    textColor: Colors.SECONDARY_GREY,
  },
  {
    name: 'Basic Plan',
    status: 'Weekly',
    price: '₦2500',
    detailOne: 'Your product/blog/brand gets visibility',
    detailTwo: 'Can select more than a day',
    detailThree: 'Can select more than a day',
    backgroundColor: Colors.DEFAULT_PURPLE,
    color: Colors.DEFAULT_WHITE,
    textColor: Colors.DEFAULT_WHITE,
  },
  {
    name: 'Premium Plan',
    status: 'Weekly',
    price: '₦4000',
    detailOne: 'You get way more visibility',
    detailTwo: 'Featured in various locations',
    backgroundColor: Colors.PROGRESS_GREY,
    color: Colors.DEFAULT_PURPLE,
    textColor: Colors.SECONDARY_GREY,
  },
  {
    name: 'Basic Plan',
    status: 'Monthly',
    price: '₦8000',
    detailOne: 'Your product/blog/brand gets visibility',
    detailTwo: 'Can select more than a day',
    detailThree: 'Can select more than a day',
    backgroundColor: Colors.DEFAULT_PURPLE,
    color: Colors.DEFAULT_WHITE,
    textColor: Colors.DEFAULT_WHITE,
  },
  {
    name: 'Premium Plan',
    status: 'Monthly',
    price: '₦14000',
    detailOne: 'You get way more visibility',
    detailTwo: 'Featured in various locations',
    backgroundColor: Colors.PROGRESS_GREY,
    color: Colors.DEFAULT_PURPLE,
    textColor: Colors.SECONDARY_GREY,
  },
];
const PricingScreen = ({navigation}) => {
  const [status, setStatus] = useState('Daily');
  const [datalist, setDatalist] = useState(
    data.filter(e => e.status === 'Daily'),
  );
  const setStatusFilter = status => {
    if (status == 'Daily') {
      setDatalist([...data.filter(e => e.status === status)]);
    } else {
      setDatalist([...data.filter(e => e.status === status)]);
    }
    setStatus(status);
  };

  const renderItem = ({item, index}) => {
    return (
      <View
        key={index}
        style={[styles.itemContainer, {backgroundColor: item.backgroundColor}]}>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: Font.AVENIR_MEDIUM,
                color: item.color,
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontFamily: Font.AVENIR_BOLD,
                color: item.textColor,
              }}>
              {item.price}/
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Font.AVENIR_MEDIUM,
                  color: item.textColor,
                }}>
                {item.status}
              </Text>
            </Text>
          </View>
          <Spacer size={10} />
          <View style={{flexDirection: 'row'}}>
            <AntDesign
              name={'checkcircleo'}
              size={13.33}
              color={item.color}
              style={{alignSelf: 'center'}}
            />
            <Text
              style={{
                color: item.textColor,
                fontFamily: Font.AVENIR_MEDIUM,
                paddingLeft: 10.33,
              }}>
              {item.detailOne}
            </Text>
          </View>
          <Spacer size={10} />
          <View style={{flexDirection: 'row'}}>
            <AntDesign
              name={'checkcircleo'}
              size={13.33}
              color={item.color}
              style={{alignSelf: 'center'}}
            />
            <Text
              style={{
                color: item.textColor,
                fontFamily: Font.AVENIR_MEDIUM,
                paddingLeft: 10.33,
              }}>
              {item.detailTwo}
            </Text>
          </View>
          {item.detailThree && (
            <View style={{flexDirection: 'row', paddingTop: 16}}>
              <AntDesign
                name={'checkcircleo'}
                size={13.33}
                color={item.color}
                style={{alignSelf: 'center'}}
              />
              <Text
                style={{
                  color: item.textColor,
                  fontFamily: Font.AVENIR_MEDIUM,
                  paddingLeft: 10.33,
                }}>
                {item.detailThree}
              </Text>
            </View>
          )}
          <Spacer size={16} />
          <View flexDirection="row">
            <Text
              style={{
                fontFamily: Font.AVENIR_MEDIUM,
                fontSize: 16,
                color: item.color,
              }}>
              Get started now
            </Text>
            <AntDesign
              name={'arrowright'}
              size={21}
              color={item.color}
              style={{alignSelf: 'center', paddingLeft: 5}}
            />
          </View>
        </View>

        <Spacer size={16} />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <HomeNav
        text="Promote your blog post"
        onPress={() => navigation.goBack()}
      />
      <Spacer size={20} />
      <View style={{paddingHorizontal: 20}}>
        <Text style={styles.priceIntro}>Simple and transparent pricing</Text>
        <Spacer size={10} />
        <Text style={styles.priceSubIntro}>
          Straight to the point pricing plans.{' '}
        </Text>
        <Spacer size={10} />
        <View style={styles.listTab}>
          {listTab.map(e => (
            <TouchableOpacity
              style={[
                styles.btnTab,
                status === e.status && styles.btnTabActive,
              ]}
              onPress={() => setStatusFilter(e.status)}>
              <Text
                style={[
                  styles.textTab,
                  status === e.status && styles.textTabActive,
                ]}>
                {e.status}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <FlatList
        style={{
          paddingHorizontal: 20,
          borderRadius: 20,
          paddingBottom: 16,
          marginBottom: 16,
        }}
        data={datalist}
        keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}
      />
      <View style={styles.buttonView}>
        <CustomButton
          text="Choose plan"
          onPress={() => navigation.navigate('PostAdsScreen')}
          type="PRIMARY"
        />
      </View>
    </SafeAreaView>
  );
};

export default PricingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  priceIntro: {
    fontSize: 20,
    fontFamily: Font.AVENIR_MEDIUM,
    color: Colors.BOLD_BLACK,
  },
  priceSubIntro: {
    fontSize: 14,
    fontFamily: Font.AVENIR_MEDIUM,
  },
  buttonView: {
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  listTab: {
    flexDirection: 'row',
    backgroundColor: Colors.THUMB_GREY,
    borderRadius: 43,
    marginBottom: 20,
    width: '74%',
  },
  btnTab: {
    width: Dimensions.get('window').width / 4.5,
    flexDirection: 'row',

    height: 40,
    borderRadius: 43,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTab: {
    fontSize: 16,
    fontFamily: Font.AVENIR_MEDIUM,
  },
  btnTabActive: {
    backgroundColor: Colors.ACTIVE_PINK,
  },
  textTabActive: {
    color: Colors.BOLD_BLACK,
    fontFamily: Font.AVENIR_BOLD,
  },
  itemContainer: {
    paddingVertical: 10,
    borderRadius: 20,
    paddingHorizontal: 24,
    marginVertical: 8,
  },
});
