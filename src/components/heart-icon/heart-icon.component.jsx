import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectFavoriteItemsCount } from "../../redux/favorite/favorite.selectors";

import {
  HeartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./heart-icon.styles";

const HeartIcon = ({ onClick, favoriteItemsCount }) => (
  <HeartContainer onClick={onClick}>
    <ShoppingIcon />
    <ItemCountContainer>{favoriteItemsCount}</ItemCountContainer>
  </HeartContainer>
);

const mapStateToProps = createStructuredSelector({
  favoriteItemsCount: selectFavoriteItemsCount,
});

export default connect(mapStateToProps)(HeartIcon);
