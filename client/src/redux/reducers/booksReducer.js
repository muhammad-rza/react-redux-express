export default function books(state=[] , action={} ) {


	switch(action.type) {
		case 'SET_BOOKS':
            return action.books;

		case 'BOOK_FETCHED':
			return [
				...state,
				action.books
			];
		default:
			return state;

	}


}