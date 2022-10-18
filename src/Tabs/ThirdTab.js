import React, { useState } from "react";
import Style from "./ThirdTab.module.scss";
import Bottle from "../pics/ThirdTab/bottle.png";
import Icon1 from "../pics/ThirdTab/icon1.png";
import Icon2 from "../pics/ThirdTab/icon2.png";
import Buble1 from "../pics/ThirdTab/1.png";
import Buble2 from "../pics/ThirdTab/2.png";
import Buble3 from "../pics/ThirdTab/3.png";
import Buble4 from "../pics/ThirdTab/4.png";
import Buble5 from "../pics/ThirdTab/5.png";
import Buble6 from "../pics/ThirdTab/6.png";
import Buble7 from "../pics/ThirdTab/7.png";
import Buble8 from "../pics/ThirdTab/8.png";
import Btn from "../pics/ThirdTab/btn.png";
import BtnClose from "../pics/ThirdTab/btn_close.png";
import BackGround from "../pics/ThirdTab/bg.png";
import PrevButton from "../pics/ThirdTab/btn_1.png";
import NextButton from "../pics/ThirdTab/btn_next.png";

const ThirdTab = () => {
  const [popup, setPopup] = useState({
    display: "none",
  });
  const [background, setBackground] = useState({
    backgroundImage: `url(${BackGround})`,
  });
  const [content1, setContent1] = useState({
    display: "block",
  });
  const [content2, setContent2] = useState({
    display: "none",
  });
  const [ellipse1, setEllipse1] = useState({
    background: "rgb(252, 109, 169)",
    border: "0",
  });
  const [ellipse2, setEllipse2] = useState({
    background: "rgb(255, 255, 255)",
  });

  const handlePopUpOn = () => {
    setPopup({
      display: "block",
    });
    setBackground({
      backgroundImage: `linear-gradient(rgba(0, 0, 50, 0.5), rgba(0, 0, 100, 0.5)), url(${BackGround})`,
    });
  };
  const handlePopUpX = () => {
    setPopup({
      display: "none",
    });
    setBackground({
      backgroundImage: `url(${BackGround})`,
    });
  };

  const handleNextBtn = () => {
    setContent1({
      display: "none",
    });
    setContent2({
      display: "block",
    });
    setEllipse1({
      background: "rgb(255, 255, 255)",
    });
    setEllipse2({
      background: "rgb(252, 109, 169)",
      border: "0",
    });
  };
  const handlePrevBtn = () => {
    setContent1({
      display: "block",
    });
    setContent2({
      display: "none",
    });
    setEllipse1({
      background: "rgb(252, 109, 169)",
      border: "0",
    });
    setEllipse2({
      background: "rgb(255, 255, 255)",
    });
  };
  return (
    <div className={Style.ThirdTab} style={background}>
      <div className={Style.hello}>Ключевое сообщение</div>
      <div className={Style.Brend}>
        Brend<span className={Style.Brend__XY}>xy</span>
      </div>
      <div className={Style.leftBlock}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates nam
        cumque amet
      </div>
      <div className={Style.rightBlock}>Lorem ipsum dolor, sit</div>
      <div className={Style.Bottle}>
        <img src={Bottle} alt='background detail img' />
      </div>
      <div className={Style.Buble1}>
        <img src={Buble1} alt='background detail img' />
      </div>
      <div className={Style.Buble2}>
        <img src={Buble2} alt='background detail img' />
      </div>
      <div className={Style.Buble3}>
        <img src={Buble3} alt='background detail img' />
      </div>
      <div className={Style.Buble4}>
        <img src={Buble4} alt='background detail img' />
      </div>
      <div className={Style.Buble5}>
        <img src={Buble5} alt='background detail img' />
      </div>
      <div className={Style.Buble6}>
        <img src={Buble6} alt='background detail img' />
      </div>
      <div className={Style.Buble7}>
        <img src={Buble7} alt='background detail img' />
      </div>
      <div className={Style.Buble8}>
        <img src={Buble8} alt='background detail img' />
      </div>

      <div className={Style.Icon1}>
        <img src={Icon1} alt='background detail img' />
      </div>
      <div className={Style.Icon2}>
        <img src={Icon2} alt='background detail img' />
      </div>
      <div className={Style.Btn} onClick={handlePopUpOn}>
        <img src={Btn} alt='background detail img' />
      </div>
      <div className={Style.PopUp} style={popup}>
        <div className={Style.PopUpHello}>Преимущества</div>
        <img
          className={Style.xIcon}
          src={BtnClose}
          alt='X icon'
          onClick={handlePopUpX}
        />
        <div className={Style.PopUpContent1} style={content1}>
          <div>
            <span className={Style.PopUpNum}>01</span> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div>
            <span className={Style.PopUpNum}>02</span>
            <br />
            Lorem ipsum dolor sit amet.
          </div>
          <div>
            <span className={Style.PopUpNum}>03</span>
            <br />
            Lorem ipsum dolor sit amet.
          </div>
        </div>
        <div className={Style.PopUpContent2} style={content2}>
          <div>
            <span className={Style.PopUpNum}>04</span> <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </div>
          <div>
            <span className={Style.PopUpNum}>05</span>
            <br />
            Lorem ipsum dolor sit amet.
          </div>
          <div>
            <span className={Style.PopUpNum}>06</span>
            <br />
            Lorem ipsum dolor sit amet.
          </div>
        </div>
        <div className={Style.PopUpNavButtons}>
          <img src={PrevButton} alt='' onClick={handlePrevBtn} />
          <span className={Style.Ellipse1} style={ellipse1}></span>
          <span className={Style.Ellipse2} style={ellipse2}></span>
          <img src={NextButton} alt='' onClick={handleNextBtn} />
        </div>
      </div>
    </div>
  );
};
export default ThirdTab;
