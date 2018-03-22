import React from  'react';

import NavContainer from '../containers/Nav/Nav';
import CardDetailContainer from '../containers/Card/CardDetail';


export default (props)=> (

	<div>
		<NavContainer />
		<CardDetailContainer parentProps={props} />

	</div>

);