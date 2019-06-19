import { combineReducers } from 'redux';
import books from './booksreducer';
import user from './userreducer';

const rootReducer = combineReducers({
    books,
    user
});

export default rootReducer;