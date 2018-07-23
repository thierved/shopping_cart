import { combineReducers } from 'redux';

import { allItems } from './Reducer_Items'

export default combineReducers({
        items: allItems
});

