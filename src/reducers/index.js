import { combineReducers } from 'redux';

// HERE IMPORT REDUCERS TO BE COMBINED
import { booksReducers } from './booksReducers';
import { cartReducers } from './cartReducers';

// HERE COMBINE THE reducers
export default combineReducers({
    books: booksReducers,
    cart: cartReducers,
});
