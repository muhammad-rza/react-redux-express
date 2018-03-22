export function  setBooks(books) {

    return  {

        type:'SET_BOOKS',
        books,

    }

}

export function fetchedAllBook(books) {

	return {
		type: 'BOOK_FETCHED',
		books
	}
}

export function fetchAllBook() {
	return dispatch => {

		fetch('/books')
		.then(res=>res.json())
		.then(data=>dispatch(setBooks(data.payload)))
	}
}

export function fetchBookById(_id) {
    return dispatch => {

        fetch('/books/'+_id)
            .then(res=>res.json())
            .then(data=>dispatch(fetchedAllBook(data.payload)))


    }
}

