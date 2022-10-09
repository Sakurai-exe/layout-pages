import React, { useState } from "react";
import Style from "./Tabs.module.scss";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";
import ThirdTab from "./ThirdTab";
import FourthTab from "./FourthTab";

const Tabs = () => {
const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 90;
  
const downIndex = () => {
     if (index > -3 && index < 1) {
       setIndex(index - 1);
     } else {
       setIndex(index);
     }
  console.log(index);
   };
  const upIndex = () => {
    if (index > -4 && index < 0) {
      setIndex(index + 1);
    } else {
      setIndex(index);
    }
    console.log(index);
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
    if (isLeftSwipe || isRightSwipe) isRightSwipe ? upIndex() : downIndex();
  };
  let style = { transform: `translateX(calc(${index}*(100%))` };
  return (
    <div
      className={Style.Tabs}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={style}
    >
      <FirstTab event={downIndex} coefficient={index} />
      <SecondTab />
      <ThirdTab />
      <FourthTab />
    </div>
  );
};
export default Tabs;
