import React,{ useContext,useState} from 'react'
import ClassContext from "../context/information/classContext"
import HomeIcon from "@material-ui/icons/Home";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import {BiHomeAlt} from "react-icons/bi";
import { MdLiveTv } from "react-icons/md";

const SideBar = () => {
    const [sidebarClass,setSidebarClass]=useState("sidebar__drawer")
    const changeToLarge=()=>{
        setSidebarClass("sidebar__drawer__long")
    }
    const changeToSmall = () => {
      setSidebarClass("sidebar__drawer");
    };
    return (
      <div
        className={sidebarClass}
        onMouseEnter={changeToLarge}
        onMouseLeave={changeToSmall}
      >
        <div>
          <BiHomeAlt className="sidebar__icons" />
        
        </div>
   <div>
   
   <MdLiveTv className="sidebar__icons" />
   </div>
       
      </div>
    );
}

export default SideBar
