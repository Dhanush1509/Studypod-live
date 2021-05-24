import React,{useContext} from "react";
import ClassContext from "../context/information/classContext" 


export default function CenteredTabs() {

const {setTabIndex,tabIndex}=useContext(ClassContext)
  return (
    <div className="tab">
      <div className="tab__left">
        <div
          style={{
            paddingTop: " 13px",
            cursor: " pointer",
            height: " 100%",
            width: "120px",

            paddingBottom: " 6px",
          }}
          className={tabIndex === 1 ? "activeTabs" : "tab__items"}
          onClick={() => {
            setTabIndex(1);
          }}
        >
          Class
        </div>
        <div
          style={{
            width: " 120px",
            paddingTop: " 13px",
            cursor: " pointer",
            height: " 100%",

            paddingBottom: " 6px",
          }}
          className={tabIndex === 2 ? "activeTabs" : "tab__items"}
          onClick={() => {
            setTabIndex(2);
          }}
        >
          Chapter
        </div>
        <div
          style={{
            width: " 120px",
            paddingTop: " 13px",
            cursor: " pointer",
            height: " 100%",

            paddingBottom: " 6px",
          }}
          className={tabIndex === 3 ? "activeTabs" : "tab__items"}
          onClick={() => {
            setTabIndex(3);
          }}
        >
          Course
        </div>
      </div>
      <div className="tab__right">
        <span className="tab__or">OR</span>
        <button className="tab__button">CREATE NEW CLASS</button>
      </div>
    </div>
  );
}


