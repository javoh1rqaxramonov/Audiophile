import React from "react";
import first from "../image/sp1.png";
import second from "../image/sp2.png";
import arrowright from "../image/arrowright.svg";
import column from "../image/column.png";
import air from "../image/air.png";
import user from "../image/user.png";
import Logo from "../image/Logo.svg";
import face from "../image/face.svg";
import twitter from "../image/twitter.svg";
import insta from "../image/insta.svg";
import { useNavigate } from "react-router-dom";
import shead from "../image/shead.png";

function Speker() {
  const navigate = useNavigate();
  function handleHead() {
    navigate("/headphone");
  }
  function handleSpeker() {
    navigate("/speker");
  }
  function handleEarphone() {
    navigate("/earphone");
  }
  function handleHome() {
    navigate("/");
  }
  return (
    <div>
      <div className="bg-[#141414]">
        <div className="flex text-center justify-center items-center py-[98px] mb-[160px]">
          <h2 className="text-white font-bold text-[40px] w-[215px] tracking-[1.5px]">SPEAKERS</h2>
        </div>
      </div>

      <div className="max-w-[1110px] mx-auto flex justify-between items-center mb-[80px]">
        <img
          className="px-[124px] pt-[96px] pb-[113px] bg-[#F1F1F1] rounded-[8px]"
          src={first}
          alt="Speaker"
        />
        <div className="pt-[128px]">
          <h3 className="text-sm text-[#D87D4A] tracking-[10px] font-normal text-[14px] opacity-50 pb-4">
            NEW PRODUCT
          </h3>
          <h3 className="w-[222px] text-[56px] leading-[50px] text-black font-bold pb-[32px]">
            ZX9 SPEAKER
          </h3>
          <p className="w-[445px] opacity-50 font-medium text-black pb-10">
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity -
            creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <button className="py-[15px] px-[30px] bg-[#D87D4A] text-white mb-[158px]  cursor-pointer hover:bg-[#FBAF85] transition-all duration-200">
            SEE PRODUCT
          </button>
        </div>
      </div>

      <div className="max-w-[1110px] mx-auto flex justify-between items-center mb-[80px]">
        <div className="pt-[128px]">
          <h3 className="w-[222px] text-[56px] leading-[50px] text-black font-bold pb-[32px]">
            ZX7 SPEAKER
          </h3>
          <p className="w-[445px] opacity-50 font-medium text-[15px] text-black pb-10">
            Stream high quality sound wirelessly with minimal loss. The ZX7
            bookshelf speaker uses high-end audiophile components that
            represents the top of the line powered speakers for home or studio
            use.
          </p>
          <button className="py-[15px] px-[30px] bg-[#D87D4A] text-white mb-[158px] cursor-pointer hover:bg-[#FBAF85] transition-all duration-200">
            SEE PRODUCT
          </button>
        </div>
        <img
          className="px-[137px] pt-[80px] pb-[95px] bg-[#F1F1F1] rounded-[8px]"
          src={second}
          alt="Headphones"
        />
      </div>
      <div className="w-full bg-white max-w-[1110px] mx-auto pt-[120px] mb-[168px]">
        <div className="flex justify-between">
          <div className="bg-[#F1F1F1] w-[350px] h-[204px] flex justify-center rounded-lg ">
            <div className="mx-auto pb-[30px]">
              <img
                className="w-[123px] translate-y-[-80px]"
                src={shead}
                alt=""
              />
              <div className="translate-y-[-30px]">
                <h3 className="font-bold tracking-[1.3px] text-lg text-center">
                  HEADPHONES
                </h3>
                <div
                  className="flex items-center gap-[13px] justify-center"
                  onClick={handleHead}
                >
                  <h3 className="text-[13px] tracking-[1px] hover:text-[#D87D4A] transition-all duration-200 cursor-pointer">
                    SHOP
                  </h3>
                  <button>
                    <img
                      className="w-[5px] h-2.5 self-center mt-1 opacity-50"
                      src={arrowright}
                      alt="Arrow"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F1F1F1] w-[350px] h-[204px] flex justify-center rounded-lg ">
            <div className="mx-auto pb-[30px]">
              <img
                className="w-[123px] translate-y-[-72.5px]"
                src={column}
                alt=""
              />
              <div className="translate-y-[-30px]">
                <h3 className="font-bold tracking-[1.3px] text-lg text-center">
                  SPEAKERS
                </h3>
                <div className="flex items-center gap-[13px] justify-center">
                  <h3
                    className="text-[13px] tracking-[1px] hover:text-[#D87D4A] transition-all duration-200 cursor-pointer"
                    onClick={handleSpeker}
                  >
                    SHOP
                  </h3>
                  <button>
                    <img
                      className="w-[5px] h-2.5 self-center mt-1 opacity-50"
                      src={arrowright}
                      alt="Arrow"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F1F1F1] w-[350px] h-[204px] flex justify-center rounded-lg ">
            <div className="mx-auto pb-[30px]">
              <img className="w-[170px] translate-y-[-59px]" src={air} alt="" />
              <div className="translate-y-[-30px]">
                <h3 className="font-bold tracking-[1.3px] text-lg text-center">
                  EARPHONES
                </h3>
                <div className="flex items-center gap-[13px] justify-center">
                  <h3
                    className="text-[13px] tracking-[1px] hover:text-[#D87D4A] transition-all duration-200 cursor-pointer"
                    onClick={handleEarphone}
                  >
                    SHOP
                  </h3>
                  <button>
                    <img
                      className="w-[5px] h-2.5 self-center mt-1 opacity-50"
                      src={arrowright}
                      alt="Arrow"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1110px] mx-auto flex items-center justify-between mb-[200px]">
        <div>
          <h3 className="font-bold text-[40px] w-[445px] text-black mb-[32px]">
            BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO
            GEAR
          </h3>
          <p className="w-[445px] text-[#000000]/50">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div>
          <img src={user} alt="" />
        </div>
      </div>
      {/* ////////////////////////////footer/////////////////////////////// */}
      <div className="bg-[#000000]">
        <div className="max-w-[1110px] mx-auto ">
          <div className="w-[101px] h-1 bg-[#D87D4A] mb-[71px]"></div>
          <div className="flex justify-between pb-[36px]">
            <img src={Logo} alt="" />
            <div className="flex text-white gap-[34px] cursor-pointer">
              <h3
                className="cursor-pointer hover:text-[#D87D4A]  transition-all duration-200"
                onClick={handleHome}
              >
                HOME
              </h3>
              <h3
                className="cursor-pointer hover:text-[#D87D4A]  transition-all duration-200"
                onClick={handleHead}
              >
                HEADPHONES
              </h3>
              <h3
                className="cursor-pointer hover:text-[#D87D4A]  transition-all duration-200"
                onClick={handleSpeker}
              >
                SPEAKERS
              </h3>
              <h3
                className="cursor-pointer hover:text-[#D87D4A]  transition-all duration-200"
                onClick={handleEarphone}
              >
                EARPHONES
              </h3>
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
                <img
                  className="cursor-pointer hover: text-[#D87D4A]"
                  src={face}
                  alt=""
                />
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

export default Speker;
