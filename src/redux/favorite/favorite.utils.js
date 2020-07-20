export const addItemToFavorite = (favoriteItems, itemToAdd) => {
    const newItem = favoriteItems.filter(item => item.id === itemToAdd.id)
    if (newItem.length > 0) {
        return [...favoriteItems]
    }
    return [...favoriteItems, { ...itemToAdd }]
}


export const deleteItemFromFavorite = (favoriteItems, itemToDelete) => {
    const newFavoriteItems = favoriteItems.filter(item => item.id !== itemToDelete.id);
    return [...newFavoriteItems]
}