import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../components/styles';
import Colors from '../../../constants/Colors';
import {Spacer} from '../../../components/CustomComponents';
import {DownArrow} from '../../../components/svg/AppIcons';

interface FAQListTypes {
  title: string;
  questions: {question: string}[];
}
const FAQList: React.FC<FAQListTypes> = ({title, questions}) => {
  return (
    <View>
      <Text
        style={{
          ...globalStyles.textHeader,
          color: Colors.HEADER_PURPLE,
          marginHorizontal: 24,
          fontWeight: '600',
        }}>
        {title}
      </Text>
      <Spacer size={16} />
      {questions.map((question, index) => (
        <Question question={question.question} key={index.toString()} />
      ))}
    </View>
  );
};

export default FAQList;

interface QuestionTypes {
  question: string;
}
const Question: React.FC<QuestionTypes> = ({question}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderTopColor: Colors.SEARCH_GREY,
        borderBottomColor: Colors.SEARCH_GREY,
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          ...globalStyles.textHeader,
          color: Colors.LIGHT_MODE_GREY,
          fontWeight: '600',
        }}
        numberOfLines={1}>
        {question}
      </Text>
      <DownArrow />
    </View>
  );
};
