import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import com1 from "../img/combo1.avif";
import com2 from "../img/combo2.avif";
import com3 from "../img/combo3.avif";
import com4 from "../img/combo4.avif";
import com5 from "../img/combo5.avif";
import com6 from "../img/combo6.avif";
import com7 from "../img/combo7.avif";
import com8 from "../img/combo8.avif";
import com9 from "../img/combo9.avif";
import com10 from "../img/combo10.avif";
import com11 from "../img/combo11.avif";
import com12 from "../img/combo12.avif";
import ComboDeals from "./ComboDeals";
import { Link } from "react-router-dom";
import CarouselBs from "./CarouselBs";
// import CarouselBs from "./CarouselBs";

const AllCombo = () => {
    // const allComboStyle={
    //     display:"flex",
    //     flexWrap:"wrap",
    //     marginTop:"10px",
    //     width:"100%"
    
    //   }
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 4,
    //   slidesToScroll: 3
    // };
  let myCombo = [
    {
      id: 1,
      image: com1,
      vegname: "vegetable",
      origanlprice: "Rs.250",
      discountprice: "Rs.150",
    },
    {
      id: 2,
      image: com2,
      vegname: "vegetable",
      origanlprice: "Rs.100",
      discountprice: "Rs.80",
    },
    {
      id: 3,
      image: com3,
      vegname: "vegetable",
      origanlprice: "Rs.200",
      discountprice: "Rs.150",
    },
    {
      id: 4,
      image: com4,
      vegname: "vegetable",
      origanlprice: "Rs.220",
      discountprice: "Rs.120",
    },
    {
      id: 5,
      image: com5,
      vegname: "vegetable",
      origanlprice: "Rs.120",
      discountprice: "Rs.70",
    },
    {
      id: 6,
      image: com6,
      vegname: "vegetable",
      origanlprice: "Rs.200",
      discountprice: "Rs.150",
    },
    {
      id: 7,
      image: com7,
      vegname: "vegetable",
      origanlprice: "Rs.290",
      discountprice: "Rs.150",
    },
    {
      id: 8,
      image: com8,
      vegname: "vegetable",
      origanlprice: "Rs.100",
      discountprice: "Rs.50",
    },
    {
      id: 9,
      image: com9,
      vegname: "vegetable",
      origanlprice: "Rs.200",
      discountprice: "Rs.150",
    },
    {
      id: 10,
      image: com10,
      vegname: "vegetable",
      origanlprice: "Rs.200",
      discountprice: "Rs.90",
    },
    {
      id: 11,
      image: com11,
      vegname: "vegetable",
      origanlprice: "Rs.200",
      discountprice: "Rs.170",
    },
    {
      id: 12,
      image: com12,
      vegname: "vegetable",
      origanlprice: "Rs.200",
      discountprice: "Rs.150",
    },
  ];

  return (
    <>
      <div className="text-center ">
        <h2 className="py-4">Combo Deals</h2>
      </div>
      <div className="d-flex flex-wrap">
          <CarouselBs />
     
       {/* {myCombo.map((combo) => (
          <ComboDeals
            key={combo.id}
            image={combo.image}
            vegname={combo.vegname}
            origanlprice={combo.origanlprice}
            discountprice={combo.discountprice}
          />
        ))} */}
        
      </div>
      <div className="text-center py-3">
      <Link to="/allproduct" > <button className="btn btn-success" type="button">
          View All Products 
        </button></Link>
      </div>
      <hr />
    </>
  );
};

export default AllCombo;
