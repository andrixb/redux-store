'use strict';
import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';


// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';
// IMPORT ACTIONS
import { addToCart } from './actions/cartActions';
import { postBooks, deleteBooks, updateBooks } from './actions/bookActions';

// STEP 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

store.subscribe(() => {
    console.log('current state is:', store.getState());
});

// STEP 2 create and dispatch actions
store.dispatch(postBooks(
  [{
      id: 1,
      title: 'this is book title',
      description: 'this is the book description',
      price: 33.33
  }, {
      id: 2,
      title: 'this is second book title',
      description: 'this is the second book description',
      price: 50
  }]
));

// DELETE a book
store.dispatch(deleteBooks({ id: 1 }));

// UPDATE a book
store.dispatch(updateBooks({
        id: 2,
        title: 'Learn React in 24H'
    })
);

store.dispatch(addToCart( [{ id: 1 }] ));
