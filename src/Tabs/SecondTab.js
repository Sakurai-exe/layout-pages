import React, { useRef, useState } from "react";
import Style from "./SecondTab.module.scss";
import Layer3C6 from "../pics/SecondTab/Layer 3 copy 6.png";
import Layer3C2 from "../pics/SecondTab/Layer 3 copy 2.png";
import Layer3C4 from "../pics/SecondTab/Layer 3 copy 4.png";
import Layer3C3 from "../pics/SecondTab/Layer 3 copy 3.png";
import Layer3C5 from "../pics/SecondTab/Layer 3 copy 5.png";

const SecondTab = () => {
  const refS = useRef(null);
  const [scrollValue, setScrollValue] = useState(0);
  const rangeHandler = (e) => {
    const refCurrent = refS.current;
    refCurrent.scrollTop = e.target.value;
  };

  const scrollHandler = (e) => {
    const refCurrent = refS.current;
    setScrollValue(refCurrent.scrollTop);
  };

  return (
    <div className={Style.SecondTab}>
      <div className={Style.hello}>
        Текст
        <br />
        сообщения
      </div>
      <input
        type='range'
        value={scrollValue}
        min='0'
        max='478'
        step='1'
        name='price'
        onChange={rangeHandler}
      />
      <div className={Style.title} ref={refS} onScrollCapture={scrollHandler}>
        <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipisicing
        elit. Beatae eveniet debitis accusamus praesentium eius voluptas
        distinctio earum cupiditate dolore minus illum enim possimus explicabo
        quae delectus eaque ratione, corrupti facere laborum vero accusantium
        fugit inventore. Sunt quasi alias reiciendis. Numquam voluptates commodi
        eligendi possimus temporibus soluta quam vero impedit repellat
        blanditiis obcaecati dolores quisquam tenetur vitae consectetur,
        accusamus voluptas? Totam illum, dolorum nisi libero enim ut obcaecati
        numquam voluptates amet dolore sunt? Libero et assumenda odit non! Enim
        unde sint voluptates, iste voluptate consequatur tempore maxime impedit
        dolores natus corrupti exercitationem, qui quasi neque pariatur minima
        in eligendi veritatis, blanditiis optio. Voluptatibus ut enim,
        exercitationem facere ipsam placeat, explicabo consectetur itaque sequi
        natus, sunt eius architecto aspernatur iste voluptates veniam distinctio
        quidem ex corrupti officiis alias quibusdam. Facilis necessitatibus
        accusantium dolores nobis ratione aliquam, eius tempore officia.
        Incidunt dolorum ducimus provident omnis explicabo eveniet! Quaerat
        accusantium vero ratione ipsa sequi velit possimus obcaecati cumque
        deleniti porro expedita similique consectetur nihil ad accusamus ut
        consequatur excepturi, corporis quidem quibusdam aliquid quasi
        molestias! Praesentium in atque, aliquid accusamus optio est, aspernatur
        ea labore fuga possimus quis mollitia nihil dolorem aperiam et porro nam
        architecto accusantium fugit at quia, necessitatibus similique?
        Incidunt, molestiae. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Eaque minima soluta sint? Ratione iste eum eius dignissimos, error
        labore laborum, neque nesciunt{" "}
      </div>
      <div className={Style.Layer3C6}>
        <img src={Layer3C6} alt='background detail img' />
      </div>
      <div className={Style.Layer3C2}>
        <img src={Layer3C2} alt='background detail img' />
      </div>
      <div className={Style.Layer3C4}>
        <img src={Layer3C4} alt='background detail img' />
      </div>
      <div className={Style.Layer3C3}>
        <img src={Layer3C3} alt='background detail img' />
      </div>
      <div className={Style.Layer3C5}>
        <img src={Layer3C5} alt='background detail img' />
      </div>
    </div>
  );
};
export default SecondTab;
