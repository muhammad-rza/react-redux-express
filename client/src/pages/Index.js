import React from  'react';

// import { fetchAllBook } from 'redux/actions/bookAction';

// import { connect } from 'react-redux';
import NavContainer from '../containers/Nav/Nav';
import CarouselContainer from '../containers/Carousel/Carousel';
import CardContainer from '../containers/Card/CardList';

export default ()=>(

         	<div>
				<NavContainer />
				<CarouselContainer />
				<CardContainer />
			</div>

		);
