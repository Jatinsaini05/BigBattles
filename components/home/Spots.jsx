import {
  FaPlay,
  FaFire,
  FaFutbol,
  FaTableTennis,
  FaBasketballBall,
  FaGamepad,
  FaVolleyballBall,
  FaHockeyPuck,
  FaRunning,
  FaFistRaised,
  FaFutbol as FaFutsal,
  FaFootballBall,
} from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { GoDotFill } from "react-icons/go";
const categories = [
  { label: "Live", icon: <FaPlay />, count: 317, color: "bg-red-600" },
  { label: "IPL", sublabel: "Cricket", color: "bg-green-600" },
  { label: "Cricket", color: "bg-red-700" },
  { label: "EPL", sublabel: "Football", color: "bg-gray-700" },
  { label: "Bundesliga", sublabel: "Football", color: "bg-gray-600" },
  { label: "Monte-Carlo", sublabel: "Tennis", color: "bg-gray-500" },
];

const sports = [
  { label: "Top", icon: <FaFire /> },
  { label: "Cricket", icon: <FaFutbol /> },
  { label: "Football", icon: <FaFootballBall /> },
  { label: "Tennis", icon: <FaTableTennis /> },
  { label: "Basketball", icon: <FaBasketballBall /> },
  { label: "Esports", icon: <FaGamepad /> },
  { label: "Table tennis", icon: <FaTableTennis /> },
  { label: "Volleyball", icon: <FaVolleyballBall /> },
  { label: "Handball", icon: <FaFutbol /> },
  { label: "Field hockey", icon: <FaHockeyPuck /> },
  { label: "Badminton", icon: <FaRunning /> },
  { label: "Mix. Fights", icon: <FaFistRaised /> },
  { label: "Futsal", icon: <FaFutsal /> },
  { label: "Rugby", icon: <FaFootballBall /> },
  { label: "Floorball", icon: <FaFutbol /> },
];

const matches = [
  {
    type: "National teams. ODI. Series",
    teams: [
      {
        name: "Ireland A",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/500px-Flag_of_Ireland.svg.png",
      },
      {
        name: "Sri Lanka A",
        flag: "https://external-preview.redd.it/e-isYAGHPStwRDt2qsG54zgwIR1J8SUWnYcCS_aB8CU.png?auto=webp&s=204c5bcec063e99ca32b12bf1baad239cff177cb",
      },
    ],
    time: "11:30",
    day: "Tomorrow",
    odds: ["3.05", "1.38"],
    status: null,
  },
  {
    type: "Test matches. West Indies",
    teams: [
      {
        name: "Trinidad and Tobago...",
        flag: "https://img.freepik.com/premium-photo/national-flag-trinidad-tobago-background-with-flag-trinidad-tobago_659987-21049.jpg",
        score: "240/10 & 303/4",
      },
      {
        name: "Guyana",
        flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUx4aObMm8k7Ke9djc34wmE7rgeEafpsGBgg&s",
        score: "463/10 & 0/0",
      },
    ],
    time: null,
    day: null,
    odds: ["3.90", "1.26"],
    status: "Live",
  },
  {
    type: "Test matches. West Indies",
    teams: [
      {
        name: "Trinidad and Tobago...",
        flag: "https://img.freepik.com/premium-photo/national-flag-trinidad-tobago-background-with-flag-trinidad-tobago_659987-21049.jpg",
        score: "240/10 & 303/4",
      },
      {
        name: "Guyana",
        flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUx4aObMm8k7Ke9djc34wmE7rgeEafpsGBgg&s",
        score: "463/10 & 0/0",
      },
    ],
    time: null,
    day: null,
    odds: ["3.90", "1.26"],
    status: "Live",
  },
  {
    type: "Test matches. West Indies",
    teams: [
      {
        name: "Trinidad and Tobago...",
        flag: "https://img.freepik.com/premium-photo/national-flag-trinidad-tobago-background-with-flag-trinidad-tobago_659987-21049.jpg",
        score: "240/10 & 303/4",
      },
      {
        name: "Guyana",
        flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUx4aObMm8k7Ke9djc34wmE7rgeEafpsGBgg&s",
        score: "463/10 & 0/0",
      },
    ],
    time: null,
    day: null,
    odds: ["3.90", "1.26"],
    status: "Live",
  },
  {
    type: "Test matches. West Indies",
    teams: [
      {
        name: "Trinidad and Tobago...",
        flag: "https://img.freepik.com/premium-photo/national-flag-trinidad-tobago-background-with-flag-trinidad-tobago_659987-21049.jpg",
        score: "240/10 & 303/4",
      },
      {
        name: "Guyana",
        flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUx4aObMm8k7Ke9djc34wmE7rgeEafpsGBgg&s",
        score: "463/10 & 0/0",
      },
    ],
    time: null,
    day: null,
    odds: ["3.90", "1.26"],
    status: "Live",
  },
];

