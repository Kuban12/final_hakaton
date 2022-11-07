import React from "react";
import { useWorkCreate } from "../../contexts/workCreateContext";

const ProductCard = ({ item }) => {
  return (
    <div>
      {item.experience} {item.hour_from} {item.hour_to} {item.desc} {item.price}{" "}
      {item.category}
    </div>
  );
};

export default ProductCard;
