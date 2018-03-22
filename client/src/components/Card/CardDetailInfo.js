import React from 'react'

import AddToBasket from 'components/Basket/AddToBasket'

export default ({book , inBasket}) =>(


    <div className="col-md-6">
        <div className="card text-center">
            <div className="card-header">
                {book.title}
            </div>
            <div className="card-body">
                <h5 className="card-title">{book.short_desc}</h5>
                <p className="card-text">{book.full_desc}</p>
                <AddToBasket book={ book } inBasket={ inBasket } />
            </div>
            <div className="card-footer text-muted">
                2 days ago
            </div>
        </div>
    </div>

)