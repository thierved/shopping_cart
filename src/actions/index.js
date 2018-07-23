export const SHOW_ITEMS = 'SHOW_ITEMS';
export const ADD_TO_BAG = 'ADD_TO_BAG';

export const addProductToBag = (id) => {
    return {
        type: ADD_TO_BAG,
        id
    }
}
