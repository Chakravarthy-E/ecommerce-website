import "./featuredproduct.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredproducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
          pariatur illo ipsum autem officiis optio saepe eum fugiat atque
          consequatur placeat, modi rerum ut explicabo. Ratione architecto quasi
          eligendi eum?
        </p>
      </div>
      <div className="bottom">
        {loading ? "loading" : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
