import React from 'react';


import { BrowserRouter, Switch, Route} from 'react-router-dom';

import routeList from './routeList';

export default ({match})=> (

	<BrowserRouter>
		<Switch>
			{routeList.map((route ,index) => <Route key={index} {...route} /> ) }
		</Switch>

	</BrowserRouter>

)