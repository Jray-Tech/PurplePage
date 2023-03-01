import * as React from 'react';

import {
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import Colors from '../../constants/Colors';
import {globalStyles} from '../styles';

interface AppButtonType {
  onPress?: () => void;
  mode?: 'text' | 'outlined' | 'contained' | undefined;
  children: React.ReactNode;
  width?: number | string;
  disabled?: boolean;
  loading?: boolean;
  size?: string | number;
  text?: string;
  btnStyles?: {};
}

export const AppButton: React.FC<AppButtonType> = ({
  onPress,
  mode = 'contained',
  disabled,
  width,
  children,
  loading,
  btnStyles,
  size = 50,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          ...styles.btn,
          backgroundColor:
            mode == 'contained' ? Colors.BUTTON_PURPLE : Colors.DEFAULT_WHITE,
          height: size,
          opacity: disabled ? 0.3 : loading ? 0.3 : 1,
          width: width ? width : '100%',
          paddingHorizontal: 12,
          ...btnStyles,
        }}
        onPress={disabled ? () => {} : loading ? () => {} : onPress}>
        {loading ? (
          <View></View>
        ) : (
          <Text
            style={{
              ...globalStyles.textHeader,
              color:
                mode == 'contained'
                  ? Colors.DEFAULT_WHITE
                  : Colors.BUTTON_PURPLE,
            }}>
            {children}
          </Text>
        )}
      </TouchableOpacity>
      {loading ? (
        <View
          style={{
            position: 'absolute',
            top: 10,
            left: '48%',
          }}>
          <ActivityIndicator
            color={
              mode == 'contained' ? Colors.DEFAULT_WHITE : Colors.BUTTON_PURPLE
            }
            size={'large'}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rounded5: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.BUTTON_PURPLE,
  },
});
