import React from "react";
import { connect } from "react-redux";
import { SelectFavorite } from "../../redux/favorite/favorite.selectors";
import { createStructuredSelector } from "reselect";
import CollectionItem from "../../components/collection-item/collection-item";

import {
  CollectionPageContainer,
  Tittle,
  Paragraph,
  ItemsContainer,
} from "./favorite-collection.styles";

const FavoritePage = ({ favoriteCollection }) => {
  // console.log(favoriteCollection);
  return (
    <CollectionPageContainer>
      <Tittle>favorite</Tittle>
     {favoriteCollection.length ? (
      <ItemsContainer>
        {favoriteCollection.map((item) => (
          <CollectionItem key={item.id} item={item} typeOfAction={false} />
        ))}
      </ItemsContainer>

     ) : (
       <Paragraph>No Favorite Items :( </Paragraph>
     )}
    </CollectionPageContainer>
  );
};


const mapStateToProps = createStructuredSelector({
  favoriteCollection: SelectFavorite,
});

export default connect(mapStateToProps)(FavoritePage);
