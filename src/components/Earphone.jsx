import React from "react";
import first from "../image/ea1.png";
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
import Fotter from "../layout/Fotter";
import Middle from '../layout/Middle'

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
          <h2 className="text-white font-bold text-[40px] EARPHONES">EARPHONES</h2>
        </div>
      </div>

      <div className="max-w-[1110px] mx-auto flex justify-between items-center mb-[80px]">
        <img
          className="px-[122px] py-[131px] bg-[#F1F1F1] rounded-[8px]"
          src={first}
          alt="Speaker"
        />
        <div className="pt-[128px]">
          <h3 className="text-sm text-[#D87D4A] tracking-[10px] font-normal text-[14px] opacity-50 pb-4">
            NEW PRODUCT
          </h3>
          <h3 className="w-[445px] text-[56px] leading-[50px] text-black font-bold pb-[32px]">
            YX1 WIRELESS EARPHONES
          </h3>
          <p className="w-[445px] opacity-50 font-medium text-black pb-10">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <button className="py-[15px] px-[30px] bg-[#D87D4A] text-white mb-[158px]  cursor-pointer hover:bg-[#FBAF85] transition-all duration-200">
            SEE PRODUCT
          </button>
        </div>
      </div>

      <Middle />
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

export default Speker;
