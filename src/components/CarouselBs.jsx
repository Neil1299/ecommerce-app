import React from "react";
import ComboDeals from "./ComboDeals";
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

const CarouselBs = () => {
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
      }
   
    // ... (rest of your combo data)
  ];

  const groupedCombos = [];
  for (let i = 0; i < myCombo.length; i += 4) {
    groupedCombos.push(myCombo.slice(i, i + 4));
  }

  return (
    <div id="carouselExample" className="carousel slide vw-100">
      <div className="carousel-inner">
        {groupedCombos.map((combos, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''} w-100`} key={index}>
            <div className="d-flex justify-content-around">
              {combos.map((combo) => (
                <ComboDeals
                  key={combo.id}
                  image={combo.image}
                  vegname={combo.vegname}
                  origanlprice={combo.origanlprice}
                  discountprice={combo.discountprice}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselBs;
