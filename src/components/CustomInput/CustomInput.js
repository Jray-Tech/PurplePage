import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomInput= ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    
        <View style={styles.container}>
        
        <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.input} 
        placeholder={placeholder} 
        secureTextEntry={secureTextEntry}
        />
        </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        width: '100%',
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    input: {},
});

export default CustomInput