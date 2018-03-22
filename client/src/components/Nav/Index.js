import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllItemFromBasket } from 'redux/actions/basketAction';


//Components
//Components
import BasketModal from 'components/Modals/BasketModal';
import InBasket from 'components/Basket/InBasket';

class NavBar extends React.Component {


    componentDidMount() {
        if(JSON.stringify(this.props.basket) === "{}") {
            this.props.getAllItemFromBasket();
        }

    }
    render() {
        return(

            <div>
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
                            <InBasket basket={this.props.basket} />
                        </div>

                        <form  className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>



                </nav>


                <BasketModal basket={this.props.basket} />
            </div>

        )
    }

}


function mapStateToProps(state) {

    return {
        basket:state.basket,
    }

}

export default connect(mapStateToProps ,{ getAllItemFromBasket })(NavBar);
