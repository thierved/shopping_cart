export const SHIPPED_ITEMS = 'SHIPPED_ITEMS';
export const ADD_TO_BAG = 'ADD_TO_BAG';

export const addProductToBag = (id) => {
    return {
        type: ADD_TO_BAG,
        id
    }
}

export const shipItem = (id) => {
    return {
        type: SHIPPED_ITEMS,
        id
    }
}
