import React from 'react';
import m1 from '../img/mushroom.jpg';
import m2 from '../img/mushroom enoki.jpg';
import m3 from '../img/mushroom shemiji white.jpg';
import m4 from '../img/mushroom ceps.jpg';
import m5 from '../img/mushroom shitake.webp';
import ComboDeals from './ComboDeals';

const Mushroom = () => {
  let mushRoom = [
    {
      id: 1,
      image: m1,
      vegName: 'Mushroom(Price per Punnet of 200gms)',
      origanlPrice: 'Rs.90',
      discountPrice: 'Rs.40',
    },
    {
      id: 2,
      image: m2,
      vegName: 'Mushroom Enoki(Price per Approx 100 gms)',
      origanlPrice: 'Rs.290',
      discountPrice: 'Rs.160',
    },
    {
      id: 3,
      image: m3,
      vegName: 'Mushroom Shimeji white(Price per Approx 150 gms)',
      origanlPrice: 'Rs.400',
      discountPrice: 'Rs.290',
    },
    {
      id: 4,
      image: m4,
      vegName: 'Mushroom Ceps(Price per Approx 200 gms)',
      origanlPrice: 'Rs.600',
      discountPrice: 'Rs.450',
    },
    {
      id: 5,
      image: m5,
      vegName: 'Mushroom(Price per Approx 1 kg)',
      origanlPrice: 'Rs.2550',
      discountPrice: 'Rs.2000',
    },
  ];

  return (
    <>
      <div className="text-center">
        <h2 className="py-4">Mushrooms</h2>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {mushRoom.map((combo) => (
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

export default Mushroom;
