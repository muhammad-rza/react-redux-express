import React, { Component } from 'react';
import '../App.css';

import NavBar from '../components/NavBar';
import Carousel from '../components/Carousel';
import Cards from '../components/Card/Cards';


class App extends Component {
	render() {
		return (
			<div className="App">
			<NavBar />
			<Carousel />
			<Cards />
			</div>
	);
	}
}

export default App;
