import React from "react";
import column from "../image/column.png";
import air from "../image/air.png";
import shead from "../image/shead.png";
import arrowright from "../image/arrowright.svg";
import { useNavigate } from "react-router-dom";

function Middle() {

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
    <div>
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
    </div>
  );
}

export default Middle;
