import { combineReducers } from 'redux';

import searchItem from './reducer_all_items';

export default combineReducers({
        allItems: searchItem
});

