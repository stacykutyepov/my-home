import FavoriteActionTypes from './favorite.types';
import { addItemToFavorite } from '../favorite/favorite.utils';

const INITIAL_STATE = {
    items: []
}

const favoriteReducer = (state = INITIAL_STATE, action) => {
    debugger
    switch (action.type) {
        case FavoriteActionTypes.ADD_FAVORITE:
            return {
                ...state,
                items: addItemToFavorite(state.items, action.payload)
            }
        default:
            return state

    }
}

export default favoriteReducer;