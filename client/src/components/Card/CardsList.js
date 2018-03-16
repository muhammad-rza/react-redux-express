import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';



export default function CardsList({ books }) {

	const emptyMessage = (
		<p>There are no books yet .</p>
	);

	const booksList = (

		<div className="d-flex flex-wrap m-auto" style={{width:"1200px"}}>{books.map((book,key)=> <CardItem key={key} book={book} /> )}</div>
	);

	return (
	<div>
		{books.length === 0 ? emptyMessage : booksList}
	</div>
	);

}








// { [...Array(13).keys()].map((item,index)=>
//
// <div key={index} className="card mb-4 mx-1" style={{width:"290px"}}>
//
//
//
// <Link to="/hu/" > <img className="card-img-top" src="http://via.placeholder.com/100" alt="Cardcap" /></Link>
// 	<div className="card-body">
// 	<h5 className="card-title">Card title</h5>
// <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// <div className="btn-group mr-2" role="group" aria-label="Second group">
// 	<button  className="btn btn-primary">Edit this</button>
// <button  className="btn btn-success">Add to cart</button>
// 	{/* <button href="#" className="btn btn-danger">Remove from cart</button> */}
// </div>
//
// </div>
// </div>
// )
//
// }