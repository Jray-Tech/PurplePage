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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../constants/Colors';
import Font from '../../constants/Font';
import SearchFilter from '../../components/Headers/SearchFilter';
import Header from '../../components/Headers/Header';
import AdHeader from './subs/AdHeader';
import {Spacer} from '../../components/CustomComponents';
import {globalStyles} from '../../components/styles';
import AdComments from './subs/AdComments';

//   businessImage: any;
//   businessName: string;
//   businessInfo: string;
//   businessTitle: string;
//   adsImage: any;
//   likes: string;
//   views: string;
//   shares: string;
const adheader = {
  businessImage: require('../../../assets/images/profile1.png'),
  businessName: 'Charlies Bagel Garden',
  businessInfo:
    'Yummy croissants with chocolate raisins. We added gummies to give you a unique taste of goodness',
  businessTitle: 'Lovely Cakes',
  adsImage: require('../../../assets/images/CharliesBagelGarden.png'),
  likes: '123 Likes',
  views: '23456 Views',
  shares: '23 Shares',
};

const comment = {
  businessImage: require('../../../assets/images/profile1.png'),
  businessName: 'Charlies Bagel Garden',
  comment: 'Your pastries are always so yummy, can’t wait to try this also👏',
};

const AdsDetailScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{paddingTop: 24}}>
        <Header />
        <Spacer size={32} />
        <AdHeader
          adsImage={adheader.adsImage}
          businessImage={adheader.businessImage}
          businessInfo={adheader.businessInfo}
          businessName={adheader.businessName}
          businessTitle={adheader.businessTitle}
          likes={adheader.likes}
          shares={adheader.shares}
          views={adheader.views}
        />
        <Spacer size={32} />

        <Text style={{...globalStyles.textHeader, fontSize: 18}}>
          All Comments
        </Text>
        <Spacer size={16} />
        <AdComments
          businessImage={comment.businessImage}
          businessName={comment.businessName}
          comment={comment.comment}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    // marginTop: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default AdsDetailScreen;
