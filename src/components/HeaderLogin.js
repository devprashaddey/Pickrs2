import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
//icon
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const HeaderLogin = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 50,
      }}
      className="flex-row justify-center items-center relative bg-[#222222]">
      <Text className="font-semibold text-lg text-white">Log in</Text>
      <TouchableOpacity
        style={{padding: 10}}
        className="absolute top-2 left-2"
        onPress={() => {
          navigation.navigate('WelcomeScreen');
        }}>
        <Icon name="long-arrow-left" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderLogin;
