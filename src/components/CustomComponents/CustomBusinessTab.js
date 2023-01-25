import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Pressable, SafeAreaView } from 'react-native';
import React from 'react';
import PurpleCloset from '../../../assets/images/purplecloset.png';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Colors, Font} from "../../constants";
import {CustomButton, CustomBorder} from '.';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Marketplace1 from '../../../assets/images/Marketplace1.png';
import Marketplace2 from '../../../assets/images/Marketplace2.png';
import Marketplace3 from '../../../assets/images/Marketplace3.png';
import Edit from '../../../assets/images/edit.png';
import Comment from '../../../assets/images/Comment.png';
import Like from '../../../assets/images/Like.png';
import Bookmark from '../../../assets/images/Bookmark.png';
import Share from '../../../assets/images/Share.png';
import Insights from '../../../assets/images/Insights.png';
import Profile from '../../../assets/images/businessProfile.png';

const CustomBusinessTab = ({navigation}) => {
    const Tab = createMaterialTopTabNavigator();
    let squares = [];
    let numberOfsquare = 16;
    const Progress = ({ step, steps, height}) => {
        return (
            <View style={{ 
                height, 
                width: '40%',
                backgroundColor:Colors.PROGRESS_GREY,
                overflow: 'hidden',
                borderRadius: height,
                alignSelf:'center'
                }}>
                <View style={{ 
                height, 
                backgroundColor:Colors.RANK,
                width: steps,
                overflow: 'hidden',
                borderRadius: height,
                }}/>
            </View>)

    }
    for (let index = 0; index < numberOfsquare; index++) {
        squares.push(
            <View key={(index)}>
                <View style={{
                    width: 100,
                    height: 100,
                    marginVertical: 0.5,
                    marginHorizontal: 0.1,
                    backgroundColor: Colors.DEFAULT_PURPLE,
                    opacity: 1,
                }}>
                    
                </View>
            </View>
        )
    }
    const About = () => {
        return(
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: Colors.DEFAULT_WHITE,
                    
                }}
            >
                <View style={styles.headerContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    
                    <Text style={styles.headerText}>Bio</Text>
                    <Pressable onPress={() => ('')}>
                    <Image source={Edit} style={{paddingHorizontal: 20}} resizeMode="contain" />
                    </Pressable>
                    </View>
                    <Text style={styles.bio}>Lorem ipsum dolor sit amet consectetur. Ligula gravida bibendum et a mi orci. 
                    Et adipiscing eget lorem aliquet maecenas. Dui sit est scelerisque erat 
                    odio accumsan congue praesent. Felis porttitor eget.</Text>
                </View>
                <CustomBorder />
                <View style={styles.headerContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={styles.headerText}>Contact Details</Text>
                    <Pressable onPress={() => ('')}>
                    <Image source={Edit} style={{paddingHorizontal: 20}} resizeMode="contain" />
                    </Pressable>
                    </View>
                    <View style={styles.contactDetails}>
                        <Feather
                            name={'mail'}
                            size={16}
                            color={Colors.DEFAULT_PURPLE}
                            style={{marginRight: 2}}
                        />
                        <Text style={styles.bio}>info@charlies.bagel.com</Text>
                    </View>
                    <View style={styles.contactDetails}>
                        <Feather
                            name={'phone'}
                            size={16}
                            color={Colors.DEFAULT_PURPLE}
                            style={{marginRight: 2}}
                        />
                        <Text style={styles.bio}>+ 234 812 345 6789</Text>
                    </View>
                    <View style={styles.contactDetails}>
                        <EvilIcon
                            name={'location'}
                            size={16}
                            color={Colors.DEFAULT_PURPLE}
                            style={{marginRight: 2}}
                        />
                        <Text style={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut</Text>
                    </View>
                    
                </View>
                <CustomBorder />
            
                <View style={styles.headerContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={styles.headerText}>Marketplace</Text>
                    <Pressable onPress={() => ('')}>
                    <Image source={Edit} style={{paddingHorizontal: 20}} resizeMode="contain" />
                    </Pressable>
                    </View>
                    <Text style={styles.bio}>Click on any marketplace below to shop with us</Text>
                    <View style={{paddingBottom: 20}}>
                    <View style={styles.contactDetails}>
                        <TouchableOpacity onPress={()=>navigation.navigate('NotifyScreen')}>
                            <Image source={Marketplace1}  resizeMode="contain" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('NotifyScreen')}>
                            <Image source={Marketplace2} style={[styles.bio]} resizeMode="contain" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('NotifyScreen')}>
                            <Image source={Marketplace3} style={[styles.bio]} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
            
            </ScrollView>
        )
    }

    const Product = ({navigation}) => {
        return(
            <SafeAreaView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    width: '100%',
                    height: '100%',
                }}
            >
                <TouchableOpacity onPress={()=>navigation.navigate('BusinessProductScreen')}>
                <View 
                    style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: Colors.DEFAULT_WHITE,
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    paddingTop: 15,
                    justifyContent: 'space-between',
                }}
                >
                
                    {squares}
                
                </View>
                </TouchableOpacity>
            </ScrollView>
            <Pressable onPress={()=>navigation.navigate('AddProductScreen')}>
            <View style={{ position: 'absolute', alignItems: 'flex-end', right: 20, bottom: 20}}>
                    <View style={{ 
                        alignItems: 'flex-end',
                        justifyContent: 'center', 
                        backgroundColor: Colors.PINK,
                        height: 32,
                        width: 32,
                        borderRadius: 32,
                        elevation: 5,
                    }}>

                    <Feather
                name={'plus'}
                size={25}
                color={Colors.DEFAULT_WHITE}
                style={{alignSelf: 'center'}}
            />
                </View>
                </View>
                </Pressable>
            </SafeAreaView>
            
        )
    }

    const Blog = ({navigation}) => {
        return(
            <SafeAreaView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: Colors.DEFAULT_WHITE,
                    
                }}
            >
                <View style={styles.headerContainer}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{paddingLeft: 20}}>
                        <Image source={Profile} style={{ marginTop: 20}} resizeMode="contain" />
                        </View>
                        <View style={{flex:1, paddingTop: 20}}>
                        <Pressable onPress={() => navigation.navigate('PostScreen')}>
                            <Text style={styles.headerBlogText}>Lorem ipsum dolor sit amet consectetur. Cursus quisque.</Text>
                        </Pressable>
                        </View>
                        
                        <Text style={styles.pubDate}>5h</Text>
                    </View>
                    <View style={{paddingLeft: 70,
                        paddingBottom: 10,
                        paddingRight: 20,}}>
                    <Text style={{
                        fontFamily: Font.AVENIR_MEDIUM,
                        fontSize: 14,
                        
                        }}>
                            Lorem ipsum dolor sit amet consectetur Mi commodo enim.Lorem ipsum enimenim.Lorem Lorem ipsumdolo...</Text>
                        <View style={{flexDirection:"row", justifyContent:'space-between', paddingTop: 13.33}}>
                        <View style={{flexDirection:"row"}}>
                        <Image source={Comment} resizeMode="contain" />
                        <Text style={{
                        fontFamily: Font.AVENIR_MEDIUM,
                        fontSize: 14,
                        paddingLeft: 10,
                        }}>12</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                        <Image source={Like} resizeMode="contain" />
                        <Text style={{
                        fontFamily: Font.AVENIR_MEDIUM,
                        fontSize: 14,
                        paddingLeft: 10,
                        }}>24</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                        <Image source={Bookmark} resizeMode="contain" />
                        <Text style={{
                        fontFamily: Font.AVENIR_MEDIUM,
                        fontSize: 14,
                        paddingLeft: 10,
                        }}>24</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                        <Image source={Share} resizeMode="contain" />
                        
                        </View>
                        <View style={{flexDirection:"row"}}>
                        <Pressable onPress={() => navigation.navigate('BlogInsightScreen')}>
                        <Image source={Insights} resizeMode="contain" />
                        </Pressable>
                        
                        </View>
                        </View>
                    </View>
                </View>
                <CustomBorder />
                <View style={styles.headerContainer}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{paddingLeft: 20}}>
                        <Image source={Profile} style={{ marginTop: 20}} resizeMode="contain" />
                        </View>
                        <View style={{flex:1, paddingTop: 20}}>
                        
                        <Text style={styles.headerBlogText}>Lorem ipsum dolor sit amet consectetur. Cursus quisque.</Text>
                        </View>
                        
                        <Text style={styles.pubDate}>5h</Text>
                    </View>
                    <View style={{paddingLeft: 70,
                        paddingBottom: 10,
                        paddingRight: 20,}}>
                    <Text style={{
                        fontFamily: Font.AVENIR_MEDIUM,
                        fontSize: 14,
                        
                        }}>
                            Lorem ipsum dolor sit amet consectetur Mi commodo enim.Lorem ipsum enimenim.Lorem Lorem ipsumdolo...</Text>
                        <View style={{flexDirection:"row", justifyContent:'space-between', paddingTop: 13.33}}>
                        <View style={{flexDirection:"row"}}>
                        <Image source={Comment} resizeMode="contain" />
                        <Text style={{
                        fontFamily: Font.AVENIR_MEDIUM,
                        fontSize: 14,
                        paddingLeft: 10,
                        }}>12</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                        <Image source={Like} resizeMode="contain" />
                        <Text style={{
                        fontFamily: Font.AVENIR_MEDIUM,
                        fontSize: 14,
                        paddingLeft: 10,
                        }}>24</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                        <Image source={Bookmark} resizeMode="contain" />
                        <Text style={{
                        fontFamily: Font.AVENIR_MEDIUM,
                        fontSize: 14,
                        paddingLeft: 10,
                        }}>24</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                        <Image source={Share} resizeMode="contain" />
                        
                        </View>
                        <View style={{flexDirection:"row"}}>
                        <Image source={Insights} resizeMode="contain" />
                        
                        </View>
                        </View>
                    </View>
                </View>
                <CustomBorder />
                <View style={styles.headerContainer}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{paddingLeft: 20}}>
                        <Image source={Profile} style={{ marginTop: 20}} resizeMode="contain" />
                        </View>
                        <View style={{flex:1, paddingTop: 20}}>
                        
                        <Text style={styles.headerBlogText}>Lorem ipsum dolor sit amet consectetur. Cursus quisque.</Text>
                        </View>
                        
                        <Text style={styles.pubDate}>5h</Text>
                    </View>
                    <View style={{paddingLeft: 70,
                        paddingBottom: 10,
                        paddingRight: 20,}}>
                    <Text style={{
                        fontFamily: Font.AVENIR_MEDIUM,
                        fontSize: 14,
                        
                        }}>
                            Lorem ipsum dolor sit amet consectetur Mi commodo enim.Lorem ipsum enimenim.Lorem Lorem ipsumdolo...</Text>
                        <View style={{flexDirection:"row", justifyContent:'space-between', paddingTop: 13.33}}>
                        <View style={{flexDirection:"row"}}>
                        <Image source={Comment} resizeMode="contain" />
                        <Text style={{
                        fontFamily: Font.AVENIR_MEDIUM,
                        fontSize: 14,
                        paddingLeft: 10,
                        }}>12</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                        <Image source={Like} resizeMode="contain" />
                        <Text style={{
                        fontFamily: Font.AVENIR_MEDIUM,
                        fontSize: 14,
                        paddingLeft: 10,
                        }}>24</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                        <Image source={Bookmark} resizeMode="contain" />
                        <Text style={{
                        fontFamily: Font.AVENIR_MEDIUM,
                        fontSize: 14,
                        paddingLeft: 10,
                        }}>24</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                        <Image source={Share} resizeMode="contain" />
                        
                        </View>
                        <View style={{flexDirection:"row"}}>
                        <Image source={Insights} resizeMode="contain" />
                        
                        </View>
                        </View>
                    </View>
                </View>
                <CustomBorder />
            
                
            
            </ScrollView>
                <View style={{ position: 'absolute', alignItems: 'flex-end', right: 20, bottom: 20}}>
                    <View style={{ 
                        alignItems: 'flex-end',
                        justifyContent: 'center', 
                        backgroundColor: Colors.PINK,
                        height: 32,
                        width: 32,
                        borderRadius: 32,
                        elevation: 5,
                    }}>

                    <Feather
                name={'plus'}
                size={25}
                color={Colors.DEFAULT_WHITE}
                style={{alignSelf: 'center'}}
            />
                </View>
                </View>
            </SafeAreaView>
                
        )
    }

    const Reviews = ({navigation}) => {
        return(
            <ScrollView 
                showsVerticalScrollIndicator={false}
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: Colors.DEFAULT_WHITE,
                    
                }}
            >
                <Text style={{
                    alignSelf: 'center',
                    marginTop: 20,
                    fontSize: 24,
                    fontFamily: Font.AVENIR_MEDIUM,
                    color:Colors.BOLD_BLACK,
                }}>
                    4.0<Text style={{
                    fontSize: 16,
                }}
                    >/5</Text>
                </Text>
            <View style={styles.rank}>
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
            </View>
            <Text style={{
                alignSelf:'center',
                fontSize: 18,
                fontFamily: Font.AVENIR_REGULAR,
                paddingBottom: 25,

            }}>75 verified ratings</Text>
            <View style={{flexDirection:'row', alignSelf: 'center', paddingBottom: 5}}>
                <Text style={{
                    color:Colors.BOLD_BLACK,
                    paddingHorizontal: 5,
                    fontFamily: Font.AVENIR_MEDIUM,
                    fontSize:15,
                }}>5</Text>
                <FontAwesome
                name={'star'}
                size={16}
                color={Colors.BOLD_BLACK}
                style={{marginRight: 5}}
            />
            <Progress step={1} steps={'80%'} height={8} />
            <Text style={{
                    color:Colors.BOLD_BLACK,
                    paddingHorizontal: 5,
                    fontFamily: Font.AVENIR_MEDIUM,
                    fontSize:15,
                }}>45</Text>
            </View>
            <View style={{flexDirection:'row', alignSelf: 'center', paddingBottom: 5}}>
                <Text style={{
                    color:Colors.BOLD_BLACK,
                    paddingHorizontal: 5,
                    fontFamily: Font.AVENIR_MEDIUM,
                    fontSize:15,
                }}>4</Text>
                <FontAwesome
                name={'star'}
                size={16}
                color={Colors.BOLD_BLACK}
                style={{marginRight: 5}}
            />
            <Progress step={1} steps={'25%'} height={8} />
            <Text style={{
                    color:Colors.BOLD_BLACK,
                    paddingHorizontal: 5,
                    fontFamily: Font.AVENIR_MEDIUM,
                    fontSize:15,
                }}>12</Text>
            </View>
            <View style={{flexDirection:'row', alignSelf: 'center', paddingBottom: 5}}>
                <Text style={{
                    color:Colors.BOLD_BLACK,
                    paddingHorizontal: 5,
                    fontFamily: Font.AVENIR_MEDIUM,
                    fontSize:15,
                }}>3</Text>
                <FontAwesome
                name={'star'}
                size={16}
                color={Colors.BOLD_BLACK}
                style={{marginRight: 5}}
            />
            <Progress step={1} steps={'27%'} height={8} />
            <Text style={{
                    color:Colors.BOLD_BLACK,
                    paddingHorizontal: 5,
                    fontFamily: Font.AVENIR_MEDIUM,
                    fontSize:15,
                }}>13</Text>
            </View>
            <View style={{flexDirection:'row', alignSelf: 'center', paddingBottom: 5}}>
                <Text style={{
                    color:Colors.BOLD_BLACK,
                    paddingHorizontal: 5,
                    fontFamily: Font.AVENIR_MEDIUM,
                    fontSize:15,
                }}>2</Text>
                <FontAwesome
                name={'star'}
                size={16}
                color={Colors.BOLD_BLACK}
                style={{marginRight: 5}}
            />
            <Progress step={1} steps={'5%'} height={8} />
            <Text style={{
                    color:Colors.BOLD_BLACK,
                    paddingHorizontal: 5,
                    fontFamily: Font.AVENIR_MEDIUM,
                    fontSize:15,
                }}>1</Text>
            </View>
            <View style={{flexDirection:'row', alignSelf: 'center'}}>
                <Text style={{
                    color:Colors.BOLD_BLACK,
                    paddingHorizontal: 5,
                    fontFamily: Font.AVENIR_MEDIUM,
                    fontSize:15,
                }}>1</Text>
                <FontAwesome
                name={'star'}
                size={16}
                color={Colors.BOLD_BLACK}
                style={{marginRight: 5}}
            />
            <Progress step={1} steps={'8%'} height={8} />
            <Text style={{
                    color:Colors.BOLD_BLACK,
                    paddingHorizontal: 5,
                    fontFamily: Font.AVENIR_MEDIUM,
                    fontSize:15,
                }}>3</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 40,}}>
            <View style={styles.reviewRank}>
            <FontAwesome
                name={'star'}
                size={18}
                color={Colors.RANK}
                style={{marginRight: 2}}
            />
            <FontAwesome
                name={'star'}
                size={18}
                color={Colors.RANK}
                style={{marginRight: 2}}
            />
            <FontAwesome
                name={'star'}
                size={18}
                color={Colors.RANK}
                style={{marginRight: 2}}
            />
            <FontAwesome
                name={'star'}
                size={18}
                color={Colors.RANK}
                style={{marginRight: 2}}
            />
            <FontAwesome
                name={'star-o'}
                size={18}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 2}}
            />
            </View>
                <Text style={{ fontSize: 20, fontFamily:Font.AVENIR_REGULAR, color:Colors.BOLD_BLACK}}>Purple T</Text>
                <Text style={{ fontSize: 16, fontFamily:Font.AVENIR_REGULAR, color:Colors.DEFAULT_GREY, paddingHorizontal:20,}}>Mon, Dec 19, 2022</Text>
            </View>
            <Text style={{paddingHorizontal:20, paddingVertical: 10, fontFamily:Font.AVENIR_REGULAR, lineHeight: 20}}> Dui sit est scelerisque erat odio accumsan congue praesent. Felis porttitor eget.</Text>
            <Text style={{ fontSize: 14, fontFamily:Font.AVENIR_MEDIUM, color:Colors.PINK, paddingHorizontal:20, paddingBottom: 16}}>Reply</Text>
            <CustomBorder />
            <View style={{ flexDirection: 'row', paddingTop: 40,}}>
            <View style={styles.reviewRank}>
            <FontAwesome
                name={'star'}
                size={18}
                color={Colors.RANK}
                style={{marginRight: 2}}
            />
            <FontAwesome
                name={'star'}
                size={18}
                color={Colors.RANK}
                style={{marginRight: 2}}
            />
            <FontAwesome
                name={'star'}
                size={18}
                color={Colors.RANK}
                style={{marginRight: 2}}
            />
            <FontAwesome
                name={'star'}
                size={18}
                color={Colors.RANK}
                style={{marginRight: 2}}
            />
            <FontAwesome
                name={'star-o'}
                size={18}
                color={Colors.DEFAULT_GREY}
                style={{marginRight: 2}}
            />
            </View>
                <Text style={{ fontSize: 20, fontFamily:Font.AVENIR_REGULAR, color:Colors.BOLD_BLACK}}>Purple T</Text>
                <Text style={{ fontSize: 16, fontFamily:Font.AVENIR_REGULAR, color:Colors.DEFAULT_GREY, paddingHorizontal:20,}}>Mon, Dec 19, 2022</Text>
                
            </View>
            <Text style={{paddingHorizontal:20, paddingVertical: 10, fontFamily:Font.AVENIR_REGULAR, lineHeight: 20}}> Dui sit est scelerisque erat odio accumsan congue praesent. Felis porttitor eget.</Text>
            <Text style={{ fontSize: 14, fontFamily:Font.AVENIR_MEDIUM, color:Colors.PINK, paddingHorizontal:20, paddingBottom: 16}}>Reply</Text>
            <CustomBorder />
                <View style={styles.buttonView}>
        <CustomButton text="Rate & Review" onPress={()=>navigation.navigate('ReviewScreen')} type="PRIMARY"/>
        </View>
            </ScrollView>
        )
    }
  return (
    <Tab.Navigator
        screenOptions={({route}) => ({
            labelStyle: {
            textTransform: 'none',
            
          },
          
          
            tabBarIndicatorStyle: {
            backgroundColor: Colors.PINK,
            height: 5,
            borderRadius: 5,
            justifyContent: 'space-evenly',
            
        }
        })}
        tabBarOptions={{
        tabStyle: {
            width: 'auto',
            paddingHorizontal: 20,
        },
    }}
    >
        
        <Tab.Screen 
    name="About Us" 
    component={About} 
    options={{ 
        tabBarLabel: ({ focused, color }) => (
        <Text style={{ color: focused ? Colors.PINK : Colors.DEFAULT_GREY, textTransform:'capitalize', fontFamily: Font.AVENIR_MEDIUM, }}>
            About Us
        </Text>
        ),
    }}
/>
        <Tab.Screen name="Product & Service" component={Product} 
        options={{
            tabBarLabel: ({ focused, color }) => (
                <Text style={{ color: focused ? Colors.PINK : Colors.DEFAULT_GREY, textTransform:'capitalize', fontFamily: Font.AVENIR_MEDIUM,}}>
           Product & Service
        </Text>
            )
        }}
        />
        <Tab.Screen name="Blog" component={Blog} 
            options={{
            tabBarLabel: ({ focused, color }) => (
                <Text style={{ color: focused ? Colors.PINK : Colors.DEFAULT_GREY, textTransform:'capitalize', fontFamily: Font.AVENIR_MEDIUM, }}>
           Blog
        </Text>
            )
        }}
        />
        <Tab.Screen name="Reviews" component={Reviews} 
            options={{
            tabBarLabel: ({ focused, color }) => (
                <Text style={{ color: focused ? Colors.PINK : Colors.DEFAULT_GREY, textTransform:'capitalize', fontFamily: Font.AVENIR_MEDIUM,}}>
           Reviews
        </Text>
            )
        }}
        />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
    
  },
  rank: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: 8,
  },
  buttonView: {
    alignSelf:'center',
    width: 250,
    paddingTop: 20,
  },
  
  reviewRank: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  pubDate: {
    paddingRight: 20,
    paddingTop: 20
  },
  
  headerText: {
    color: Colors.HEADER_BLACK,
    fontSize: 18,
    lineHeight: 20,
    fontFamily: Font.AVENIR_BLACK,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  headerBlogText: {
    color: Colors.HEADER_BLACK,
    fontSize: 18,
    lineHeight: 20,
    fontFamily: Font.AVENIR_BLACK,
    paddingHorizontal: 20,
  },
  bio: {
    fontFamily: Font.AVENIR_MEDIUM,
    fontSize: 14,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  contactDetails: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  }
  
});

export default CustomBusinessTab;