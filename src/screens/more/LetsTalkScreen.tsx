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
import AppTextInput from '../../components/CustomInput/AppTextInput';

const LetsTalkScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{paddingTop: 24}}>
        <Header title="Let's Talk" />
        <Spacer size={24} />
        <Text
          style={{
            ...globalStyles.regularDarkText,
          }}>
          Name
        </Text>
        <Spacer size={8} />

        <AppTextInput
          onTextChange={setName}
          value={name}
          placeholder="Enter your full name"
        />
        <Spacer size={8} />
        <Text
          style={{
            ...globalStyles.regularDarkText,
          }}>
          Email
        </Text>
        <Spacer size={8} />

        <AppTextInput
          onTextChange={setEmail}
          value={email}
          placeholder="Enter your email address"
        />
        <Spacer size={8} />
        <Text
          style={{
            ...globalStyles.regularDarkText,
          }}>
          Message
        </Text>
        <Spacer size={8} />

        <AppTextInput
          onTextChange={setName}
          value={name}
          placeholder="What seems to be the problem"
        />
        <Spacer size={8} />
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

export default LetsTalkScreen;
