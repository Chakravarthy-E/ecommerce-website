import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            aliquid veniam asperiores, pariatur, ex corporis dolorum autem est
            perferendis veritatis ab architecto praesentium sed. Assumenda
            consequuntur consectetur cumque nostrum reiciendis.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            consectetur praesentium accusamus. Voluptate excepturi cum incidunt
            quo? Cumque repellat aut voluptate laborum corrupti in dignissimos
            praesentium, deleniti perspiciatis molestiae quam?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Go</span>
          <span className="copyright">
            ©️ Copyright 2023. All Right Reserved
          </span>
        </div>
        <div className="right">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
