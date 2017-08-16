// STEP 3 define reducers

export function booksReducers(state = { books: [] }, action) {
    switch (action.type) {
        case 'POST_BOOK':
            // let books = state.books.concat(action.payload);
            // return {books};
            return { books: [...state.books, ...action.payload] };
            break;

        case 'DELETE_BOOK':
            // Create a copy of the current array of books
            const currentBookToDelete = [...state.books];
            // Determine at which index in books array is the the book to be deleted
            const indexToDelete = currentBookToDelete.findIndex( book => book.id === action.payload.id );
            return { books: [ ...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)] };
            break;

        case 'UPDATE_BOOK':
            // Create a copy of the current array of bookss
            const currentBookToUpdate = [...state.books];
            // Determine at which index in books array is the book to be deleted
            const indexToUpdate = currentBookToUpdate.findIndex( book => book.id === action.payload.id );
            // Create a new book object with the new values and with the same array index
            // of the item we want to replace. To achieve this we will use ...spread but we can use concat method too
            const newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate],
                title: action.payload.title
            }
            // This Log has the purpose to show you how newBookToUpdate looks like
            console.log('what is it newBookToUpdate', newBookToUpdate);
            // use slice to remove the book at the given index, replace with the new object and concatenate
            // with the rest of items in the array
            return {
                books: [ ...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]
            };
            break;
    }

    return state;
}
