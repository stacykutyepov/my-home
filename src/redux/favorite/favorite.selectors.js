import { createSelector } from 'reselect';

const selectFavorite = (state) => state.favorite;

export const SelectFavorite = createSelector(
    [selectFavorite],
    favorite => favorite.items
)

export const selectFavoriteItemsCount = createSelector(
    [selectFavorite],
    favorite => favorite.items.length
)