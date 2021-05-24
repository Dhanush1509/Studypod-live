import React, { useContext } from "react";
import ClassContext from "../context/information/classContext";
import Table from "./Table"
export default function CenteredTabs() {
  const { setTableIndex, tableIndex,classesInState} = useContext(ClassContext);
  return classesInState && classesInState.classes ? (
    <>
      {" "}
      <div className="tab" style={{ marginTop: "30px" }}>
        <div className="tab__left">
          <div
            style={{
              paddingTop: " 13px",
              cursor: " pointer",
              height: " 100%",
              width: "160px",

              paddingBottom: " 6px",
            }}
            className={tableIndex === 1 ? "activeTabs" : "tab__items"}
            onClick={() => {
              setTableIndex(1);
            }}
          >
            Live Classes ({classesInState.classes.current?.length})
          </div>
          <div
            style={{
              width: " 160px",
              paddingTop: " 13px",
              cursor: " pointer",
              height: " 100%",

              paddingBottom: " 6px",
            }}
            className={tableIndex === 2 ? "activeTabs" : "tab__items"}
            onClick={() => {
              setTableIndex(2);
            }}
          >
            Past Classes ({classesInState.classes.past?.length})
          </div>
          <div
            style={{
              width: " 160px",
              paddingTop: " 13px",
              cursor: " pointer",
              height: " 100%",
              paddingBottom: " 6px",
            }}
            className={tableIndex === 3 ? "activeTabs" : "tab__items"}
            onClick={() => {
              setTableIndex(3);
            }}
          >
            Upcoming Classes ({classesInState.classes.upcoming?.length})
          </div>
        </div>
      </div>
      <>
       
      </>
      {tableIndex > 0 ? <Table /> : <></>}
    </>
  ) : (
    <></>
  );
}
