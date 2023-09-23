import React from "react";
import NavContent from "./NavContent.json";
import "./App.css";

function NavBar() {
  return (
    <>
      <div className="flex flex-col mt-4">
        <div style={{ width: "80%", margin: "0px auto" }}>
          {NavContent &&
            NavContent.map((navItem) => {
              return (
                <>
                  <div className="border border-gray-400 rounded-2xl">
                    <div className="flex ml-4 justify-between items-center mt-4 relative mr-4">
                    
                        <img
                          className="outline-dotted outline-2 absolute outline-offset-1 outline-rose-400 w-10 h-10 flex-shrink-0 rounded-full"
                          src={navItem.image}
                          alt={navItem.name}
                        />

                        <div className="flex flex-col ml-10">
                          <span className="ml-3 font-medium text-sm">
                            {navItem.name}
                          </span>
                          <span className="ml-3 font-normal text-xs text-gray-600">
                            {navItem.u_id}
                          </span>
                        </div>
                      

                      <div className="w-5 h-5">
                        <button>
                        <img
                          className="three-dot"
                          src={navItem.icon}
                          alt={navItem.name}
                        />
                        </button>
                      </div>
                    </div>
                    <div className="not-italic text-xs my-3 ml-4 font-normal">
                      {navItem.description}
                      <span className="text-indigo-700 text-xs not-italic font-normal">
                        {navItem.description2}
                      </span>
                    </div>
                    <div>
                      <img
                        className="content image"
                        src={navItem.content}
                        alt={navItem.name}
                      />

                      <div
                        style={{
                          borderRadius: "0rem 0rem 0.9375rem 0.9375rem",
                          background: "rgba(0, 0, 0, 0.2)",
                          backdropFilter: "blur(40px)",
                          marginTop: "-21px",

                        }}
                        className="flex flex-row justify-between">
                      
                        <div className="flex items-center text-white text-xs font-normal mx-6 my-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M22 8.37251C21.9339 3.26607 15.1583 0.70261 12.0164 5.68937C12.011 5.73155 11.989 5.73155 11.9836 5.68937C8.84208 0.701727 2.0656 3.26619 2 8.37251C2 12.6056 5.11427 14.5795 11.9809 20.9915C11.9823 21.0028 12.0189 21.0028 12.0203 20.9915C18.8849 14.5795 22 12.606 22 8.37251Z"
                              fill="#FF0000"
                            />
                          </svg>
                          <span className="flex pl-1">{navItem.text1}</span>
                        </div>

                        <div className="flex items-center text-white text-xs mx-6 font-normal">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M21.9784 11.3905C21.6889 6.36419 17.662 2.33787 12.6349 2.02208C9.79231 1.83778 7.10768 2.8116 5.05473 4.78528C3.08074 6.70629 1.94907 9.41682 2.00176 12.2063C2.10696 17.4695 6.4761 21.8379 11.7138 21.9958C13.5299 22.0485 15.3196 21.6012 16.8988 20.7063L21.3205 21.9694C21.3732 21.9959 21.4257 21.9959 21.4784 21.9959C21.61 21.9959 21.7679 21.9432 21.8468 21.838C21.9785 21.7064 22.0312 21.4958 21.9785 21.3117L20.6098 17.0749C21.6363 15.3642 22.1101 13.3906 21.9785 11.3907L21.9784 11.3905ZM19.6622 16.601C19.5306 16.8116 19.5043 17.0484 19.5833 17.2852L20.6887 20.68L17.1882 19.68C16.9249 19.6011 16.6618 19.6273 16.425 19.7852C15.0038 20.5747 13.3983 20.9958 11.7663 20.9431C7.08137 20.8115 3.15971 16.8906 3.08075 12.18C3.02806 9.67999 4.02827 7.25889 5.84439 5.52205C7.50259 3.91678 9.68718 3.0485 12.0032 3.0485C12.1876 3.0485 12.398 3.0485 12.5823 3.07475C17.0831 3.36423 20.6625 6.96945 20.9257 11.4695C21.0311 13.2853 20.6099 15.0484 19.6624 16.6011L19.6622 16.601Z"
                              fill="white"
                            />
                          </svg>
                          <span className="pl-1">{navItem.text2}</span>
                        </div>

                        <div className="flex items-center mx-6 my-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="16"
                            viewBox="0 0 16 20"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.99998 13.4124C8.14826 13.4124 8.29629 13.4572 8.4231 13.5469L14.5514 17.8921V2.77743C14.5514 2.03356 13.9439 1.42821 13.1972 1.42821H2.80314C2.05616 1.42821 1.44867 2.03357 1.44867 2.77743V17.8921L7.57725 13.5469C7.7038 13.4572 7.85208 13.4124 8.00012 13.4124H7.99998ZM15.2759 19.9997C15.1269 19.9997 14.9786 19.9543 14.8528 19.8654L7.99992 15.0065L1.14707 19.8654C0.926535 20.0218 0.635026 20.044 0.393814 19.9209C0.152066 19.7989 0 19.5532 0 19.2854V2.77797C0 1.24635 1.25747 0 2.80296 0H13.197C14.7423 0 16 1.24635 16 2.77797V19.2854C16 19.5532 15.8479 19.7989 15.6059 19.9209C15.5021 19.9735 15.3882 19.9997 15.2758 19.9997"
                              fill="white"
                            />
                          </svg>
                        </div>

                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs font-normal mt-2 mb-6 ml-3">
                    {navItem.info}
                  </p>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default NavBar;
