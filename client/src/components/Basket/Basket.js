import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default function Basket({ books }) {

    const emptyMessage = (
        <p>There are no books yet .</p>
    );

    const booksList = (

        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Cart (1)
        </button>
    );

    return (
        <div>
            {booksList}
        </div>
    );

}
