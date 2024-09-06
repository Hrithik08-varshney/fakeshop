import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "./Loader/Loader";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts?.products);
  return (
    <div className="ui grid" style={{ marginTop: "20px" }}>
      {products && products.length > 0 ? (
        products.map((product) => {
          const { id, title, image, price, category } = product;
          return (
            <div className="four wide column" key={id}>
              <Link to={`/product/${id}`}>
                <div className="ui card link">
                  <div
                    className="image"
                    style={{ height: "250px", overflow: "hidden" }}
                  >
                    <img
                      src={image}
                      alt={title}
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta price">$ {price}</div>
                    <div className="meta">{category}</div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ProductComponent;
