import React, { useState } from "react";
import Style from "./Tabs.module.scss";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";
import ThirdTab from "./ThirdTab";

const Tabs = () => {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 60;
  const downIndex = () => {
    if (index > -2 && index < 1) {
      setIndex(index - 1);
    } else {
      setIndex(index);
    }
  };
  const upIndex = () => {
    if (index < 0) {
      setIndex(index + 1);
    } else {
      setIndex(index);
    }
  };
  const onTouchStart = (e) => {
    setTouchEnd(null); // в противном случае свайп запускается даже при обычных событиях касаниях!
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
      <FirstTab event={downIndex} coefficient={index} changeCoeff={setIndex} />
      <SecondTab />
      <ThirdTab />
    </div>
  );
};
export default Tabs;
