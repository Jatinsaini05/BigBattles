import AvailableGames from "@/components/home/AvailableGames";
import MainSlider from "@/components/home/MainSlider";
import SportsSection from "@/components/home/Spots";
import TopContestsSlider from "@/components/home/TopContests";
import Winners from "@/components/home/Winners";
import AppScreenshots from "@/components/home/AppScreenshots";
import CustomerReview from "@/components/home/CustomerReview";
import React from "react";
import Refer from "@/components/home/Refer";
import FAQSection from "@/components/home/FaqSection";

export default function index() {
  return (
    <div>
      <div>
        <MainSlider />
      </div>
      <div>
        <AvailableGames />
      </div>
      <div>
        <TopContestsSlider />
      </div>
      <div>
        <SportsSection />
      </div>
      <div>
        <Winners />
      </div>
      <div>
        <CustomerReview />
      </div>
      <div>
        <AppScreenshots />
      </div>
      <div>
        <Refer />
      </div>
      <div>
        <FAQSection />
      </div>
    </div>
  );
}
