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
import {Spacer} from '../../components/CustomComponents';
import {globalStyles} from '../../components/styles';
import {SortIcon} from '../../components/svg/AppIcons';
import Header from '../../components/Headers/Header';
import BlogList from './subs/BlogList';
import Blog from './subs/Blog';

const bloglists = ['1', '2', '3'];
const BlogDetailsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Spacer size={36} />

        <Blog />
        <Spacer />
        <Text style={globalStyles.textHeader}>Related Posts</Text>
        <Spacer size={8} />
        {bloglists.map((blog, index) => (
          <BlogList key={index.toString()} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default BlogDetailsScreen;
