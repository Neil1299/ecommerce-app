import React, { useState } from "react";
import "../css/ComboDeals.css";

const ComboDeals = (props) => {
  let { image, vegname, origanlprice, discountprice } = props;
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreseCount = () => {
    if (count >= 1) {
      setCount(count - 1);
    } else {
      // alert("counter is already 0");
    }
  };

  return (
    <div className="deals container-fluid bg-light text-center w-100 mb-3">
      <div className="ms-2 me-2 veg-item align-item-center">
        <div className="vegimg" style={{ height: "150px", width: "100%" }}>
          <h5>Sale</h5>
          <img src={image} alt="" style={{ height: "100%", width: "100%" }} />
        </div>
        <div className="veg dicription py-4 text-center">
          <p className="">{vegname}</p>
        </div>
        <div className="price">
          <span className="text-danger">{discountprice}</span>
          <span className="ms-2">
            <del>{origanlprice}</del>
          </span>
        </div>
        <div className="d-flex justify-content-center align-items-center py-1">
          <button
            className="btn btn-light border"
            onClick={() => decreseCount()}
          >
            -
          </button>
          <div style={{ width: "30px" }} className="ms-1 me-1 fs-4 border">
            {count}
          </div>
          <button
            className="btn btn-light border"
            onClick={() => increaseCount()}
          >
            +
          </button>
        </div>
        <div className="d-grid gap-2 col-12 mx-auto py-2">
          <button className="btn btn-success bg-success text-light">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComboDeals;
