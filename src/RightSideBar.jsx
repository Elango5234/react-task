import React from "react";

import Follower from "./Follower.json";
import Suggest from "./SuggestFollowers.json";

const RightSideBar = () => {
  const handleFollow = (props) => {
    console.log(`You Followed ${props.name}`);
  };

  const handleAccept = (props) => {
    console.log(`You and ${props.name} are now Connected`);
  };

  return (
    <>
      <div className="pt-14 pr-8 pl-12">
        <div className="rounded-xl border border-gray-400 pl-10 pt-2 pr-2">
          <div className="heading headingFollow items">
            <div className="flex-shrink-0 mr-4">
              <div className="font-medium text-md pr-4 pb-3">
                Recent Followers
              </div>
              <div className="ml-4 items-center">
                {Follower &&
                  Follower.map((followers) => {
                    return (
                      <div
                        className="followers font-medium text-normal grid grid-cols-[200px,auto] items-center mb-2"
                        key={followers.id}
                      >
                        <div className="flex items-center">
                          <img
                            className="followerImage w-10"
                            src={followers.prof_image}
                            alt={followers.id}
                          />
                          <div className="followerName ml-3">
                            <p className="flex flex-col">
                              <span className="text-sm font-medium pt-2">
                                {followers.name}
                              </span>
                              <span className="userId text-gray-600 text-xs font-normal">
                                @{followers.user_id}
                              </span>
                            </p>
                          </div>
                        </div>
                        <button
                          className=" w-[55px] h-[27px]  bg-blue-700 rounded text-white text-sm font-normal"
                          onClick={() => handleAccept(followers)}
                        >
                          Accept
                        </button>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>

          <div className="heading headingSuggest items-center">
            <div className="items-center text-md pr-4 font-medium mt-4 mb-3">
              Suggested For You
            </div>
            <div className="ml-4">
              {Suggest &&
                Suggest.map((suggest) => {
                  return (
                    <div
                      className="followers items-center grid grid-cols-[200px,auto] mb-4"
                      key={suggest.id}
                    >
                      <div className="flex items-center">
                        <img
                          className="followerImage w-10 "
                          src={suggest.prof_image}
                          alt={suggest.id}
                        />
                        <div className="followerName ml-3 font-medium">
                          <p className="flex flex-col">
                            <span className="font-medium text-sm">
                              {suggest.name}
                            </span>
                            <span className="userId text-xs font-normal text-gray-600">
                              @{suggest.user_id}
                            </span>
                          </p>
                        </div>
                      </div>
                      <button
                        className=" w-[55px] h-[27px]  bg-blue-700 rounded text-white text-sm font-normal"
                        onClick={() => handleFollow(suggest)}
                      >
                        Follow
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSideBar;
