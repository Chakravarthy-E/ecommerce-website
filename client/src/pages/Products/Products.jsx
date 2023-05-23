import React, { useState } from "react";
import "./products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";

const Products = () => {
  const catID = parseInt(useParams().id);
  const [maxprice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product by Price</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">T-shirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxprice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>

          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="asc"
              value="asc"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest Level)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="desc"
              value="desc"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest Level)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="catImg"
          src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />

        <List catID={catID} maxprice={maxprice} sort={sort}  />
      </div>
    </div>
  );
};

export default Products;
