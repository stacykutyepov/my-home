import FavoriteActionTypes from './favorite.types';

export const addToFavorite = (item) => ({
    type: FavoriteActionTypes.ADD_FAVORITE,
    payload: item
})

export const deleteItemFromFavorite = (item) => ({
    type: FavoriteActionTypes.DELETE_FAVORITE,
    payload: item
})