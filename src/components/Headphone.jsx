import React from "react";
import first from "../image/first.png";
import second from "../image/second.png";
import third from "../image/third.png";
import arrowright from "../image/arrowright.svg";
import column from "../image/column.png";
import air from "../image/air.png";
import user from "../image/user.png";
import { useNavigate } from "react-router-dom";
import shead from "../image/shead.png";
import Fotter from "../layout/Fotter";
import Middle from "../layout/Middle";
// import Bitmap from '../image/Btimap.png'

function Headphone() {
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
  function handleSeeProduct(id) {
    if (id===1) {
      navigate(`/product/1`);
    }
    if (id===2) {
      navigate(`/product/2`);
    }
    if (id===3) {
      navigate(`/product/3`);
    }
  }
  return (
    <div>
      <div className="bg-[#141414]">
        <div className="flex text-center justify-center items-center py-[98px] mb-[160px]">
          <h2 className="text-white font-bold text-[40px]">HEADPHONES</h2>
        </div>
      </div>

      <div className="max-w-[1110px] mx-auto flex justify-between items-center mb-[80px]">
        <img
          className="px-[95px] pt-[65px] pb-[108px] bg-[#F1F1F1] rounded-[8px]"
          src={first}
          alt="Headphones"
        />
        <div className="pt-[128px]">
          <h3 className="text-sm text-[#D87D4A] tracking-[10px] font-normal text-[14px] opacity-50 pb-4">
            NEW PRODUCT
          </h3>
          <h3 className="w-[396px] text-[56px] leading-[50px] text-black font-bold pb-[32px]">
            XX99 MARK II HEADPHONES
          </h3>
          <p className="w-[445px] opacity-50 font-medium text-black pb-10">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <button
            className="py-[15px] px-[30px] bg-[#D87D4A] text-white mb-[158px]  cursor-pointer hover:bg-[#FBAF85] transition-all duration-200"
            onClick={() => handleSeeProduct(1)}
          >
            SEE PRODUCT
          </button>
        </div>
      </div>

      <div className="max-w-[1110px] mx-auto flex justify-between items-center mb-[80px]">
        <div className="pt-[128px]">
          <h3 className="w-[396px] text-[56px] leading-[50px] text-black font-bold pb-[32px]">
            XX99 MARK I HEADPHONES
          </h3>
          <p className="w-[445px] opacity-50 font-medium text-[15px] text-black pb-10">
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          <button
            className="py-[15px] px-[30px] bg-[#D87D4A] text-white mb-[158px] cursor-pointer hover:bg-[#FBAF85] transition-all duration-200"
            onClick={() => handleSeeProduct(2)}
          >
            SEE PRODUCT
          </button>
        </div>
        <img
          className="px-[122px] pt-[65px] pb-[108px] bg-[#F1F1F1] rounded-[8px]"
          src={second}
          alt="Headphones"
        />
      </div>
      <div className="max-w-[1110px] mx-auto flex justify-between items-center mb-[80px]">
        <img
          className="px-[83px] pt-[83px] pb-[88px] bg-[#F1F1F1] rounded-[8px]"
          src={third}
          alt="Headphones"
        />
        <div className="pt-[128px]">
          <h3 className="w-[396px] text-[56px] leading-[50px] text-black font-bold pb-[32px]">
            XX59 HEADPHONES
          </h3>
          <p className="w-[445px] opacity-50 font-medium text-black pb-10">
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
          <button
            className="py-[15px] px-[30px] bg-[#D87D4A] text-white mb-[158px]  cursor-pointer hover:bg-[#FBAF85] transition-all duration-200"
            onClick={() => handleSeeProduct(3)}
          >
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
      <Fotter/>
    </div>
  );
}

export default Headphone;
