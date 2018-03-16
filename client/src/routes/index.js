import React from 'react';

import { BrowserRouter , Route} from 'react-router-dom';

import Index from  '../pages/Index';
import CardDetail from  '../pages/CardDetail';

export default ()=> (

	<BrowserRouter>
		<Route path="/" component={Index}>

			<Route path='/book/:bookId' component={CardDetail} />

		</Route>


	</BrowserRouter>

)



// <Match pattern="/users" children={() => [
// <Match key="1" pattern="create" component={CreateUser}/>,
// <Match key="2" pattern="delete" component={DeleteUser}/>
// ]}/>
//