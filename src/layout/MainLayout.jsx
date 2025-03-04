import React from "react";
import Logo from "../image/Logo.svg";
import Bin from "../image/bin.svg";
import { NavLink, useNavigate } from "react-router-dom";
import Headphone from "../components/Headphone";

function MainLayout({ children }) {

  const navigate = useNavigate();

  // function handleHead(){
  //   navigate("/headphone")
  // }
  // function handleSpeker(){
  //   navigate("/speker")
  // }
  // function handleEarphone(){
  //   navigate("/earphone")
  // }
  // function handleHome(){
  //   navigate("/")
  // }
  return (
    <div>
      <div className="bg-[#141414]">
        <div className=" max-w-[1110px] mx-auto ">
          <div className="flex items-center justify-between py-9">
            <div>
              <img className="cursor-pointer" src={Logo} alt="" />
            </div>
            <ul className="flex text-white gap-[34px] cursor-pointer list-none">
              <NavLink to={'/'} className="cursor-pointer hover:text-[#D87D4A]  transition-all duration-200" >HOME</NavLink>
              <NavLink to={'/headphone'} className="cursor-pointer hover:text-[#D87D4A]  transition-all duration-200" >HEADPHONES</NavLink>
              <NavLink to={'/speker'} className="cursor-pointer hover:text-[#D87D4A]  transition-all duration-200" >SPEAKERS</NavLink>
              <NavLink to={'/earphone'} className="cursor-pointer hover:text-[#D87D4A]  transition-all duration-200" >EARPHONES</NavLink>
            </ul>
            <div>
              <img className="cursor-pointer" src={Bin} alt="" />
            </div>
          </div>
        </div>
      </div>
      <p>{children}</p>
    </div>
  );
}

export default MainLayout;
