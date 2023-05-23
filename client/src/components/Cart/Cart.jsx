import React from "react";
import "./cart.scss";
import DeleteIcon from '@mui/icons-material/Delete';
const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/6120155/pexels-photo-6120155.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Long stylish hand bag",
      desc: "Long stylish hand bag",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "shoes",
      desc: "shoes............",
      isNew: true,
      oldPrice: 139,
      price: 132,
    },
  ];
  return (
    <div className="cart">
      <h3>Products in your Cart</h3>
      {data?.map(item =>(
        <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
            <h4>{item.title}</h4>
            <p>{item.desc.substring(0,100)}</p>
            <div className="price">
            1  x ${item.price}
            </div>
            </div>
            <DeleteIcon  className="delete"/>
        </div>
      ))}
      <div className="total">
      <span>SUBTOTOTAL</span>
      <span>$125</span>
      </div>
      <button>Proceed</button>
      <span>Reset Cart</span>
    </div>
  );
};

export default Cart;
