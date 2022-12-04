import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import BackArrow from "../../components/BackArrow";
import Button from "../../components/Button";
import { useCart } from "../../Store/cartSlice";
import Globals from "../../styles/Globals";
import ProductCard from "../Home/components/ProductCard";

export default function Cart() {
  const cartList = useSelector(useCart);

  return (
    <View style={Globals.padContainer}>
      <View style={Globals.arrowContainer}>
        <BackArrow />
        <Text style={Globals.textDefault}>Carrinho</Text>
        <View></View>
      </View>
      <View style={{ alignItems: "center" }}>
        {cartList.length === 0 ? (
          <>
            <Image source={require("../../assets/checkout/emptyCart.png")} />
            <Text style={Globals.title2}>Carrinho vazio</Text>
            <Text style={Globals.textCenter}>
              O seu carrinho está vazio, navegue pela PEX para encontrar o que
              você precisa
            </Text>
          </>
        ) : (
          <View
            style={{
              padding: "5%",
              justifyContent: "space-between",
            }}
          >
            <ScrollView style={{ height: "70%" }}>
              {cartList.map((item, index) => (
                <ProductCard key={index} />
              ))}
            </ScrollView>
            <View style={{ height: "30%", justifyContent: "center" }}>
              <Button name="Concluir compra" />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
