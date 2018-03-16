export function  setBooks(books) {

	return  {

		type:'SET_BOOKS',
		books,

	}

}




export function  fetchBooks() {

	return dispatch => {

		fetch('/books')
		.then(res=>res.json())
		.then(data=>dispatch(setBooks(data.payload)))

	}

}