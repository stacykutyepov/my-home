import FavoriteActionTypes from './favorite.types';
import { addItemToFavorite, deleteItemFromFavorite } from '../favorite/favorite.utils';

const INITIAL_STATE = {
    items: []
}

const favoriteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FavoriteActionTypes.ADD_FAVORITE:
            return {
                ...state,
                items: addItemToFavorite(state.items, action.payload)
            }
        case FavoriteActionTypes.DELETE_FAVORITE:
            return {
                ...state,
                items: deleteItemFromFavorite(state.items, action.payload)
            }
        default:
            return state

    }
}

export default favoriteReducer;