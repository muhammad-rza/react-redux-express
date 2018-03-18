import React from 'react';

import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

import Index from  '../pages/Index';
import CardDetail from  '../pages/CardDetail';

export default ()=> (

	<BrowserRouter>

		<Switch>
			<Route path="/" component={Index} exact={true}/>
			<Route path={"/book/:_id"} component={CardDetail} />
		</Switch>

	</BrowserRouter>

)
