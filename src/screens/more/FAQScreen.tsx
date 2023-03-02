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
import SearchInput from '../../components/CustomInput/SearchInput';
import FAQList from './subs/FAQList';

const faqs = [
  {
    title: 'About david',
    questions: [
      {question: 'How do i eat food?'},
      {question: 'How do you not do?'},
      {question: 'How do i gave bompies?'},
      {question: 'How do i qdfj  bompies?'},
      {question: 'How do i plausible seem?'},
    ],
  },
  {
    title: 'About Negative people',
    questions: [
      {question: 'How do i eat food?'},
      {question: 'How do you not do?'},
      {question: 'How do i gave bompies?'},
      {question: 'How do i qdfj  bompies?'},
      {question: 'How do i plausible seem?'},
    ],
  },
  {
    title: 'What does micheal do',
    questions: [
      {question: 'How do i eat food?'},
      {question: 'How do you not do?'},
      {question: 'How do i gave bompies?'},
      {question: 'How do i qdfj  bompies?'},
      {question: 'How do i plausible seem?'},
    ],
  },
];
const FAQScreen = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{paddingTop: 24}}>
        <View
          style={{
            paddingHorizontal: 24,
          }}>
          <Header title="Frequently Asked Questions" />
          <Spacer size={16} />
          <SearchInput
            onTextChange={setSearchValue}
            value={searchValue}
            placeholder="Search using keywords"
          />
        </View>
        <Spacer size={32} />
        {faqs.map((faq, index) => (
          <>
            <FAQList
              questions={faq.questions}
              title={faq.title}
              key={index.toString()}
            />
            <Spacer size={32} />
          </>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal: 24,
    // marginTop: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default FAQScreen;
