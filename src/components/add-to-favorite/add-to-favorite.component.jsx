import React from "react";
import { HeartFilled } from "./add-to-favorite.styles";

const AddToFavorite = ({ ...props }) => {
  return <HeartFilled {...props} />;
};

export default AddToFavorite;
