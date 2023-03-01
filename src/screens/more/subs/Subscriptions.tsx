import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../../../components/styles';
import {NotificationBell} from '../../../components/svg/AppIcons';

interface SubscriptionsType {
  title: string;
}
const Subscriptions: React.FC<SubscriptionsType> = ({title}) => {
  const [activeBell, setActiveBell] = useState(false);
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
      <Image
        style={{width: 32, height: 32, borderRadius: 32, marginRight: 16}}
        source={require('../../../../assets/images/products1.png')}
      />
      <View style={{flex: 1}}>
        <Text style={globalStyles.regularDarkText} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <Pressable onPress={() => setActiveBell(!activeBell)}>
        <NotificationBell active={activeBell} />
      </Pressable>
    </View>
  );
};

export default Subscriptions;

const styles = StyleSheet.create({});
