import React from "react";
import "./FirstTab.scss";
import Header from "../pics/FirstTab/global.png"
import Layer7 from "../pics/FirstTab/Layer 7.png";
import Layer5 from "../pics/FirstTab/Layer 5.png";
import Layer4C2 from "../pics/FirstTab/Layer 4 copy 2.png";
import Pink_sperm1 from "../pics/FirstTab/pink_sperm_1.png";
import Layer8 from "../pics/FirstTab/Layer 8.png";
import Bakti1 from "../pics/FirstTab/bakti_1.png";
import Btn from "../pics/FirstTab/btn.png"
import Pink_sperm from "../pics/FirstTab/pink_sperm.png";
import Layer4C from "../pics/FirstTab/Layer 4 copy.png";
import Layer4 from "../pics/FirstTab/Layer 4.png";
import Shape1 from "../pics/FirstTab/Shape1.png";


const FirstTab = (props) => {
  return (
    <div className='FirstTab'>
            <header>
              <img src={Header} alt='header image' />
            </header>
      <div className='Layer7'>
        <img src={Layer7} alt='background detail img' srcset='' />
      </div>
      <div className='Layer5'>
        <img src={Layer5} alt='background detail img' srcset='' />
      </div>
      <div className='Layer4C2'>
        <img src={Layer4C2} alt='background detail img' srcset='' />
      </div>
      <div className='Pink_sperm1'>
        <img src={Pink_sperm1} alt='background detail img' srcset='' />
      </div>
      <div className='Layer8'>
        <img src={Layer8} alt='background detail img' srcset='' />
      </div>
      <div className='Bakti1'>
        <img src={Bakti1} alt='background detail img' srcset='' />
      </div>
      <div className='hello'>Привет, </div>
      <div className='title'>
        Это <span className='title__extraBold'>не</span>
        <br /> коммерческое задание
      </div>
      <div className='button' onClick={props.event}>
        <button>
          <img src={Btn} alt='btn img' />
        </button>
      </div>
      <div className='Pink_sperm'>
        <img src={Pink_sperm} alt='background detail img' srcset='' />
      </div>
      <div className='Layer4C'>
        <img src={Layer4C} alt='background detail img' srcset='' />
      </div>
      <div className='Layer4'>
        <img src={Layer4} alt='background detail img' srcset='' />
      </div>
      <div className='Shape1'>
        <img src={Shape1} alt='background detail img' srcset='' />
      </div>
    </div>
  );
};
export default FirstTab;
