import React from "react";
import ex1 from "../img/Orange1.avif";
import ex2 from "../img/sarda melon.avif";
import ex3 from "../img/peras.avif";
import ex4 from "../img/kiwi.avif";
import ex5 from "../img/green apple.avif";
import ex6 from "../img/blueberries.avif";
import ex7 from "../img/dragon fruit.avif";
import ex8 from "../img/red grapes.avif";
import ex9 from "../img/black diamond apple.jpg";
import ex10 from "../img/plums.avif";
import ComboDeals from "./ComboDeals";

const ExoticFruits = () => {
  let exoticFruits = [
    {
      id: 1,
      image: ex1,
      vegName: "Orange imported(Price per 500gm)",
      origanlPrice: "Rs.230",
      discountPrice: "Rs.190",
    },
    {
      id: 2,
      image: ex2,
      vegName: "Sarda Melon(Price per pc/Approx 900gm to 1.1 kg)",
      origanlPrice: "Rs.160",
      discountPrice: "Rs.100",
    },
    {
      id: 3,
      image: ex3,
      vegName: "Pears imported(Price per 500gm)",
      origanlPrice: "Rs.150",
      discountPrice: "Rs.120",
    },
    {
      id: 4,
      image: ex4,
      vegName: " Kiwi(Price per 500gm)",
      origanlPrice: "Rs.290",
      discountPrice: "Rs.235",
    },
    {
      id: 5,
      image: ex5,
      vegName: "Green Apple imported(Price per 500gm)",
      origanlPrice: "Rs.300",
      discountPrice: "Rs.250",
    },
    {
      id: 6,
      image: ex6,
      vegName: "Blueberries(Price per 125gms)",
      origanlPrice: "Rs.600",
      discountPrice: "Rs.500",
    },
    {
      id: 7,
      image: ex7,
      vegName: "Dragon Fruit(Price per pPc/Approx. 400gm to 500gm)",
      origanlPrice: "Rs.230",
      discountPrice: "Rs.190",
    },
    {
      id: 1,
      image: ex1,
      vegName: "Orange imported(Price per 500gm)",
      origanlPrice: "Rs.200",
      discountPrice: "Rs.140",
    },
    {
      id: 8,
      image: ex8,
      vegName: "Grapes imported(Price per 500gm)",
      origanlPrice: "Rs.230",
      discountPrice: "Rs.195",
    },
    {
      id: 9,
      image: ex9,
      vegName: "Black Diamond Apple(Price per 500gm)",
      origanlPrice: "Rs.1000",
      discountPrice: "Rs.850",
    },
    {
      id: 10,
      image: ex10,
      vegName: "Plums imported(Price per 500gm)",
      origanlPrice: "Rs.200",
      discountPrice: "Rs.160",
    },
  ];

  return (
    <>
      <div className="text-center">
        <h2 className="py-4">Exotic Fruits</h2>
        <p>
          Apples, Pears, All Citrus Fruits, All Type of Berries and Melon,
          Exotic Fruits like Avocados
        </p>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {exoticFruits.map((combo) => (
            <div key={combo.id} className="col">
              <ComboDeals
                image={combo.image}
                vegname={combo.vegName}
                origanlprice={combo.origanlPrice}
                discountprice={combo.discountPrice}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExoticFruits;
