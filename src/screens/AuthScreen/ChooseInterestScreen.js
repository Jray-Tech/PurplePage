import { View, Text, StyleSheet, Pressable } from 'react-native'
import React , {useState} from 'react'
import {Colors, Font} from "../../constants";
import * as Animateble from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CustomButton } from '../../components/CustomComponents';

const ChooseInterestScreen = ({navigation}) => {

    const [selectedInterests, setSelectedInterests] = useState({
        Fashion: false,
        Travel: false,
        Sport: false,
        'Branding & Marketing': false,
        Finance: false,
        'Food & Drinks': false,
        Agriculture: false,
        Manufacturing: false,
        Entertainment: false,
        Technology: false,
        Pharmaceuticals: false,
        Logistics: false,
        Education: false,
        'Real Estate': false,
        Hospitality: false,
        'Electronics & Gadget': false,
    });
    const handleInterestPress = (interest) => {
        setSelectedInterests({
            ...selectedInterests,
            [interest]: !selectedInterests[interest]
        });
    }

    const isButtonDisabled = () => {
        let count = 0;
        Object.values(selectedInterests).forEach(val => {
            if(val === true) count++;
        });
        return count < 3;
    }

  return (
    <View style={styles.container}>
      
        <Text style={styles.title}>What are you interested in?</Text>
        <Text style={styles.text}>Choose 3 or more to continue</Text>
      
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', flexDirection: "row"}}>
    <Pressable onPress={() => handleInterestPress('Fashion')}>
      <View style={[styles.chooseContainer, {backgroundColor: selectedInterests.Fashion ? Colors.DEFAULT_WHITE : Colors.DEFAULT_GREY, borderColor:selectedInterests.Fashion ? Colors.PINK : Colors.DEFAULT_GREY, borderWidth: 1,}]}>
        <Text style={[styles.chooseCategory, {color: selectedInterests.Fashion ? Colors.PINK : Colors.BOLD_BLACK}]}>Fashion</Text>
        <AntDesign 
                name={selectedInterests.Fashion ? 'check' : 'plus'}
                size={22}
                color={selectedInterests.Fashion ? Colors.PINK :Colors.BOLD_BLACK }
                onPress={() => handleInterestPress('Fashion')}
              />
      </View>
      </Pressable>
      <Pressable onPress={() => handleInterestPress('Travel')}>
      <View style={[styles.chooseContainer, {backgroundColor: selectedInterests.Travel ? Colors.DEFAULT_WHITE : Colors.DEFAULT_GREY, borderColor:selectedInterests.Travel ? Colors.PINK : Colors.DEFAULT_GREY, borderWidth: 1,}]}>
        <Text style={[styles.chooseCategory, {color: selectedInterests.Travel ? Colors.PINK : Colors.BOLD_BLACK}]}>Travel</Text>
        <AntDesign 
                name={selectedInterests.Travel ? 'check' : 'plus'}
                size={22}
                color={selectedInterests.Travel ? Colors.PINK :Colors.BOLD_BLACK }
                onPress={() => handleInterestPress('Travel')}
              />
      </View>
      </Pressable>
      <Pressable onPress={() => handleInterestPress('Sport')}>
      <View style={[styles.chooseContainer, {backgroundColor: selectedInterests.Sport ? Colors.DEFAULT_WHITE : Colors.DEFAULT_GREY, borderColor:selectedInterests.Sport ? Colors.PINK : Colors.DEFAULT_GREY, borderWidth: 1,}]}>
        <Text style={[styles.chooseCategory, {color: selectedInterests.Sport ? Colors.PINK : Colors.BOLD_BLACK}]}>Sport</Text>
        <AntDesign 
                name={selectedInterests.Sport ? 'check' : 'plus'}
                size={22}
                color={selectedInterests.Sport ? Colors.PINK :Colors.BOLD_BLACK }
                onPress={() => handleInterestPress('Sport')}
              />
      </View>
      </Pressable>

        <Pressable onPress={() => handleInterestPress('Branding & Marketing')}>
        <View style={[styles.chooseContainer, {backgroundColor: selectedInterests['Branding & Marketing'] ? Colors.DEFAULT_WHITE : Colors.DEFAULT_GREY, borderColor:selectedInterests['Branding & Marketing'] ? Colors.PINK : Colors.DEFAULT_GREY, borderWidth: 1,}]}>
            <Text style={[styles.chooseCategory, {color: selectedInterests['Branding & Marketing'] ? Colors.PINK : Colors.BOLD_BLACK}]}>Branding & Marketing</Text>
            <AntDesign 
                name={selectedInterests['Branding & Marketing'] ? 'check' : 'plus'}
                size={22}
                color={selectedInterests['Branding & Marketing'] ? Colors.PINK :Colors.BOLD_BLACK }
                onPress={() => handleInterestPress('Branding & Marketing')}
            />
        </View>
        </Pressable>
    <Pressable onPress={() => handleInterestPress('Finance')}>
      <View style={[styles.chooseContainer, {backgroundColor: selectedInterests.Finance ? Colors.DEFAULT_WHITE : Colors.DEFAULT_GREY, borderColor:selectedInterests.Finance ? Colors.PINK : Colors.DEFAULT_GREY, borderWidth: 1,}]}>
        <Text style={[styles.chooseCategory, {color: selectedInterests.Finance ? Colors.PINK : Colors.BOLD_BLACK}]}>Finance</Text>
        <AntDesign 
                name={selectedInterests.Finance ? 'check' : 'plus'}
                size={22}
                color={selectedInterests.Finance ? Colors.PINK :Colors.BOLD_BLACK }
                onPress={() => handleInterestPress('Finance')}
              />
      </View>
      </Pressable>

      <Pressable onPress={() => handleInterestPress('Food & Drinks')}>
        <View style={[styles.chooseContainer, {backgroundColor: selectedInterests['Food & Drinks'] ? Colors.DEFAULT_WHITE : Colors.DEFAULT_GREY, borderColor:selectedInterests['Food & Drinks'] ? Colors.PINK : Colors.DEFAULT_GREY, borderWidth: 1,}]}>
            <Text style={[styles.chooseCategory, {color: selectedInterests['Food & Drinks'] ? Colors.PINK : Colors.BOLD_BLACK}]}>Food & Drinks</Text>
            <AntDesign 
                name={selectedInterests['Food & Drinks'] ? 'check' : 'plus'}
                size={22}
                color={selectedInterests['Food & Drinks'] ? Colors.PINK :Colors.BOLD_BLACK }
                onPress={() => handleInterestPress('Food & Drinks')}
            />
        </View>
        </Pressable>

        <Pressable onPress={() => handleInterestPress('Agriculture')}>
            <View style={[styles.chooseContainer, {backgroundColor: selectedInterests.Agriculture ? Colors.DEFAULT_WHITE : Colors.DEFAULT_GREY, borderColor:selectedInterests.Agriculture ? Colors.PINK : Colors.DEFAULT_GREY, borderWidth: 1,}]}>
                <Text style={[styles.chooseCategory, {color: selectedInterests.Agriculture ? Colors.PINK : Colors.BOLD_BLACK}]}>Agriculture</Text>
                    <AntDesign 
                        name={selectedInterests.Agriculture ? 'check' : 'plus'}
                        size={22}
                        color={selectedInterests.Agriculture ? Colors.PINK :Colors.BOLD_BLACK }
                        onPress={() => handleInterestPress('Agriculture')}
                    />
            </View>
        </Pressable>

        <Pressable onPress={() => handleInterestPress('Manufacturing')}>
            <View style={[styles.chooseContainer, {backgroundColor: selectedInterests.Manufacturing ? Colors.DEFAULT_WHITE : Colors.DEFAULT_GREY, borderColor:selectedInterests.Manufacturing ? Colors.PINK : Colors.DEFAULT_GREY, borderWidth: 1,}]}>
                <Text style={[styles.chooseCategory, {color: selectedInterests.Manufacturing ? Colors.PINK : Colors.BOLD_BLACK}]}>Manufacturing</Text>
                    <AntDesign 
                        name={selectedInterests.Manufacturing ? 'check' : 'plus'}
                        size={22}
                        color={selectedInterests.Manufacturing ? Colors.PINK :Colors.BOLD_BLACK }
                        onPress={() => handleInterestPress('Manufacturing')}
                    />
            </View>
        </Pressable>
        <Pressable onPress={() => handleInterestPress('Entertainment')}>
            <View style={[styles.chooseContainer, {backgroundColor: selectedInterests.Entertainment ? Colors.DEFAULT_WHITE : Colors.DEFAULT_GREY, borderColor:selectedInterests.Entertainment ? Colors.PINK : Colors.DEFAULT_GREY, borderWidth: 1,}]}>
                <Text style={[styles.chooseCategory, {color: selectedInterests.Entertainment ? Colors.PINK : Colors.BOLD_BLACK}]}>Entertainment</Text>
                    <AntDesign 
                        name={selectedInterests.Entertainment ? 'check' : 'plus'}
                        size={22}
                        color={selectedInterests.Entertainment ? Colors.PINK :Colors.BOLD_BLACK }
                        onPress={() => handleInterestPress('Entertainment')}
                    />
            </View>
        </Pressable>

        <Pressable onPress={() => handleInterestPress('Technology')}>
            <View style={[styles.chooseContainer, {backgroundColor: selectedInterests.Technology ? Colors.DEFAULT_WHITE : Colors.DEFAULT_GREY, borderColor:selectedInterests.Technology ? Colors.PINK : Colors.DEFAULT_GREY, borderWidth: 1,}]}>
                <Text style={[styles.chooseCategory, {color: selectedInterests.Technology ? Colors.PINK : Colors.BOLD_BLACK}]}>Technology</Text>
                    <AntDesign 
                        name={selectedInterests.Technology ? 'check' : 'plus'}
                        size={22}
                        color={selectedInterests.Technology ? Colors.PINK :Colors.BOLD_BLACK }
                        onPress={() => handleInterestPress('Technology')}
                    />
            </View>
        </Pressable>

        <Pressable onPress={() => handleInterestPress('Pharmaceuticals')}>
            <View style={[styles.chooseContainer, {backgroundColor: selectedInterests.Pharmaceuticals ? Colors.DEFAULT_WHITE : Colors.DEFAULT_GREY, borderColor:selectedInterests.Pharmaceuticals ? Colors.PINK : Colors.DEFAULT_GREY, borderWidth: 1,}]}>
                <Text style={[styles.chooseCategory, {color: selectedInterests.Pharmaceuticals ? Colors.PINK : Colors.BOLD_BLACK}]}>Pharmaceuticals</Text>
                    <AntDesign 
                        name={selectedInterests.Pharmaceuticals ? 'check' : 'plus'}
                        size={22}
                        color={selectedInterests.Pharmaceuticals ? Colors.PINK :Colors.BOLD_BLACK }
                        onPress={() => handleInterestPress('Pharmaceuticals')}
                    />
            </View>
        </Pressable>

        <Pressable onPress={() => handleInterestPress('Logistics')}>
            <View style={[styles.chooseContainer, {backgroundColor: selectedInterests.Logistics ? Colors.DEFAULT_WHITE : Colors.DEFAULT_GREY, borderColor:selectedInterests.Logistics ? Colors.PINK : Colors.DEFAULT_GREY, borderWidth: 1,}]}>
                <Text style={[styles.chooseCategory, {color: selectedInterests.Logistics ? Colors.PINK : Colors.BOLD_BLACK}]}>Logistics</Text>
                    <AntDesign 
                        name={selectedInterests.Logistics ? 'check' : 'plus'}
                        size={22}
                        color={selectedInterests.Logistics ? Colors.PINK :Colors.BOLD_BLACK }
                        onPress={() => handleInterestPress('Logistics')}
                    />
            </View>
        </Pressable>

        <Pressable onPress={() => handleInterestPress('Education')}>
            <View style={[styles.chooseContainer, {backgroundColor: selectedInterests.Education ? Colors.DEFAULT_WHITE : Colors.DEFAULT_GREY, borderColor:selectedInterests.Education ? Colors.PINK : Colors.DEFAULT_GREY, borderWidth: 1,}]}>
                <Text style={[styles.chooseCategory, {color: selectedInterests.Education ? Colors.PINK : Colors.BOLD_BLACK}]}>Education</Text>
                    <AntDesign 
                        name={selectedInterests.Education ? 'check' : 'plus'}
                        size={22}
                        color={selectedInterests.Education ? Colors.PINK :Colors.BOLD_BLACK }
                        onPress={() => handleInterestPress('Education')}
                    />
            </View>
        </Pressable>

        <Pressable onPress={() => handleInterestPress('Real Estate')}>
        <View style={[styles.chooseContainer, {backgroundColor: selectedInterests['Real Estate'] ? Colors.DEFAULT_WHITE : Colors.DEFAULT_GREY, borderColor:selectedInterests['Real Estate'] ? Colors.PINK : Colors.DEFAULT_GREY, borderWidth: 1,}]}>
            <Text style={[styles.chooseCategory, {color: selectedInterests['Real Estate'] ? Colors.PINK : Colors.BOLD_BLACK}]}>Real Estate</Text>
            <AntDesign 
                name={selectedInterests['Real Estate'] ? 'check' : 'plus'}
                size={22}
                color={selectedInterests['Real Estate'] ? Colors.PINK :Colors.BOLD_BLACK }
                onPress={() => handleInterestPress('Real Estate')}
            />
        </View>
        </Pressable>

        <Pressable onPress={() => handleInterestPress('Hospitality')}>
        <View style={[styles.chooseContainer, {backgroundColor: selectedInterests['Hospitality'] ? Colors.DEFAULT_WHITE : Colors.DEFAULT_GREY, borderColor:selectedInterests['Hospitality'] ? Colors.PINK : Colors.DEFAULT_GREY, borderWidth: 1,}]}>
            <Text style={[styles.chooseCategory, {color: selectedInterests['Hospitality'] ? Colors.PINK : Colors.BOLD_BLACK}]}>Hospitality</Text>
            <AntDesign 
                name={selectedInterests['Hospitality'] ? 'check' : 'plus'}
                size={22}
                color={selectedInterests['Hospitality'] ? Colors.PINK :Colors.BOLD_BLACK }
                onPress={() => handleInterestPress('Hospitality')}
            />
        </View>
        </Pressable>

        <Pressable onPress={() => handleInterestPress('Electronic & Gadgets')}>
        <View style={[styles.chooseContainer, {backgroundColor: selectedInterests['Electronic & Gadgets'] ? Colors.DEFAULT_WHITE : Colors.DEFAULT_GREY, borderColor:selectedInterests['Electronic & Gadgets'] ? Colors.PINK : Colors.DEFAULT_GREY, borderWidth: 1,}]}>
            <Text style={[styles.chooseCategory, {color: selectedInterests['Electronic & Gadgets'] ? Colors.PINK : Colors.BOLD_BLACK}]}>Electronic & Gadgets</Text>
            <AntDesign 
                name={selectedInterests['Electronic & Gadgets'] ? 'check' : 'plus'}
                size={22}
                color={selectedInterests['Electronic & Gadgets'] ? Colors.PINK :Colors.BOLD_BLACK }
                onPress={() => handleInterestPress('Electronic & Gadgets')}
            />
        </View>
        </Pressable>
      
    </View>
      
      <CustomButton
                text="Go Home"
                style={styles.continueButton}
                onPress={()=>navigation.navigate('HomeScreen')}
                disabled={isButtonDisabled()}
                type="PRIMARY"
              />
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    header: {
        flex: 2,
        backgroundColor: '#ffffff',
    },
    footer: {
        flex: 1,
        backgroundColor: '#7F2F99',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 20
    },
    title: {
       color: Colors.BUTTON_PURPLE,
       fontFamily: Font.AVENIR_BOLD,
       alignSelf: 'center',
       fontSize: 24,
       paddingTop: 50,
       //fontWeight: 'bold', 
    },
    chooseContainer: {
        paddingVertical: 5, 
        borderRadius: 12, 
        flexDirection: 'row', 
        paddingHorizontal: 8, 
        margin: 10,
        alignSelf: 'center',
        justifyContent:'center',
        alignItems: 'center'
    },
    chooseCategory: {
        paddingHorizontal: 5, 
        fontFamily: 
        Font.AVENIR_MEDIUM, 
        fontSize: 16
    },
    text: {
        color: Colors.CATEGORY_GREY,
        marginTop: 5,
        fontSize: 16,
        marginBottom: 40,
        fontFamily: Font.AVENIR_MEDIUM,
        alignSelf: 'center',
    },
    grey: {
        color: Colors.DEFAULT_GREY,
        marginTop: 5,
        alignItems:'center',
        textAlign: 'center',
        marginBottom: 40,
        fontFamily: Font.AVENIR_REGULAR,
    },
    pink: {
        color: Colors.DEFAULT_PINK,
        alignItems:'center',
        textAlign: 'center',
        fontFamily: Font.AVENIR_MEDIUM,
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
    }
})

export default ChooseInterestScreen