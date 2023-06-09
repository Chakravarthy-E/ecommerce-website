import React from "react";
import "./list.scss";
import Card from "../Card/Card"

const List = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/6120155/pexels-photo-6120155.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Long stylish hand bag",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Yello T-shirt",
      isNew: true,
      oldPrice: 200,
      price: 192,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "black shirt",
      isNew: true,
      oldPrice: 291,
      price: 289,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/826380/pexels-photo-826380.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "black jacket",
      isNew: true,
      oldPrice: 1000,
      price: 790,
    },
  ];

  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
