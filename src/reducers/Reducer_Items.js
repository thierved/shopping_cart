import {ADD_TO_BAG} from '../actions';
import products from '../data';

export function allItems(state=products, action) {
    switch (action.type) { 
        case ADD_TO_BAG: 
        console.log('hello');   
        default:
            return state;
    }
}