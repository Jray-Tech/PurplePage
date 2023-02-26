import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../components/styles';
import {Spacer} from '../../../components/CustomComponents';
import Colors from '../../../constants/Colors';

interface AdCommentsTypes {
  businessImage: any;
  businessName: any;
  comment: string;
}
const AdComments: React.FC<AdCommentsTypes> = ({
  businessImage,
  businessName,
  comment,
}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image source={businessImage} style={styles.businessImageStyle} />
      <View>
        <Text style={{...globalStyles.textHeader, color: Colors.BOLD_BLACK}}>
          {businessName}
        </Text>
        <Spacer size={8} />
        <Text style={globalStyles.textPrimary}>{comment}</Text>
        <Spacer size={8} />
        <Text style={{...globalStyles.textPrimary, color: Colors.PINK}}>
          Reply
        </Text>
      </View>
    </View>
  );
};

export default AdComments;

const styles = StyleSheet.create({
  businessImageStyle: {
    height: 40,
    width: 40,
    marginRight: 12,
    borderRadius: 40,
  },
});
