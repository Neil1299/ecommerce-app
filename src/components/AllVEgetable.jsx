import React from 'react'
import ComboDeals from './ComboDeals'
import veg1 from '../img/alveg1.avif'
import veg2 from '../img/alveg2.avif'
import veg3 from '../img/brinjal round.jpg'
import veg4 from '../img/capsicum green.avif'
import veg5 from '../img/cualiflower.jpg'
import veg6 from '../img/cucumber.avif'
import veg7 from '../img/ginger.avif'
import veg8 from '../img/Grenn CHilly.jpg'
import veg9 from '../img/green beans.avif'
import veg10 from '../img/lady finger.avif'
import veg11 from '../img/lemon.avif'
import veg12 from '../img/spring onion.avif'


const AllVEgetable = () => {
    let myVeg=[
        {
            id:1,
            image:veg1,
            vegname:"Onion(1kg)",
            origanlprice:"Rs.30",
            discountprice:"Rs.25"
        },
        {
            id:2,
            image:veg2,
            vegname:"Potato(1kg)",
            origanlprice:"Rs.30",
            discountprice:"Rs.25"
        },
        {
            id:3,
            image:veg3,
            vegname:"Round Brinjal(1kg)",
            origanlprice:"Rs.40",
            discountprice:"Rs.30"
        },
        {
            id:4,
            image:veg4,
            vegname:"Capsicum(1kg)",
            origanlprice:"Rs.25",
            discountprice:"Rs.15"
        },
        {
            id:5,
            image:veg5,
            vegname:"Cualiflower(1kg)",
            origanlprice:"Rs.40",
            discountprice:"Rs.30"
        },
        {
            id:6,
            image:veg6,
            vegname:"Cucumber(1kg)",
            origanlprice:"Rs.40",
            discountprice:"Rs.25"
        },
        {
            id:7,
            image:veg7,
            vegname:"Ginger(1kg)",
            origanlprice:"Rs.40",
            discountprice:"Rs.35"
        },
        {
            id:8,
            image:veg8,
            vegname:"Green Chilly(1kg)",
            origanlprice:"Rs.40",
            discountprice:"Rs.35"
        },
        {
            id:9,
            image:veg9,
            vegname:"Green Beans(1kg)",
            origanlprice:"Rs.40",
            discountprice:"Rs.35"
        },
        {
            id:10,
            image:veg10,
            vegname:"Lady Finger(1kg)",
            origanlprice:"Rs.30",
            discountprice:"Rs.25"
        },
        {
            id:11,
            image:veg11,
            vegname:"Lemon(per piece)",
            origanlprice:"Rs.10",
            discountprice:"Rs.5"
        },
        {
            id:12,
            image:veg12,
            vegname:"Spring Onion(1kg)",
            origanlprice:"Rs.40",
            discountprice:"Rs.35"
        }
    ]
  return (
    <>
    
    <div className="text-center ">
    <h2 className="py-4">Vegetables</h2>
    <p>Potato,Onion,Tomato,Cucumber,Lettuce,Spinch,Cauliflower,Zucchini and so much more!</p>
  </div>
  <div className="d-flex flex-wrap ">
  
 
   {myVeg.map((combo) => (
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

export default AllVEgetable
