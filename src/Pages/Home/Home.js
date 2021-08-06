import React from "react";
import Header from "../../components/Header/Header";
import Opener from "../../components/Opener/Opener";
import GetStarted from "../../components/GetStarted/GetStarted";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import Importance from "../../components/Importance/Importance";

export default function Home() {
  return (
    <main id="home">
      <Opener />
      <Header />
      <GetStarted />
      <Importance />
      <Footer />
    </main>
  );
}
