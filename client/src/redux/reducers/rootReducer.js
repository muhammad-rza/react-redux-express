import { combineReducers } from 'redux';



import books from './booksReducer';
import basket from './basketReducer';



export default combineReducers({

	books,
    basket

});