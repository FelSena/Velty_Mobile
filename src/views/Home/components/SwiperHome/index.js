import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BackgroundImage } from "react-native-elements/dist/config";
import Swiper from "react-native-swiper";
import COLORS from "../../../../styles/Colors";

export default function SwiperHome() {
  return (
    <Swiper
      height={200}
      horizontal={false}
      autoplay
      dotColor="rgba( 0, 0, 0, 0.15)"
      activeDotColor={COLORS.white}
    >
      <View>
        <BackgroundImage
          source={require("../../../../assets/SwiperHome/slider01.png")}
          resizeMode="cover"
          style={styles.img}
        >
          <Text style={styles.text1}>Tudo com Frete Grátis</Text>
          <Text style={styles.text2}>Comprar agora</Text>
        </BackgroundImage>
      </View>
      <View>
        <BackgroundImage
          source={require("../../../../assets/SwiperHome/slider02.png")}
          resizeMode="cover"
          style={styles.img}
        />
      </View>
      <View>
        <BackgroundImage
          source={require("../../../../assets/SwiperHome/slider03.png")}
          resizeMode="cover"
          style={styles.img}
        />
      </View>
      <View>
        <BackgroundImage
          source={require("../../../../assets/SwiperHome/slider04.png")}
          resizeMode="cover"
          style={styles.img}
        />
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  img: {
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  text1: {
    fontSize: 24,
    fontWeight: "500",
    fontStyle: "italic",
    color: COLORS.white,
    marginBottom: 20,
  },
  text2: {
    width: 100,
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white,
  },
});
