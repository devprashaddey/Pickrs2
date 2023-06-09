import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Link, useNavigation} from '@react-navigation/native';
import misc from '../misc/misc';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <ImageBackground
        source={require('../assets/images/Home-BG.png')}
        resizeMode="stretch"
        className=" flex-1 items-center justify-end">
        <Image
          className="h-[70%] w-[70%]"
          source={require('../assets/images/Home-Girl.png')}
        />
      </ImageBackground>

      {/* second section */}
      <View className="flex-1 pt-4 px-6 z-50">
        <View className="flex-1 items-center">
          <Text
            className={`font-semibold text-xl text-[${misc.PRIMARY_TEXT}]`}
            style={{color: misc.PRIMARY_TEXT}}>
            Welcome to Pickrs
          </Text>
          <Text className="mt-3 text-gray-800 text-md font-semibold">
            There are many variations of passages of Lorem Ipsum available of
            passages of Lorem Ipsum available of.
          </Text>
        </View>

        <View className="flex-1 mt-8 px-4">
          <View className="flex-row items-center justify-around">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LoginScreen');
              }}
              className={`border px-11 py-3 rounded-lg bg-[#222222]`}>
              <Text className="text-white font-semibold">Log in</Text>
            </TouchableOpacity>

            <TouchableOpacity className={`border px-11 py-3 rounded-lg`}>
              <Text className="font-semibold text-black">Sign up</Text>
            </TouchableOpacity>
          </View>

          <View className="items-center mt-12">
            <TouchableOpacity>
              <Text className="text-black underline text-md font-semibold">
                Take tour as a guest
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
