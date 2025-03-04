import React from "react";
import Bitmap from "../image/Bitmap.png";
import aircharge from "../image/aircharge.png";
import user from "../image/user.png";
import { useNavigate } from "react-router-dom";
import Fotter from "../layout/Fotter";
import Middle from "../layout/Middle";
import head from "../image/head.png";
import spiker from "../image/spiker.png";

function Home({}) {
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
  return (
    ////////////////hero//////////////////////////
    <div>
      <div className="bg-[#121212]">
        <div className="max-w-[1110px] mx-auto ">
          <div>
            <div className="bg-[#979797] h-[1px]"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="pt-[128px]">
              <div>
                <h3 className="text-sm tracking-[10px] text-white font-normal opacity-50 pb-6">
                  NEW PRODUCT
                </h3>
                <h3 className="w-[396px] text-[56px] text-white font-bold pb-6">
                  XX99 MARK II HEADPHONES
                </h3>
                <p className="w-[349px] opacity-75 font-medium text-white pb-10">
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
                </p>
              </div>
              <div>
                <button
                  className="py-[15px] px-[30px] bg-[#D87D4A] text-white mb-[158px] cursor-pointer hover:bg-[#FBAF85] transition-all duration-200"
                  onClick={handleHead}
                >
                  SEE PRODUCT
                </button>
              </div>
            </div>
            <div>
              <img src={head} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* ///////////////////////////////section////////////////////////// */}
      <div>
        <Middle />
      </div>
      {/* /////////////////section//////////////////////////////// */}
      <div>
        <div className="max-w-[1110px] mx-auto bg-[#D87D4A] mb-12 rounded-md">
          <div className="flex items-center text-white">
            <div>
              <img
                src={spiker}
                className="w-[410px] ml-[117px] mr-[138px]"
                alt=""
              />
            </div>
            <div>
              <h2 className="w-[261px] text-[56px] tracking-[2px] pt-6">
                ZX9 SPEAKER
              </h2>
              <p className="w-[349px] opacity-75">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <button
                className="py-[15px] px-[30px] bg-black text-white mt-10 hover:bg-[#4C4C4C] cursor-pointer transition-all duration-200"
                onClick={handleSpeker}
              >
                See Product
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ////////////////////////////////////section//////////////////////////////// */}
      <div
        className=" max-w-[1110px] mb-[48px]  mx-auto relative flex items-center rounded-lg shadow-md"
        style={{ backgroundImage: `url(${Bitmap})` }}
      >
        <div className="absolute right-0 w-1/2 h-full"></div>
        <div className="relative z-10 pl-[95px] py-[101px]">
          <h2 className="text-[28px] w-[202px] font-bold text-gray-800">
            ZX7 SPEAKER
          </h2>
          <button
            className="cursor-pointer mt-4 px-[30px] py-[15px] border border-black text-black text-[13px] font-bold hover:bg-black hover:text-white transition-all duration-200"
            onClick={handleSpeker}
          >
            SEE PRODUCT
          </button>
        </div>
      </div>
      {/* ///////////////////section/////////////////////// */}
      <div className="max-w-[1110px] mx-auto mb-[200px] flex justify-between ">
        <img src={aircharge} alt="" />
        <div className="py-[101px] pl-[95px] pr-[198px] bg-[#f1f1f1]/100  rounded-[8px]">
          <h3 className="text-[28px] font-bold mb-[32px]">YX1 EARPHONES</h3>
          <button
            className="cursor-pointer py-[15px] px-[30px] border text-black border-black  hover:bg-black hover:text-white transition-all duration-200"
            onClick={handleEarphone}
          >
            See Product
          </button>
        </div>
      </div>
      {/* /////////////section////////////////////// */}
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
      <Fotter />
    </div>
  );
}

export default Home;
