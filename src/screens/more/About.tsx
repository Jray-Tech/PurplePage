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
import Colors from '../../constants/Colors';
import SearchFilter from '../../components/Headers/SearchFilter';
import {Spacer} from '../../components/CustomComponents';
import {globalStyles} from '../../components/styles';
import Header from '../../components/Headers/Header';
import ProfileButtons from '../../components/Profile/ProfileButtons';

const buttons = [
  {screen: '', title: 'Privacy'},
  {screen: '', title: 'Terms & Conditions'},
];

const AboutScreen = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{paddingTop: 24}}>
        <Header title="About" />
        <Spacer size={24} />
        {buttons.map((button, index) => (
          <View key={index.toString()}>
            <ProfileButtons screen={button.screen} title={button.title} />
            <Spacer size={24} />
          </View>
        ))}
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

export default AboutScreen;
