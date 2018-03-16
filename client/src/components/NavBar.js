import React , {Component} from 'react';

import { Link } from 'react-router-dom';

export default class NavBar extends  Component {

    render() {

        return (

            <nav  className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>



		        <Link  className="navbar-brand" to="/">Brand</Link>

                <div className="collapse navbar-collapse" id="navbarToggler">

                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
	                         <Link className="nav-link"  to="/about"><span>About</span></Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link"  to="/blah"><span>Blah</span></Link>
                        </li>
                        <li className="nav-item">
		                    <Link className="nav-link"   to="/all-books"><span>All Books</span></Link>
                        </li>
                    </ul>
                    
                    <div className="mr-5">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Cart (1)
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            // <a className="dropdown-item" href="#">Action</a>
                            // <a className="dropdown-item" href="#">Another action</a>
                            // <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                        </div>
                    </div>

                    <form  className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>

            </nav>

        )

    }

}