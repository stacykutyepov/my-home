import React from "react";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

// import { toggleCartHidden } from "../../redux/cart/cart.actions";
// import { selectCartItemsCount } from "../../redux/cart/cart.selectors";


import { HeartContainer, ShoppingIcon, ItemCountContainer } from "./heart-icon.styles";

const HeartIcon = ({ onClick, itemCount }) => (
  <HeartContainer onClick={onClick}>
    <ShoppingIcon />
    <ItemCountContainer>0</ItemCountContainer>
  </HeartContainer>
);

// const mapDispatchToProps = (dispath) => ({
//   toggleCartHidden: () => dispath(toggleCartHidden()),
// });

// const mapStateToProps = createStructuredSelector({
//   itemCount: selectCartItemsCount,
// });

export default HeartIcon;
