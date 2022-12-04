import React from "react";
import { View, Text, ScrollView } from "react-native";
import Banner from "./components/Banner";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Sponsors from "./components/Sponsors";
import SwiperHome from "./components/SwiperHome";

export default function Home() {
  return (
    <ScrollView>
      <Header />
      <SwiperHome />
      <Filter />
      <ProductList />
      <Sponsors />
      <Banner />
      <Footer />
    </ScrollView>
  );
}
