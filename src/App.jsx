import React from "react";
import "./App.css";
import Header from "./Header";
import LeftBar from "./LeftBar";
import RightSideBar from "./RightSideBar";
import NavBar from "./NavBar";
import TopBar from "./TopBar";

function App() {
  return (
    <div className="bg-red-200">
      <Header />
      <div className="flex justify-between" style={{ width: "100%"}}>
        <div className="flex" style={{ width: "22%"}}>
          <LeftBar />
        </div>
        <div>
          <div className="h-[563px] w-[630px] overflow-y-scroll scrollbar-hidden">
        <TopBar/>
        <NavBar style={{ width: "44%"}}/>
        </div>
        </div>
        <RightSideBar style={{ width: "33%"}}/>
        
      </div>
      
    </div>
  );
}

export default App;