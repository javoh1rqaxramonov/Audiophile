import React from "react";
import Logo from "../image/Logo.svg";
import face from "../image/face.svg";
import twitter from "../image/twitter.svg";
import insta from "../image/insta.svg";
import { NavLink } from "react-router-dom";

function Fotter() {
  return (
    <div>
      <div className="bg-[#000000]">
        <div className="max-w-[1110px] mx-auto ">
          <div className="w-[101px] h-1 bg-[#D87D4A] mb-[71px]"></div>
          <div className="flex justify-between pb-[36px]">
            <img src={Logo} alt="" />
            <div className="flex text-white gap-[34px] cursor-pointer">
              <NavLink
                to={"/"}
                className="cursor-pointer hover:text-[#D87D4A]  transition-all duration-200"
              >
                HOME
              </NavLink>
              <NavLink
                to={"/headphone"}
                className="cursor-pointer hover:text-[#D87D4A]  transition-all duration-200"
              >
                HEADPHONES
              </NavLink>
              <NavLink
                to={"/speker"}
                className="cursor-pointer hover:text-[#D87D4A]  transition-all duration-200"
              >
                SPEAKERS
              </NavLink>
              <NavLink
                to={"/earphone"}
                className="cursor-pointer hover:text-[#D87D4A]  transition-all duration-200"
              >
                EARPHONES
              </NavLink>
            </div>
          </div>
          <div className="pb-[56px] flex justify-between items-end">
            <p className="text-white/50 w-[540px]">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <div className="flex gap-4 items-center">
              <a href="https://www.instagram.com/7.javoh1r.7/">
                <svg
                  class="social-icon"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                    fill="#FFF"
                    fill-rule="nonzero"
                  ></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/7.javoh1r.7/">
                <img
                  className="cursor-pointer hover:text-[#D87D4A]"
                  src={twitter}
                  alt=""
                />
              </a>
              <a href="https://www.instagram.com/7.javoh1r.7/">
                <img
                  className="cursor-pointer hover:text-[#D87D4A]"
                  src={insta}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="pb-[48px]">
            <h3 className="text-white/50">
              Copyright 2021. All Rights Reserved
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fotter;
