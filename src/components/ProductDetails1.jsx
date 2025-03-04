import React from "react";
import first from "../image/first.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Face from '../image/face.png';
import item from '../image/item.png';
import black from '../image/black.png';

function ProductDetails1() {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);

  function decrement() {
    setCount((prev) => Math.max(0, prev - 1));
  }

  function increment() {
    setCount(count + 1);
  }
  function handleBack() {
    navigate("/headphone");
  }
  return (
    <div>
      <div className="max-w-[1110px] mx-auto">
        <div>
          <h3
            className="font-medium text-[15px] mt-[79px] mb-[56px] opacity-50 cursor-pointer hover:text-[#D87D4A] w-[57px]"
            onClick={handleBack}
          >
            Go back
          </h3>
          <div className="max-w-[1110px] mx-auto flex justify-between items-center mb-[160px]">
            <img
              className="px-[95px] pt-[65px] pb-[108px] bg-[#F1F1F1] rounded-[8px]"
              src={first}
              alt="Headphones"
            />
            <div>
              <h3 className="text-sm text-[#D87D4A] tracking-[10px] font-normal text-[14px] opacity-50 pb-4">
                NEW PRODUCT
              </h3>
              <h3 className="w-[396px] text-[56px] leading-[50px] text-black font-bold pb-[32px]">
                XX99 MARK II HEADPHONES
              </h3>
              <p className="w-[445px] opacity-50 font-medium text-black">
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </p>
              <div className="mt-8 mb-[47px]">
                <h2 className="font-bold text-[18px] tracking-[1.3px]">
                  $ 2,999
                </h2>
              </div>
              {/* ------------- */}
              <div className="flex items-center gap-4">
                <div className="flex items-center py-[15px] px-[15.5px] w-[120px] bg-[#F1F1F1] justify-between">
                  <button
                    className="font-bold h-4px  tracking-[1px] text-black opacity-25 hover:text-[#D87D4A] cursor-pointer"
                    onClick={decrement}
                  >
                    -
                  </button>
                  <h3 className="font-bold  tracking-[1px] text-black">
                    {count}
                  </h3>
                  <button
                    className="font-bold  tracking-[1px] text-black opacity-25 hover:text-[#D87D4A] cursor-pointer"
                    onClick={increment}
                  >
                    +
                  </button>
                </div>
                <button className="py-[15px] px-[30px] bg-[#D87D4A] text-white cursor-pointer hover:bg-[#FBAF85] transition-all duration-200">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
          {/* -------- */}
          <div className="mb-[160px] flex justify-between">
            <div>
              <h2 className="text-[32px] font-bold">FEATURES</h2>
              <p className="w-[635px] mb-[20px] mt-[32px]">
                Featuring a genuine leather head strap and premium earcups,
                these headphones deliver superior comfort for those who like to
                enjoy endless listening. It includes intuitive controls designed
                for any situation. Whether you’re taking a business call or just
                in your own personal space, the auto on/off and pause features
                ensure that you’ll never miss a beat.
              </p>
              <p className="w-[635px]">
                The advanced Active Noise Cancellation with built-in equalizer
                allow you to experience your audio world on your terms. It lets
                you enjoy your audio in peace, but quickly interact with your
                surroundings when you need to. Combined with Bluetooth 5. 0
                compliant connectivity and 17 hour battery life, the XX99 Mark
                II headphones gives you superior sound, cutting-edge technology,
                and a modern design aesthetic.
              </p>
            </div>
            <div>
              <h2 className="text-[32px] font-bold mb-[32px]">IN THE BOXS</h2>
              <div className="flex items-center gap-6 mb-2">
                <h3 className="text-[#D87D4A] font-bold text-[15px]">1x</h3>
                <h3 className="text-black opacity-50 font-bold text-[15px]">Headphone Unit</h3>
              </div>
              <div className="flex items-center gap-6 mb-2">
                <h3 className="text-[#D87D4A] font-bold text-[15px]">2x</h3>
                <h3 className="text-black opacity-50 font-bold text-[15px]">Replacement Earcups</h3>
              </div>
              <div className="flex items-center gap-6 mb-2">
                <h3 className="text-[#D87D4A] font-bold text-[15px]">1x</h3>
                <h3 className="text-black opacity-50 font-bold text-[15px]">User Manual</h3>
              </div>
              <div className="flex items-center gap-6 mb-2">
                <h3 className="text-[#D87D4A] font-bold text-[15px]">1x</h3>
                <h3 className="text-black opacity-50 font-bold text-[15px]">3.5mm 5m Audio Cable</h3>
              </div>
              <div className="flex items-center gap-6">
                <h3 className="text-[#D87D4A] font-bold text-[15px]">1x</h3>
                <h3 className="text-black opacity-50 font-bold text-[15px]">Travel Bag</h3>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mb-[160px]">
            <div className="gap-4">
              <img src={Face} className="rounded-[8px] mb-8" alt="" />
              <img src={item} className="rounded-[8px]" alt="" />
            </div>
            <img src={black} className="rounded-[8px]" alt="" />
          </div>
          {/* ----------------- */}
          <div>
            <h2>YOU MAY ALSO LIKE</h2>
            <div>
              <div>
                <div>
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails1;
