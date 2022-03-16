import React from "react";
import Product from "../product/Product.jsx";
import sugar from "../../assets/products/product/اغذية/sugar.jpg";
import flour from "../../assets/products/product/اغذية/flour.jpg";
import oil from "../../assets/products/product/اغذية/oil.jpg";
import rice from "../../assets/products/product/اغذية/rice.webp";
import milk1 from "../../assets/products/product/البان/milk-1.jpeg";
import milk2 from "../../assets/products/product/البان/milk-2.jpg";
import milk3 from "../../assets/products/product/البان/milk-3.jpg";
import milk4 from "../../assets/products/product/البان/milk4.webp";
import potato from "../../assets/products/product/حبوب و فطور/potato.jpg";
import cheese from "../../assets/products/product/حبوب و فطور/cheese.jpg";
import jam from "../../assets/products/product/حبوب و فطور/jam.jpg";
import spread from "../../assets/products/product/حبوب و فطور/spread.webp";
import nescafe from "../../assets/products/product/مشروبات/nescafee.jpg";
import niscafe from "../../assets/products/product/مشروبات/niscafe.jpg";
import tea from "../../assets/products/product/مشروبات/tea.jpg";
import lipton from "../../assets/products/product/مشروبات/lipton.webp";
import Footer from "../footer/Footer";
const Products = () => {
  return (
    <>
      <div className="row">
        <div className="col-6 col-lg-3">
          <Product
            src={niscafe}
            productInfo="نسكافيه 3 في 1 كلاسيك 24 كيس - 18جم"
            price="42.45جنيه"
          />
        </div>
        <div className="col-6 col-lg-3">
          <Product
            src={lipton}
            productInfo="صندوق شاي اخضر  بالنعناع "
            price="45.55جنيه"
          />
        </div>
        <div className="col-6 col-lg-3">
          <Product
            src={nescafe}
            productInfo="دافيدزاف كافيه جراندي كوفي قهوة"
            price="111.95 جنيه"
          />
        </div>
        <div className="col-6 col-lg-3">
          <Product
            header="قسم المشروبات"
            src={tea}
            productInfo="صندزق شاي اخضر اكياس بنكهة النعناع"
            price="84.95جنيه"
          />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-6 col-lg-3">
          <Product
            src={oil}
            productInfo="زيت عباد الشمس افخر انواع الزيوت"
            price="42.45جنيه"
          />
        </div>
        <div className="col-6 col-lg-3">
          <Product
            src={flour}
            productInfo="دقيق فاخر اجود الانواع "
            price="45.55جنيه"
          />
        </div>
        <div className="col-6 col-lg-3">
          <Product
            src={sugar}
            productInfo="سكر ابيض من افخر انواع قصب السكر"
            price="111.95 جنيه"
          />
        </div>
        <div className="col-6 col-lg-3">
          <Product
            header="قسم الأغذيه"
            src={rice}
            productInfo="رز ابيض من انتاج مصانعنا"
            price="84.95جنيه"
          />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-6 col-lg-3">
          <Product
            src={milk1}
            productInfo="لبن ابيض من اجود الانواع"
            price="42.45جنيه"
          />
        </div>
        <div className="col-6 col-lg-3">
          <Product
            src={milk2}
            productInfo="لبن ابيض من اجود الانواع"
            price="45.55جنيه"
          />
        </div>
        <div className="col-6 col-lg-3">
          <Product
            src={milk3}
            productInfo="لبن ابيض من اجود الانواع"
            price="111.95 جنيه"
          />
        </div>
        <div className="col-6 col-lg-3">
          <Product
            header="قسم  الالبان"
            src={milk4}
            productInfo="لبن ابيض من اجود الانواع"
            price="84.95جنيه"
          />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-6 col-lg-3">
          <Product
            src={potato}
            productInfo="بطاطا محفوظه بعنايه شديده"
            price="42.45جنيه"
          />
        </div>
        <div className="col-6 col-lg-3">
          <Product
            src={cheese}
            productInfo="جبنه بيضاء طازجه"
            price="45.55جنيه"
          />
        </div>
        <div className="col-6 col-lg-3">
          <Product
            src={jam}
            productInfo="افضل انواع المربي"
            price="111.95 جنيه"
          />
        </div>
        <div className="col-6 col-lg-3">
          <Product
            header="قسم  الحبوب"
            src={spread}
            productInfo="افخر انواع الحلاوه"
            price="84.95جنيه"
          />
        </div>
      </div>
      <hr />
      <Footer />
    </>
  );
};

export default Products;
