import React from "react";
import Carousel from "../carousel/Carousel";
import sugar from "../../assets/products/product/اغذية/sugar.jpg";
import flour from "../../assets/products/product/اغذية/flour.jpg";
import oil from "../../assets/products/product/اغذية/oil.jpg";
import milk1 from "../../assets/products/product/البان/milk-1.jpeg";
import milk2 from "../../assets/products/product/البان/milk-2.jpg";
import milk3 from "../../assets/products/product/البان/milk-3.jpg";
import potato from "../../assets/products/product/حبوب و فطور/potato.jpg";
import cheese from "../../assets/products/product/حبوب و فطور/cheese.jpg";
import jam from "../../assets/products/product/حبوب و فطور/jam.jpg";
import nescafe from "../../assets/products/product/مشروبات/nescafee.jpg";
import niscafe from "../../assets/products/product/مشروبات/niscafe.jpg";
import tea from "../../assets/products/product/مشروبات/tea.jpg";
const Carousels = () => {
  return (
    <div>
      <Carousel
        firstImg={sugar}
        secondImg={flour}
        thirdImg={oil}
        header="الأكثر شهرة في الاغذية"
        key={Math.random()}
        id="food"
      />
      <Carousel
        firstImg={milk1}
        secondImg={milk2}
        thirdImg={milk3}
        header="الأكثر شهرة في الالبان"
        key={Math.random()}
        id="milk"
      />
      <Carousel
        firstImg={potato}
        secondImg={cheese}
        thirdImg={jam}
        header="الأكثر شهرة في الحبوب "
        key={Math.random()}
        id="seeds"
      />
      <Carousel
        firstImg={niscafe}
        secondImg={nescafe}
        thirdImg={tea}
        header="الأكثر شهرة في المشروبات "
        key={Math.random()}
        id="drinks"
      />
    </div>
  );
};

export default Carousels;
