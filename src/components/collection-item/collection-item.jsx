import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import {
  addToFavorite,
  deleteItemFromFavorite,
} from "../../redux/favorite/favorite.actions";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  AddToFavoriteIcon,
  RemoveFromFavorite,
} from "./collection-item.styles";

const CollectionItem = ({
  item,
  addItem,
  addToFavorite,
  deleteFavorite,
  typeOfAction,
}) => {
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
      {typeOfAction ? (
        <AddToFavoriteIcon
          className="favorite-icon"
          onClick={() => addToFavorite(item)}
        />
      ) : (
        <RemoveFromFavorite
          className="favorite-icon"
          onClick={() => deleteFavorite(item)}
        >
          &#10005;
        </RemoveFromFavorite>
      )}

      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  addToFavorite: (item) => dispatch(addToFavorite(item)),
  deleteFavorite: (item) => dispatch(deleteItemFromFavorite(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
