import React from 'react'
import { Link } from 'react-router-dom';

import AddToBasket from 'components/Basket/AddToBasket'

export default ({book , inBasket}) => (

    <div className="card mb-4 mx-1" style={{width: "290px"}}>

        <Link to={`/book/${book._id}`}><div style={{height:"250px",overflow:"hidden"}}><img className="card-img-top" src={book.img} alt="Cardcap" /></div></Link>
        <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <p className="card-text">{book.short_desc}</p>
            <div className="mr-2" role="group" aria-label="Second group">

                <AddToBasket book={ book } inBasket={ inBasket } />

            </div>

        </div>
    </div>

)