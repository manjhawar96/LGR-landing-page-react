import React from "react";
import Header from "../../components/Header/Header";
import Opener from "../../components/Opener/Opener";
import GetStarted from "../../components/GetStarted/GetStarted";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Opener />
      <Header />
      <GetStarted />
      <Footer />
    </>
  );
}
