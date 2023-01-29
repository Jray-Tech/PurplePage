import { Text, View, Button, StyleSheet, TouchableOpacity, Platform, Image, TextInput, FlatList, SafeAreaView, ScrollView} from 'react-native'
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CustomButton, HomeNav} from '../../components/CustomComponents';
import {Colors, Font} from "../../constants"

const FilterScreen = ({navigation}) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isLocationClicked, setIsLocationClicked] = useState(false);
  const category = [
    {category: 'Food & Drink'},
    {category: 'Fashion'},
    {category: 'Electronics'},
    {category: 'Home & Furniture'},
  ];

  const location = [
    {location: 'Lagos'},
    {location: 'Abuja'},
  ];
  const [data, setData]=useState(category)
  const [myData, setMyData]=useState(location)
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

const onLocationSearch=(txt)=>{
    if(txt !== ''){
    let tempData=myData.filter(item=>{
      return item.location.toLowerCase().indexOf(txt.toLowerCase()) > - 1;
    });
    setMyData(tempData);
  } else {
    setMyData(location)
  }
}

  const [selectedCategory, setSelectedCategory] = useState('Food & Drinks')
  const [selectedLocation, setSelectedLocation] = useState('Lagos')
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <HomeNav text="Filter Results" onPress={()=> navigation.goBack()}/>

     <View style={styles.Notifications}>
        <Text style={styles.ClearNotification}>Clear all</Text>
    </View>
        
        <View style={styles.footer}>
          <Text style={styles.username}>Category</Text>
          <TouchableOpacity style={styles.dropdownSelector} onPress={() => {setIsClicked(!isClicked), setIsLocationClicked(false)}}>
            <Text style={styles.inputText}>{ selectedCategory }</Text>
            <MaterialIcons 
                name={isClicked ? 'keyboard-arrow-right' : 'keyboard-arrow-down'}
                size={22}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 10}}
                onPress={() => {setIsClicked(!isClicked), setIsLocationClicked(false)}}
              />
          </TouchableOpacity>
          {isClicked ? <View style={styles.dropdownArea}>
            <TextInput 
                
                placeholder="Search Category"
                placeholderTextColor={Colors.DEFAULT_GREY}
                selectionColor={Colors.DEFAULT_GREY}
                style={styles.searchInput}
                onChangeText={(txt) => {
                  onSearch(txt)
                }}
              />
              <FlatList data={data} renderItem={({item,index})=>{
                return(
                  <TouchableOpacity style={styles.categoryItem} onPress={()=>{setSelectedCategory(item.category); setIsClicked(false)}}>
                      <Text style={styles.categoryList}>{item.category}</Text>
                  </TouchableOpacity>
                )
              }}/>
          </View> : null}
          <Text style={styles.username}>Location</Text>
          <TouchableOpacity style={styles.dropdownSelector} onPress={() => {setIsLocationClicked(!isLocationClicked), setIsClicked(false)}}>
            <Text style={styles.inputText}>{ selectedLocation }</Text>
            <MaterialIcons 
                name={isLocationClicked ? 'keyboard-arrow-right' : 'keyboard-arrow-down'}
                size={22}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 10}}
                onPress={() => {setIsLocationClicked(!isLocationClicked), setIsClicked(false)}}
              />
          </TouchableOpacity>
          {isLocationClicked ? <View style={styles.dropdownArea}>
            <TextInput 
                
                placeholder="Select your desired location"
                placeholderTextColor={Colors.DEFAULT_GREY}
                selectionColor={Colors.DEFAULT_GREY}
                style={styles.searchInput}
                onChangeText={(txt) => {
                  onLocationSearch(txt)
                }}
              />
              <FlatList data={myData} renderItem={({item,index})=>{
                return(
                  <TouchableOpacity style={styles.categoryItem} onPress={()=>{setSelectedLocation(item.location); setIsLocationClicked(false)}}>
                      <Text style={styles.categoryList}>{item.location}</Text>
                  </TouchableOpacity>
                )
              }}/>
          </View> : null} 

          
          <View style={styles.ratingContainer}>
              <Text style={styles.ratingTitle}>Rating</Text>
              <View style={styles.ratingbody}>
                <Feather
                name={'circle'}
                size={16}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 15}}
              />
                <FontAwesome
                name={'star'}
                size={16}
                color={Colors.RANK}
                style={{marginRight: 2}}
              />
              <FontAwesome
                name={'star'}
                size={16}
                color={Colors.RANK}
                style={{marginRight: 2}}
              />
              <FontAwesome
                name={'star'}
                size={16}
                color={Colors.RANK}
                style={{marginRight: 2}}
              />
              <FontAwesome
                name={'star'}
                size={16}
                color={Colors.RANK}
                style={{marginRight: 2}}
              />
              <FontAwesome
                name={'star-o'}
                size={16}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 2}}
              />
              <Text style={styles.ratingText}>& Above</Text>
              </View>

              <View style={styles.ratingbody}>
                <Feather
                name={'circle'}
                size={16}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 15}}
              />
                <FontAwesome
                name={'star'}
                size={16}
                color={Colors.RANK}
                style={{marginRight: 2}}
              />
              <FontAwesome
                name={'star'}
                size={16}
                color={Colors.RANK}
                style={{marginRight: 2}}
              />
              <FontAwesome
                name={'star'}
                size={16}
                color={Colors.RANK}
                style={{marginRight: 2}}
              />
              <FontAwesome
                name={'star-o'}
                size={16}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 2}}
              />
              <FontAwesome
                name={'star-o'}
                size={16}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 2}}
              />
              <Text style={styles.ratingText}>& Above</Text>
              </View>

              <View style={styles.ratingbody}>
                <Feather
                name={'circle'}
                size={16}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 15}}
              />
                <FontAwesome
                name={'star'}
                size={16}
                color={Colors.RANK}
                style={{marginRight: 2}}
              />
              <FontAwesome
                name={'star'}
                size={16}
                color={Colors.RANK}
                style={{marginRight: 2}}
              />
              <FontAwesome
                name={'star-o'}
                size={16}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 2}}
              />
              <FontAwesome
                name={'star-o'}
                size={16}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 2}}
              />
              <FontAwesome
                name={'star-o'}
                size={16}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 2}}
              />
              <Text style={styles.ratingText}>& Above</Text>
              </View>

              <View style={styles.ratingbody}>
                <Feather
                name={'circle'}
                size={16}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 15}}
              />
                <FontAwesome
                name={'star'}
                size={16}
                color={Colors.RANK}
                style={{marginRight: 2}}
              />
              <FontAwesome
                name={'star-o'}
                size={16}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 2}}
              />
              <FontAwesome
                name={'star-o'}
                size={16}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 2}}
              />
              <FontAwesome
                name={'star-o'}
                size={16}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 2}}
              />
              <FontAwesome
                name={'star-o'}
                size={16}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 2}}
              />
              <Text style={styles.ratingText}>& Above</Text>
              </View>

              

          </View>
          
        
         
        </View>
        
        
        

      </ScrollView>
      <View style={styles.buttonView}>
      <CustomButton text="Save" onPress={()=>navigation.navigate('SearchResultScreen')} type="PRIMARY"/>
      </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
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
    paddingHorizontal: 15,
    marginVertical: 5,
  },
  buttonView: {
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  ratingbody: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 12,
  },
  ratingText: {
    marginHorizontal: 5,
    fontFamily: Font.AVENIR_MEDIUM,
    
  },
  dropdownArea: {
    width: '98%',
    
    height: 200,
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
    height: 50,
    borderBottomWidth: .2,
    borderBottomColor: Colors.DEFAULT_GREY,
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
    paddingHorizontal: 20,
  },
  ClearNotification: {
    fontFamily: Font.AVENIR_BLACK,
    color: Colors.DEFAULT_PURPLE,
    paddingVertical: 10,
  },
  header: {
    paddingTop: 18,
    alignItems: 'center',
    paddingHorizontal: 20,

  },
  footer: {
    flex: 10,
    backgroundColor: '#fff',
    paddingVertical: 10,
    marginTop: 5,
    paddingHorizontal: 20,
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
   marginTop: 5,
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

export default FilterScreen;