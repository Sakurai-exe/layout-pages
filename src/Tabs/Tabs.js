import React, { useState } from "react";
import "./Tabs.css";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";
import ThirdTab from "./ThirdTab";
const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");
        const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
        const minSwipeDistance = 50;
     const handleTab1 = () => {
       setActiveTab("tab1");
     };
     const handleTab2 = () => {
       setActiveTab("tab2");
     };
    const handleTab3 = () => {
      setActiveTab("tab3");
    };
    const handleTab4 = () => {
      setActiveTab("tab4");
    };
    const onTouchStart = (e) => {
      setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
      setTouchStart(e.targetTouches[0].clientX);
    };
    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
    const onTouchEnd = () => {
      if (!touchStart || !touchEnd) return;
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;
      if (isLeftSwipe || isRightSwipe)
          console.log("swipe", isRightSwipe ? handleTab1() : handleTab2());
        if (activeTab === "tab2") { 
            if (isLeftSwipe || isRightSwipe)
              console.log("swipe", isRightSwipe ? handleTab1() : handleTab3());
        }
    };
  return (
    <div
      className='Tabs'
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className='outlet'>
              {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
      </div>
    </div>
  );
};
export default Tabs;
