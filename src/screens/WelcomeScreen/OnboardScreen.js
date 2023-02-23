import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {CustomButton} from '../../components/CustomComponents';

import * as Animateble from 'react-native-animatable';
import Colors from '../../constants/Colors';
import Font from '../../constants/Font';

const {width, height} = Dimensions.get('window');

const COLORS = {primary: Colors.DEFAULT_WHITE, white: '#fff'};

const slides = [
  {
    id: '1',
    image: require('../../../assets/images/onboarding.png'),
  },
  {
    id: '2',
    image: require('../../../assets/images/onboarding.png'),
  },
  {
    id: '3',
    image: require('../../../assets/images/onboarding.png'),
  },
];

const Slide = ({item}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        position: 'relative',
        left: 40,
        marginTop: 10,
      }}>
      <Image
        source={item?.image}
        style={{
          height: '75%',
          width,
          resizeMode: 'contain',
          alignSelf: 'center',
          paddingLeft: 50,
        }}
      />
    </View>
  );
};

const OnboardingScreen = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.16,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 25,
            marginBottom: 20,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: Colors.BUTTON_PURPLE,
                  width: 30,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <Animateble.View animation="fadeInUpBig">
          <CustomButton
            text="Get Started"
            onPress={() => navigation.navigate('SignUpScreen')}
            type="PRIMARY"
          />
          <Text style={styles.grey}>
            Have an account?{' '}
            <Text
              style={styles.pink}
              text="Create an account"
              onPress={() => navigation.navigate('SignInScreen')}
              type="WHITE">
              Sign in
            </Text>
          </Text>
        </Animateble.View>
      </View>
    );
  };

  const Header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.titleText}>
          Your One-Stop Digital Marketing Solution
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: Colors.DEFAULT_WHITE, flex: 1}}>
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: Colors.DEFAULT_WHITE,
        }}>
        <Header />
        <FlatList
          ref={ref}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={slides}
          renderItem={({item}) => <Slide item={item} />}
          keyExtractor={item => item.id}
          onMomentumScrollEnd={updateCurrentSlideIndex}
        />
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Footer />
        </View>
      </View>
      <StatusBar backgroundColor={COLORS.primary} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.DEFAULT_WHITE,
    paddingHorizontal: 20,
  },
  titleText: {
    color: Colors.BUTTON_PURPLE,
    fontFamily: Font.AVENIR_BLACK,
    fontSize: 30,
    paddingTop: 35,
    paddingBottom: 10,
    //fontWeight: 'bold',
  },
  subtitle: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
  },
  grey: {
    color: Colors.CATEGORY_GREY,
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 40,
    fontFamily: Font.AVENIR_REGULAR,
  },
  pink: {
    color: Colors.DEFAULT_PURPLE,
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: Font.AVENIR_MEDIUM,
  },
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 4.5,
    width: 30,
    backgroundColor: Colors.DEFAULT_GREY,
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OnboardingScreen;
