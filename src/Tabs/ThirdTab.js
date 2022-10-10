import React from "react";
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

const ThirdTab = () => {
  return (
    <div className={Style.ThirdTab}>
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
      <div className={Style.Btn}>
        <img src={Btn} alt='background detail img' />
      </div>
    </div>
  );
};
export default ThirdTab;
