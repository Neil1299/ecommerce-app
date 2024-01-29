import React from 'react';
import si1 from '../img/lettuce iceburg.avif';
import si2 from '../img/tomato cherry.avif';
import si3 from '../img/lettuce green.avif';
import si4 from '../img/sparouts.avif';
import si5 from '../img/lettuce romaine.jpg';
import si6 from '../img/mong.jpg';
import si7 from '../img/chana.jpg';
import si8 from '../img/lettuce red.jpg';
import ComboDeals from './ComboDeals';

const SaladItems = () => {
  let sladItem = [
    {
      id: 1,
      image: si1,
      vegName: "Lettuce Iceburg(Price per 500gm)",
      origanlPrice: "Rs.100",
      discountPrice: "Rs.700",
    },
    {
      id: 1,
      image: si1,
      vegName: "Lettuce Iceburg(Price per 500gm)",
      origanlPrice: "Rs.100",
      discountPrice: "Rs.700",
    },
    {
      id: 2,
      image: si2,
      vegName: "Tomato Cherry(Price per 200gm)",
      origanlPrice: "Rs.60",
      discountPrice: "Rs.45",
    },
    {
      id: 3,
      image: si3,
      vegName: "Lettuce Green(Price per 250gm)",
      origanlPrice: "Rs.70",
      discountPrice: "Rs.35",
    },
    {
      id: 4,
      image: si4,
      vegName: "Sprouts-Mix Variety(Price per 200gms)",
      origanlPrice: "Rs.35",
      discountPrice: "Rs.26",
    },
    {
      id: 5,
      image: si5,
      vegName: "Lettuce Romaine(Price per 500gm)",
      origanlPrice: "Rs.170",
      discountPrice: "Rs.80",
    },
    {
      id: 6,
      image: si6,
      vegName: "Sprouts-Moong(Price per 200gm)",
      origanlPrice: "Rs.40",
      discountPrice: "Rs.32",
    },
    {
      id: 7,
      image: si7,
      vegName: "Sprouts-Channa(Price per 200gm)",
      origanlPrice: "Rs.40",
      discountPrice: "Rs.32",
    },
    {
      id: 8,
      image: si8,
      vegName: "Lettuce Red(Price per 250gm)",
      origanlPrice: "Rs.230",
      discountPrice: "Rs.140",
    }
  ];

  return (
    <>
      <div className='text-center'>
        <h2 className='py-4'>Salad Items</h2>
      </div>

      <div className='container'>
        <div className='row'>
          {sladItem.map((combo) => (
            <div key={combo.id} className='col-lg-4 col-md-6 mb-4'>
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

export default SaladItems;
