import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../components/styles';
import Colors from '../../../constants/Colors';
import {Spacer} from '../../../components/styles/Spacer';
import {LoveIcon, ShareIcon} from '../../../components/svg/AppIcons';
import {useNavigation} from '@react-navigation/native';

interface AdsBoxTypes {
  type: string;
  image: any;
  title: string;
  businessName: string;
  businessImage: any;
}
const AdsBox: React.FC<AdsBoxTypes> = ({
  businessImage,
  businessName,
  image,
  title,
  type,
}) => {
  const {navigate} = useNavigation<any>();
  return (
    <TouchableWithoutFeedback onPress={() => navigate('AdsDetailScreen')}>
      <View>
        <Text
          style={{
            ...globalStyles.textPrimaryGrey,
            color: Colors.SECONDARY_GREY,
            textAlign: 'right',
          }}>
          {type}
        </Text>
        <Image source={image} style={styles.imageStyle} />
        <Spacer size={8} />
        <View style={styles.row}>
          <Image source={businessImage} style={styles.businessImageStyle} />
          <View style={{flex: 1}}>
            <Text
              style={{...globalStyles.textHeader, color: Colors.BOLD_BLACK}}
              numberOfLines={1}>
              {title}
            </Text>
            <Text
              style={{...globalStyles.thinText, color: Colors.PINK}}
              numberOfLines={1}>
              {businessName}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 20,
              alignItems: 'center',
            }}>
            <LoveIcon />
            <View style={{width: 10}} />
            <ShareIcon />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AdsBox;

const styles = StyleSheet.create({
  imageStyle: {
    height: 170,
    width: '100%',
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    // alignItems: "center"
  },
  businessImageStyle: {
    height: 40,
    width: 40,
    marginRight: 12,
    borderRadius: 40,
  },
});
