import React from 'react'
import fruit1 from '../img/fruit1.avif'
import fruit2 from '../img/apple.avif'
import fruit3 from '../img/banana.avif'
import fruit4 from '../img/aamala.jpg'
import fruit5 from '../img/coconut.avif'
import fruit6 from '../img/golden apple.jpg'
import fruit7 from '../img/grapes.avif'
import fruit8 from '../img/grapes green.avif'
import fruit9 from '../img/pomogranate.jpg'
import fruit10 from '../img/orange.avif'
import fruit11 from '../img/pineapple.avif'
import fruit12 from '../img/rasberry.avif'
import fruit13 from '../img/star fruit.jpg'
import fruit14 from '../img/sugarcane.jpg'
import fruit15 from '../img/sweet lime.jpg'
import fruit16 from '../img/watermelon.avif'
import ComboDeals from './ComboDeals'
// import { Link } from 'react-router-dom'

const AllFruits = () => {

    let myFruits=[
        {
            id:1,
            image:fruit1,
            vegname:"Papaya(1kg)",
            origanlprice:"Rs.100",
            discountprice:"Rs.50"
        },
        {
            id:2,
            image:fruit2,
            vegname:"Apple(1kg)",
            origanlprice:"Rs.180",
            discountprice:"Rs.150"
        },
        {
            id:3,
            image:fruit3,
            vegname:"Banana(1kg)",
            origanlprice:"Rs.80",
            discountprice:"Rs.45"
        },
        {
            id:4,
            image:fruit4,
            vegname:"Aamala(1kg)",
            origanlprice:"Rs.120",
            discountprice:"Rs.70"
        },
        {
            id:5,
            image:fruit5,
            vegname:"Coconut(Per peice)",
            origanlprice:"Rs.60",
            discountprice:"Rs.40"
        },
        {
            id:6,
            image:fruit6,
            vegname:"Papaya(1kg)",
            origanlprice:"Rs.200",
            discountprice:"Rs.150"
        },
        {
            id:7,
            image:fruit7,
            vegname:"Golden Apple(1kg)",
            origanlprice:"Rs.300",
            discountprice:"Rs.200"
        },
        {
            id:8,
            image:fruit8,
            vegname:"Green Grapes(1kg)",
            origanlprice:"Rs.100",
            discountprice:"Rs.80"
        },
        {
            id:9,
            image:fruit9,
            vegname:"Pomogranate(1kg)",
            origanlprice:"Rs.120",
            discountprice:"Rs.90"
        },
        {
            id:10,
            image:fruit10,
            vegname:"Orange(1kg)",
            origanlprice:"Rs.120",
            discountprice:"Rs.80"
        },
        {
            id:11,
            image:fruit11,
            vegname:"PineApple(1kg)",
            origanlprice:"Rs.80",
            discountprice:"Rs.60"
        },
        {
            id:12,
            image:fruit12,
            vegname:"Rasberry(1kg)",
            origanlprice:"Rs.150",
            discountprice:"Rs.100"
        },
        {
            id:13,
            image:fruit13,
            vegname:"Star Fruit(1kg)",
            origanlprice:"Rs.100",
            discountprice:"Rs.80"
        },
        {
            id:14,
            image:fruit14,
            vegname:"Sugarcane(1kg)",
            origanlprice:"Rs.300",
            discountprice:"Rs.250"
        },
        {
            id:15,
            image:fruit15,
            vegname:"Sweet Lime(1kg)",
            origanlprice:"Rs.120",
            discountprice:"Rs.90"
        },
        {
            id:16,
            image:fruit16,
            vegname:"Watermelon(1kg)",
            origanlprice:"Rs.80",
            discountprice:"Rs.60"
        }
    ]
  return (
    <>
    <div className="text-center ">
    <h2 className="py-4">Fruits</h2>
    <p>Apples,Pears,All Citrus Fruits,All Type of Berries and Melon,Exotic Fruits like Avocados</p>
  </div>
  <div className="d-flex flex-wrap">
  
 
   {myFruits.map((combo) => (
      <ComboDeals
        key={combo.id}
        image={combo.image}
        vegname={combo.vegname}
        origanlprice={combo.origanlprice}
        discountprice={combo.discountprice}
      />
    ))}
    
  </div>
  
  
  </>
  )
}

export default AllFruits