import { FaStar, FaCircle } from "react-icons/fa";
import Image from "next/image";

export default function SportsSection() {
  return (
    <section className="bg-[#1a0f2e] text-white py-8 px-4 sm:px-6 lg:px-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Sport</h2>
        <div className="relative">
          <AiOutlineSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search events"
            className="bg-[#392d50] w-40 sm:w-auto text-sm pl-10 pr-4 py-2 rounded-md focus:outline-none"
          />
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        // slidesPerView={2}
        breakpoints={{
          400: {
            slidesPerView: 2,
          },
          648: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        className="mySwiper"
      >
        {categories.map((cat, idx) => (
          <SwiperSlide>
            <div
              key={idx}
              className={`min-w-[160px] h-[80px] rounded-md ${cat.color} p-4 flex flex-col justify-between text-white`}
            >
              <span className="text-sm font-semibold">{cat.label}</span>
              {cat.count && (
                <span className="text-xs opacity-75">{cat.count} events</span>
              )}
              {cat.sublabel && (
                <span className="text-xs opacity-75">{cat.sublabel}</span>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-6">
        <div className="mb-5 pt-3 flex items-center gap-2">
          <h2 className="text-2xl font-bold">Top Events</h2>
          <p className="flex border rounded-2xl px-1 py-0.5 w-fit items-center text-sm gap-2">
            <GoDotFill className="text-red-600" />
            Live
          </p>
        </div>
        <div className="flex items-center gap-4 overflow-x-auto mb-6">
          {sports.map((sport, idx) => (
            <button
              key={idx}
              className="flex flex-col items-center text-xs text-gray-300 hover:text-white transition"
            >
              <div className="text-lg mb-1">{sport.icon}</div>
              <span>{sport.label}</span>
            </button>
          ))}
          <button className="text-sm text-blue-400 hover:underline ml-auto whitespace-nowrap">
            Show all →
          </button>
        </div>

        <div className="bg-[#150F23] rounded-md p-4">
          <Swiper
            spaceBetween={200}
            slidesPerView={1}
            breakpoints={{
              500: {
                spaceBetween: 30,
              },
              560: {
                slidesPerView: 1.2,
              },
              900: {
                slidesPerView: 2,
              },
              1060: {
                slidesPerView: 2.2,
              },
              1400: {
                slidesPerView: 3,
              },
              1490: {
                slidesPerView: 3.2,
              },
            }}
            className="mySwiper"
          >
            {matches.map((match, index) => (
              <SwiperSlide key={index}>
                <div className="sm:w-[430px] w-auto bg-[#1C162F] text-white rounded-2xls shadow-lg relative">
                  <div className="absolute inset-0 opacity-10">
                    <img
                      src="/stadium.jpg"
                      alt="stadium"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative z-10 p-4">
                    <div className="flex flex-wrap gap-2 sm:gap-0 items-center justify-between mb-2">
                      <div className="bg-[#2F2B40] text-white px-2 py-1 text-xs rounded">
                        Cricket
                      </div>
                      {match.status === "Live" && (
                        <div className="flex items-center text-green-500 text-sm">
                          <FaCircle className="text-[8px] mr-1" /> Live
                        </div>
                      )}
                      <span className="text-sm text-gray-300">
                        {match.type}
                      </span>
                      <FaStar className="text-gray-500" />
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div className="flex w-1/3 flex-col items-center">
                        <img
                          src={match.teams[0].flag}
                          alt={match.teams[0].name}
                          className="rounded-full w-10 h-10"
                        />
                        <span className="mt-2 overflow-hidden h-5 text-sm text-center">
                          {match.teams[0].name}
                        </span>
                      </div>
                      {!match.time && (
                        <div className="flex w-1/3 flex-col text-sm">
                          <div className="flex flex-col justify-between items-center">
                            <span className="text-red-500">
                              {match.teams[0].score}
                            </span>
                            <span className="text-red-500">
                              {match.teams[1].score}
                            </span>
                          </div>
                        </div>
                      )}
                      {match.time && (
                        <div className="text-center w-1/3">
                          <div className="text-2xl font-bold">{match.time}</div>
                          <div className="text-sm text-gray-400">
                            {match.day}
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col w-1/3 items-center">
                        <img
                          src={match.teams[1].flag}
                          alt={match.teams[1].name}
                          className="w-10 h-10 rounded-full"
                        />
                        <span className="mt-2 overflow-hidden h-5 text-sm text-center">
                          {match.teams[1].name}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between text-sm font-medium">
                      <div className="bg-[#2F2B40] w-1/2 text-center py-2 rounded-md mr-1">
                        1 {match.odds[0]}
                      </div>
                      <div className="bg-[#2F2B40] w-1/2 text-center py-2 rounded-md ml-1">
                        2 {match.odds[1]}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
