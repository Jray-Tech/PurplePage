import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../components/styles';
import Colors from '../../../constants/Colors';
import {Spacer} from '../../../components/CustomComponents';
import {
  BookMarkIcon,
  LikeIcon,
  ShareIcon,
} from '../../../components/svg/AppIcons';

interface AdHeaderTypes {
  businessImage: any;
  businessName: string;
  businessInfo: string;
  businessTitle: string;
  adsImage: any;
  likes: string;
  views: string;
  shares: string;
}
const AdHeader: React.FC<AdHeaderTypes> = ({
  businessTitle,
  adsImage,
  businessImage,
  businessInfo,
  businessName,
  likes,
  shares,
  views,
}) => {
  return (
    <View>
      <View style={styles.row}>
        <Image source={businessImage} style={styles.businessImageStyle} />
        <Text style={{...globalStyles.textPrimaryGrey, color: Colors.PINK}}>
          {businessName}
        </Text>
      </View>
      <Spacer size={8} />
      <Text style={{...globalStyles.textHeader}}>{businessTitle}</Text>
      <Spacer size={16} />
      <Text style={{...globalStyles.textPrimaryGrey}}>{businessInfo}</Text>
      <Spacer size={16} />
      <Image source={adsImage} style={styles.imageStyle} />
      <Spacer size={16} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={globalStyles.textPrimaryGrey}>{likes}</Text>
        <Text style={globalStyles.textPrimaryGrey}>{views}</Text>
        <Text style={globalStyles.textPrimaryGrey}>{shares}</Text>
      </View>
      <Spacer size={16} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <LikeIcon />

        <View
          style={{
            flexDirection: 'row',
            width: 60,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <BookMarkIcon />
          <ShareIcon />
        </View>
      </View>
    </View>
  );
};

export default AdHeader;

const styles = StyleSheet.create({
  businessImageStyle: {
    height: 40,
    width: 40,
    marginRight: 12,
    borderRadius: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    height: 170,
    width: '100%',
    borderRadius: 10,
  },
});
