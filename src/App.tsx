import React from "react";
import "./App.css";
import Header from "./components/hedear";
import TopArea from "./components/topArea";
import WelcomeHero from "./components/welcomeHero";
import ListTopics from "./components/listTopics";
import Works from "./components/works";
import Explore from "./components/explore";
import Reviews from "./components/reviews";
import StatisticsSection from "./components/statisticsSection";
import BlogSection from "./components/blogSection";
import SubscriptionSection from "./components/subscriptionSection";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      {/* testa */}
      <Header />
      <TopArea />
      <WelcomeHero />
      <ListTopics />
      <Works />
      {/* <Explore /> */}
      {/* <Reviews /> */}
      <StatisticsSection />
      <BlogSection />
      <SubscriptionSection />
      <Footer />
    </div>
  );
}

export default App;
