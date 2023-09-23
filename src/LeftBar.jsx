import React from "react";

function LeftBar() {
  return (
    <div className="pt-3 pl-10 items-center text-black font-medium text-md">
      <h1>Menu</h1>


      <div className="home grid gap-1 py-2 text-gray-600 font-normal not-italic">
        <div className="pl-6">
        <div className="book flex items-center text-black space-y-2 space-x-5 mb-2">
          <img className="w-5 h-5 mt-1" src="./images/home.png" />
          <a href="#">Home</a>
        </div>

        <div className="book flex items-center space-y-2 space-x-5 mb-2">
          <img className="w-5 h-5 mt-1" src="./images/Heart.png" />
          <a href="#">Bookmarks</a>
        </div>

        <div className="book flex items-center space-y-2 space-x-5 mb-2">
          <img className="w-5 h-5 mt-1" src="./images/Messages.png" />
          <a href="#">Messages</a>
        </div>

        <div className="book flex items-center space-y-2 space-x-5 mb-2">
          <img className="w-6 h-6 mt-1" src="./images/Noti.png" />
          <a href="#">Notifications</a>
        </div>

        <div className="book flex items-center space-y-2 space-x-5 mb-2">
          <img className="w-5 h-5 mt-1" src="./images/Settings.png" />
          <a href="#">Settings </a>
        </div>

        <div className=" flex items-center space-y-2 space-x-5 mb-2">
          <img className="w-5 h-5 mt-1" src="./images/User.png" />
          <a href="#"> Profile </a>
        </div>

        <div className="py-3">
          <button className="w-20 h-8 text-white ml-12 rounded text-base bg-blue-700">
            Add post
          </button>
        </div>
          </div>
        <div className="ml-1 mb-1 text-black not-italic font-medium">
          <h1> ADS </h1>
        </div>

        <span>
          <img className="w-44" src="./images/Ads.png"/></span>
        <div className="flex items-center space-y-1 space-x-2 mb-2">
          <img
            className="w-4 h-4 flex-shrink-0 mt-2"
            src="./images/Emoji (1).png"
          />
          <a className="items-center w-65 h-6 text-black text-xs font-medium">
            How to improve business in <br/> social media
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
