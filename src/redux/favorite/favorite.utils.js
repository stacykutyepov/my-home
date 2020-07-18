export const addItemToFavorite = (favoriteItems, itemToAdd) => {
    const newItem = favoriteItems.filter(item => item.id === itemToAdd.id)
    if (newItem.length > 0) {
        return [...favoriteItems]
    }
    return [...favoriteItems, { ...itemToAdd }]
}


export const deleteItemFromFavorite = (item, itemToDelete) => {

}