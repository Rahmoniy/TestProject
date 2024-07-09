import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Dimensions, Image, Keyboard,
  Pressable, Text, TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import Carousel from "react-native-reanimated-carousel";
import navigationService from "../../navigators/NavigationService";
import { HistoryItem } from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../assets/style/colors";
import {
  ChatIcon,
  CloseIcon, Heart,
  TelegramIcon,
  ThreeDots,
} from "../../assets";

const PublicStory = () => {
  const { width, height } = Dimensions.get("window");
  const carouselRef = useRef();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [text, setText] = useState('');
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      handleKeyboardDidShow,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      handleKeyboardDidHide,
    );

    // Clean up listeners
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleKeyboardDidShow = () => {
    setKeyboardStatus(true);
  };

  const handleKeyboardDidHide = () => {
    setKeyboardStatus(false);
  };




  const goPrev = () => {
    carouselRef.current.prev();
  };
  const goNext = () => {
    carouselRef.current.next();
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity activeOpacity={0.95}>
        <View style={styles.titleCard}>
          <TouchableOpacity
            style={styles.btnHistory}
            onPress={() => goPrev()}></TouchableOpacity>

          <TouchableOpacity
            style={styles.btnHistory}
            onPress={() => goNext()}></TouchableOpacity>
        </View>
        <Image
          style={styles.img}
          source={{
            uri: "https://hips.hearstapps.com/hmg-prod/images/sending-money-royalty-free-image-1580242383.jpg?crop=0.667xw:1.00xh;0.212xw,0&resize=980:*",
          }}
          resizeMode={"cover"}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {
        !imageLoaded ? (
          <ActivityIndicator
            style={{ position: "absolute", top: "50%", left: width / 2 - 25 }}
            animating={true} color={colors.lightRed} size={50} />
        ) : null
      }
      <Carousel
        data={[1, 2]}
        renderItem={renderItem}
        ref={carouselRef}
        enabled={false}
        autoPlayInterval={6500}
        autoPlay={true}
        loop={false}
        width={width}
        height={height}
        scrollAnimationDuration={500}
        onSnapToItem={index => {
          setActiveIndex(index);
        }}
      />
      <View style={styles.headerCard}>
        <View style={styles.historyDots}>
          {[1, 2].map((v, i) => {
            return (
              <HistoryItem
                activeIndex={activeIndex}
                key={i}
                index={i}
                itemDot={2}
                isActive={imageLoaded}
              />
            );
          })}
        </View>
        <View style={styles.userCard}>
          <View style={styles.topRightCard}>
            <Image
              style={styles.useImg}
              source={{ uri: "https://resize.indiatvnews.com/en/resize/newbucket/400_-/2020/04/kanika-1587894009.jpg" }}
            />

            <View>
              <Text style={styles.mainTitle}>Sarah_tom</Text>
              <Text style={styles.subTitle}>20m ago</Text>
            </View>
          </View>

          <View style={styles.topRightCard}>
            <TouchableOpacity style={styles.xIconCard}>
              <ThreeDots color={colors.white} size={23} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{...styles.xIconCard, paddingRight: 0}}
              onPress={() => navigationService.goBack()}
            >
              <CloseIcon  color={colors.white} size={23} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {
        keyboardStatus && (
          <View style={styles.smileCard}>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => setText(prevState => prevState + '😅')}>
                <Text style={styles.smileText}>😅</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setText(prevState => prevState + '😍')}>
                <Text style={styles.smileText}>😍</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setText(prevState => prevState + '😳')}>
                <Text style={styles.smileText}>😳</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => setText(prevState => prevState + '😥')}>
                <Text style={styles.smileText}>😥</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setText(prevState => prevState + '👏')}>
                <Text style={styles.smileText}>👏</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setText(prevState => prevState + '🔥')}>
                <Text style={styles.smileText}>🔥</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }

      <View style={styles.bottomCard}>
        <Pressable style={styles.inputCard}>
          <ChatIcon size={25} color={colors.white} />

          <TextInput
            value={text}
            onChangeText={setText}
            placeholder={'Send a message'}
            placeholderTextColor={colors.white}
            style={styles.inputText}
          />
        </Pressable>

        <TouchableOpacity style={styles.iconCard}>
          <Heart color={colors.white} size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconCard}>
          <TelegramIcon color={colors.white} size={25} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PublicStory;
