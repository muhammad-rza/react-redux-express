import React, { Component } from 'react';
// import { Link } from 'react-router-dom';



export default class CardFullDetail extends Component {


	render() {
			const { book } = this.props;
        return (


            <div className="d-flex flex-wrap m-auto" style={{width:"1200px"}}>
				<div className="col-md-6">
					<img src={book.img} alt={book.title} />
				</div>
				<div className="col-md-6">
					<div className="card text-center">
						<div className="card-header">
                            {book.title}
						</div>
						<div className="card-body">
							<h5 className="card-title">{book.short_desc}</h5>
							<p className="card-text">{book.full_desc}</p>
							<button type="button" className="btn btn-primary">Go somewhere</button>
						</div>
						<div className="card-footer text-muted">
							2 days ago
						</div>
					</div>
				</div>
			</div>


        );

	}

}

