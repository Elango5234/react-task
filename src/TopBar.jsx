import React, { useRef, useState } from "react";
import TopContent from "./TopContent.json";

function TopBar() {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Set the number of items to show at once
  const itemsToShow = 5;
  const scrollStep = 500; // Adjust as needed

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= scrollStep;
      setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsToShow, 0));
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollStep;
      setCurrentIndex((prevIndex) =>
        Math.min(prevIndex + itemsToShow, TopContent.length - itemsToShow)
      );
    }
  };

  // Automatically advance the slideshow
  // useEffect(() => {
  //   const Scroll = setInterval(scrollRight, 100000000000); // Adjust the interval as needed

  //   return () => {
  //     clearInterval(Scroll);
  //   };
  // }, []);

  return (
    <div>
      <div style={{ width: "78%", margin: "0px auto" }}>
        <div className="maindiv border border-gray-400 rounded-xl flex items-center h-28 mt-2">
          <button onClick={scrollLeft} className="pl-2">
            <img
              className="w-4"
              src="./images/TopArrowleft.png"
              alt="LeftArrow"
            />
          </button>
          

          <div className="ml-10 flex">
  <div ref={scrollContainerRef} className="-space-x-2 inline-flex items-center">
    {TopContent.slice(currentIndex, currentIndex + itemsToShow).map((topcontent) => (
        <div className="flex-col w-[90px] h-20 relative -mx-3 pr-4"> 
      <div className="" key={currentIndex}>
      </div>
        <div className="text-center absolute">
          <img className="outline-dashed outline-2 outline-offset-1 rounded-full outline-rose-400 w-14 h-14 max-w-full" src={topcontent.image}/>
          <div className="text-xs mt-4 font-medium">
            <span>{topcontent.text}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


          <button onClick={scrollRight} className="ml-auto pr-2">
            <img
              className="w-4 r-0"
              src="./images/TopArrowright.png"
              alt="Right Arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TopBar;
