import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Colors from '../../constants/Colors';
import Font from '../../constants/Font';

interface PropsType {
  onTextChange: (params: string) => void;
  width?: string | number;
  containerStyle?: {};
  textInputStyle?: {};
  value?: string;
  ktype?: any; // or use keyboard types ..
  maxLength?: number; // or use keyboard types ..
  placeholder?: string;
  error?: any;
  isPassword?: boolean;
}

const SearchInput: React.FC<PropsType> = ({
  onTextChange,
  width,
  placeholder,
  error,
  isPassword,
  containerStyle,
  textInputStyle,
  value,
  ktype = 'default',
  maxLength,
}) => {
  const [focused, setFocused] = useState(false);
  const [borderColor, setBorderColor] = useState(Colors.SEARCH_GREY);

  const [secure, setSecure] = useState(isPassword);

  useEffect(() => {
    // if error  use red if focused
    if (focused) {
      setBorderColor(Colors.PINK);
    }
    if (!focused) {
      // check if it is also erro here if it is then mane kit red else then not focused color .
      setBorderColor(Colors.SEARCH_GREY);
    }
  }, [focused]);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: focused ? Colors.DEFAULT_WHITE : Colors.SEARCH_GREY,
        borderWidth: 1,
        borderRadius: 0,
        width: width || '100%',
        paddingHorizontal: 6,
        marginBottom: error ? 12 : 0,
        alignItems: 'center',
        borderColor: borderColor,
        ...containerStyle,
      }}>
      <TextInput
        style={{
          ...styles.textInputStyle,
          ...textInputStyle,
        }}
        value={value}
        keyboardType={ktype}
        onChangeText={onTextChange}
        underlineColorAndroid="transparent"
        maxLength={maxLength || 10}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        placeholder={placeholder}
        secureTextEntry={secure}
        placeholderTextColor={Colors.CATEGORY_GREY}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 0,
    justifyContent: 'center',
  },
  textInputStyle: {
    flex: 1,
    fontSize: 14,
    height: 40,
    color: Colors.SECONDARY_GREY,
    fontFamily: Font.AVENIR_REGULAR,
  },
});
