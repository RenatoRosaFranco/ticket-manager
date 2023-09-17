import {Routes, Route} from 'react-router-dom';

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/Errors/NotFound";
import NotAuthorized from "../pages/Errors/NotAuthorized";

import Authorizer from "./authorizer";

const RoutesApp = () => {
	return(
			<Routes>
				<Route path='/' element={ <SignIn/>} />
				<Route path='/register' element={<SignUp/>} />

				<Route path='/dashboard' element={ <Authorizer> <Dashboard /> </Authorizer> } />

				<Route path='*' element={ <NotFound /> } />
			</Routes>
	)
}

export default RoutesApp;