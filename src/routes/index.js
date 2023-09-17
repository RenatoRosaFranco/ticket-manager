import {Routes, Route} from 'react-router-dom';

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/Errors/NotFound";
import NotAuthorized from "../pages/Errors/NotAuthorized";

import Authorizer from "./authorizer";
import Customer from '../pages/Dashboard/Customer';
import Profile from '../pages/Dashboard/Profile';

const RoutesApp = () => {
	return(
			<Routes>
				<Route path='/' element={ <SignIn/>} />
				<Route path='/register' element={<SignUp/>} />

				<Route path='/dashboard' element={ <Authorizer> <Dashboard /> </Authorizer> } />
				<Route path='/dashboard/customers' element={<Authorizer> <Customer/> </Authorizer> } />
				<Route path='/dashboard/profile' element={ <Authorizer> <Profile/> </Authorizer> } />

				<Route path='/not-authorized' element={  <NotAuthorized /> }/>
				<Route path='*' element={ <NotFound /> } />
			</Routes>
	)
}

export default RoutesApp;