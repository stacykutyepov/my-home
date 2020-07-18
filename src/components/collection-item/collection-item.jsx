import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { addToFavorite } from "../../redux/favorite/favorite.actions";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  AddToFavoriteIcon,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem, addToFavorite }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}$</PriceContainer>
      </CollectionFooterContainer>
      <AddToFavoriteIcon
        className="add-favorite"
        onClick={() => addToFavorite(item)}
      />
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  addToFavorite: (item) => dispatch(addToFavorite(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
