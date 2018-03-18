export function  setBooks(books) {

	return  {

		type:'SET_BOOKS',
		books,

	}

}

export function bookFetched(book) {

    return {
        type: 'BOOK_FETCHED',
        book
    }
}


export function  fetchBooks() {

	return dispatch => {

		fetch('/books')
		.then(res=>res.json())
		.then(data=>dispatch(setBooks(data.payload)))

	}

}

export function fetchBook(id) {
    return dispatch => {
        fetch(`/books/${id}`)
            .then(res => res.json())
            .then(data => dispatch(bookFetched(data.payload)));
    }
}