import React from "react";
import "./categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
        <img src="https://images.pexels.com/photos/3538028/pexels-photo-3538028.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <button>
        <Link className="link" to="/products/1">Sale</Link>
        </button>
        </div>
        <div className="row">
        <img src="https://images.pexels.com/photos/999303/pexels-photo-999303.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <button>
        <Link className="link" to="/products/1">Accessories</Link>
        </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
        <img src="https://images.pexels.com/photos/9154696/pexels-photo-9154696.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <button>
        <Link className="link" to="/products/1">New Sale</Link>
        </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
            <img src="https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <button>
            <Link className="link" to="/products/1">Men</Link>
            </button>
            </div>
          </div>
          <div className="col">
          <div className="row">
          <img src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <button>
          <Link className="link" to="/products/1">Women</Link>
          </button>
          </div>
          </div>
        </div>
        <div className="row">
        <img src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <button>
        <Link className="link" to="/products/1">Shoes</Link>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
