import { Text, View, Button, StyleSheet, TouchableOpacity, Platform, Image, TextInput, FlatList, SafeAreaView, ScrollView} from 'react-native'
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CustomButton, HomeNav, Nav} from '../../components/CustomComponents';
import {Colors, Font} from "../../constants"
import Clip from '../../../assets/images/clip.png';

const AddProductScreen = ({navigation}) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const category = [
    {category: 'Yellow'},
    {category: 'Red'},
  ];

  
  const [data, setData]=useState(category)
  const onSearch=(txt)=>{
    if(txt !== ''){
    let tempData=data.filter(item=>{
      return item.category.toLowerCase().indexOf(txt.toLowerCase()) > - 1;
    });
    setData(tempData);
  } else {
    setData(category)
  }
}



  const [selectedCategory, setSelectedCategory] = useState('If Applicable')
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <Nav  onPress={()=> navigation.goBack()}/>

     
        
        <View style={styles.footer}>
          <Text style={styles.username}>Upload your photo(s)/video</Text>
          <View style={{height:70, width:70, borderColor:Colors.DASH_GREY, borderWidth: 2, borderRadius: 1, justifyContent: 'center', alignItems: 'center', borderStyle: 'dotted',}}>
            <Image source={Clip} resizeMode="contain" />
          </View>
          <Text style={{
            marginTop: 6,
            color: Colors.SECONDARY_GREY,
            fontFamily: Font.AVENIR_MEDIUM,
            paddingBottom: 5,
            }}>Your image should be in JPEG or PNG format</Text>
            <Text style={styles.username}>Product/Service Caption</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              
              <TextInput 
                placeholder="Placeholder text"
                placeholderTextColor={Colors.DEFAULT_GREY}
                selectionColor={Colors.DEFAULT_GREY}
                style={styles.inputText}
                
              />
              
            </View>
          </View>
          <Text style={styles.username}>Price</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              
              <TextInput 
                placeholder="if applicable"
                placeholderTextColor={Colors.DEFAULT_GREY}
                selectionColor={Colors.DEFAULT_GREY}
                style={styles.inputText}
                
              />
              
            </View>
          </View>
          <Text style={styles.username}>Discount(optional)</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              
              <TextInput 
                placeholder="10%"
                placeholderTextColor={Colors.DEFAULT_GREY}
                selectionColor={Colors.DEFAULT_GREY}
                style={styles.inputText}
                
              />
              
            </View>
          </View>
          <Text style={{
            marginTop: 6,
            color: Colors.PINK,
            fontFamily: Font.AVENIR_MEDIUM,
            paddingBottom: 5,
            }}>click to add condition if any*</Text>
          <Text style={styles.username}>Business Type</Text>
          <TouchableOpacity style={styles.dropdownSelector} onPress={() => {setIsClicked(!isClicked)}}>
            <Text style={styles.inputText}>{ selectedCategory }</Text>
            <MaterialIcons 
                name={isClicked ? 'keyboard-arrow-right' : 'keyboard-arrow-down'}
                size={22}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 10}}
                onPress={() => {setIsClicked(!isClicked)}}
              />
          </TouchableOpacity>
          {isClicked ? <View style={styles.dropdownArea}>
            
              <FlatList data={data} renderItem={({item,index})=>{
                return(
                  <TouchableOpacity style={styles.categoryItem} onPress={()=>{setSelectedCategory(item.category); setIsClicked(false)}}>
                      <Text style={styles.categoryList}>{item.category}</Text>
                  </TouchableOpacity>
                )
              }}/>
        
          </View> : null}
          
            
          

          
          
          
        
         
        </View>
        
        
        

      </ScrollView>
      <View style={styles.buttonView}>
      <CustomButton text="Upload" onPress={()=>navigation.navigate('BusinessProfile')} type="PRIMARY"/>
      </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    
  },
  ratingTitle: {
    fontFamily: Font.AVENIR_BLACK,
    paddingTop: 24,
    paddingBottom: 16,
    color: Colors.BOLD_BLACK,
    fontSize: 16,
  },
  dropdownSelector: {
    width: '100%',
    height: 50,
    borderRadius:10,
    borderWidth: 1,
    borderColor: Colors.DEFAULT_GREY,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  buttonView: {
    marginBottom: 40,
  },
  
  dropdownArea: {
    width: '98%',
    
    height: 80,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
    elevation: 5,
    alignSelf: 'center',
  },
  searchInput:{
    width: '95%',
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.DEFAULT_GREY,
    alignSelf: 'center',
    marginTop: 10,
    paddingLeft: 10,
  },
  categoryItem: {
    width: '100%',
    height: 35,
    alignSelf: 'center',
    justifyContent: 'center',

  },
  categoryList: {
    paddingHorizontal: 15,
    fontFamily: Font.AVENIR_MEDIUM,

  },
  nav: {
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 48,
  },
  navText: {
    flex: 1,
    alignItems: 'center',
    fontFamily: Font.AVENIR_MEDIUM,
    fontSize: 14,
    lineHeight: 19
  },
  Notifications: {
    flexDirection: 'row',
    lineHeight: 19,
    justifyContent: 'flex-end',
  },
  
  header: {
    paddingTop: 18,
    alignItems: 'center',
    

  },
  footer: {
    flex: 10,
    backgroundColor: '#fff',
    paddingVertical: 10,
    marginTop: 5,
    
  },
  text_header: {
    color: Colors.BOLD_BLACK,
    fontSize: 24,
    fontFamily: Font.AVENIR_BOLD,
  },
  text_footer: {
    color: Colors.SECONDARY_GREY,
    fontSize: 17,
    paddingBottom: 16,
    fontFamily: Font.AVENIR_MEDIUM,
  },
  username: {
   marginTop: 16,
   color: Colors.SECONDARY_GREY,
   fontFamily: Font.AVENIR_MEDIUM,
   paddingBottom: 5,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
    marginHorizontal: 5,
    
  },
  forgotPassword: {
    fontFamily: Font.AVENIR_BLACK,
    fontWeight: 'bold',
    color: Colors.BOLD_BLACK,
    paddingTop: 16,
    paddingBottom: 40,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
  },
  icons: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
    
    
  },
  action_text:{
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: Font.AVENIR_MEDIUM,
  },
  inputText: {
    fontFamily: Font.AVENIR_MEDIUM,
  },
  
  button: {
    alignItem: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#cccccc',
    justifyContent: 'center',
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});

export default AddProductScreen;