import React, { useRef, useState } from "react";
import {
  Dimensions, Image,
  Text,
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
  CloseIcon,
  DeleteIcon,
  EyeIcon, Plus,
  SaveIcon,
  TelegramIcon,
  ThreeDots,
} from "../../assets";
import RBSheet from "react-native-raw-bottom-sheet";

const UserStory = () => {
  const { width, height } = Dimensions.get("window");
  const carouselRef = useRef();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [bottomSheet, setBottomSheet] = useState('');
  const bottomSheetRef = useRef();


  const goPrev = () => {
    carouselRef.current.prev();
  };
  const goNext = () => {
    carouselRef.current.next();
  };

  const handlePress = props => {
    setBottomSheet(props)
    bottomSheetRef.current?.open()
  }

  const Viewers = () => {
    return (
      <View>
        <View style={styles.bottomSheetHeader}>
          <View style={{...styles.eyeCard, paddingVertical: 0}}>
            <EyeIcon size={20} color={colors.green} />
            <Text style={{ ...styles.mainTitle, marginLeft: 5 }}>24</Text>
          </View>

          <Text style={{ ...styles.mainTitle, textAlign: "center", alignSelf: "center" }}>Viewed
            by</Text>

          <TouchableOpacity onPress={() => bottomSheetRef.current?.close()}>
            <CloseIcon size={20} color={colors.white} />
          </TouchableOpacity>
        </View>

        {
          [1, 2, 3].map((v, i) => {
            return (
              <View style={styles.btRow} key={i.toString()}>
                <Image
                  source={{ uri: "https://resize.indiatvnews.com/en/resize/newbucket/400_-/2020/04/kanika-1587894009.jpg" }}
                  style={styles.bTuseImg} />

                <View style={styles.userTitle}>
                  <Text style={styles.mainTitle}>Sarah</Text>
                  <Text style={styles.subTitle}>10 min ago</Text>
                </View>
              </View>
            );
          })
        }
      </View>
    );
  };

  const Features = () => {
    return (
      <View style={styles.featureCard}>
        <TouchableOpacity style={styles.eyeCard}>
          <DeleteIcon color={colors.lightRed} size={25} />
          <Text style={{
            ...styles.mainTitle,
            marginLeft: 10,
            color: colors.lightRed,
          }}>Delete</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.eyeCard}>
          <TelegramIcon color={colors.green} size={25} />
          <Text style={{ ...styles.mainTitle, marginLeft: 10 }}>Send</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.eyeCard}>
          <SaveIcon color={colors.green} size={25} />
          <Text style={{ ...styles.mainTitle, marginLeft: 10 }}>Save</Text>
        </TouchableOpacity>
      </View>
    );
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
            // uri: get(item, 'image_url', null),
            uri: "https://hips.hearstapps.com/hmg-prod/images/sending-money-royalty-free-image-1580242383.jpg?crop=0.667xw:1.00xh;0.212xw,0&resize=980:*",
          }}
          resizeMode={"cover"}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
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
              style={{ ...styles.xIconCard, paddingRight: 0 }}
              onPress={() => navigationService.goBack()}
            >
              <CloseIcon color={colors.white} size={23} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.bottomCard}>
        <TouchableOpacity
          style={styles.inputCard}
          onPress={() => handlePress('viewers')}
        >
          <Text style={styles.inputText}>25 viewers</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconCard}
                          onPress={() => handlePress('plus')}
        >
          <TelegramIcon color={colors.white} size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconCard}
                          onPress={() => handlePress('plus')}
        >
          <Plus color={colors.white} size={20} />
        </TouchableOpacity>
      </View>

      <RBSheet
        ref={bottomSheetRef}
        animationType={"fade"}
        height={height / 2.5}
        openDuration={400}
        closeDuration={200}
        closeOnDragDown
        customStyles={{ container: styles.bottomSheetContainer }}>
        {
          bottomSheet === 'viewers' ? (
            <Viewers />
          ) : (
            <Features />
          )
        }
      </RBSheet>
    </SafeAreaView>
  );
};

export default UserStory;
