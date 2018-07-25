import { combineReducers } from 'redux';

import { allItems } from './Reducer_Items';
import { shipItem } from './Reducer_shoppedItems';

export default combineReducers({
        items: allItems,
        shipItem
});

