import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { SelectFavorite } from "../../redux/favorite/favorite.selectors";

import {
  HeartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./heart-icon.styles";

const HeartIcon = ({ onClick, itemFavoriteCount }) => (
  <HeartContainer onClick={onClick}>
    <ShoppingIcon />
    <ItemCountContainer>{itemFavoriteCount.length}</ItemCountContainer>
  </HeartContainer>
);

const mapStateToProps = createStructuredSelector({
  itemFavoriteCount: SelectFavorite,
});

export default connect(mapStateToProps)(HeartIcon);
