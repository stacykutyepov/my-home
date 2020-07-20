import React from "react";
import { connect } from "react-redux";
import { SelectFavorite } from "../../redux/favorite/favorite.selectors";
import { createStructuredSelector } from "reselect";
import CollectionItem from "../../components/collection-item/collection-item";

import {
  CollectionPageContainer,
  Tittle,
  ItemsContainer,
} from "./favorite-collection.styles";

const FavoritePage = ({ favoriteCollection }) => {
  console.log(favoriteCollection);
  return (
    <CollectionPageContainer>
      <Tittle>favorite</Tittle>
      <ItemsContainer>
        {favoriteCollection.map((item) => (
          <CollectionItem key={item.id} item={item} typeOfAction={false} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems,
//   total: selectCartTotal,
// });

const mapStateToProps = createStructuredSelector({
  favoriteCollection: SelectFavorite,
});

export default connect(mapStateToProps)(FavoritePage);
