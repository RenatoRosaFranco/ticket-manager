import {Routes, Route} from 'react-router-dom';

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/Errors/NotFound";

const RoutesApp = () => {
	return(
			<Routes>
				<Route path='/' element={ <SignIn/>} />
				<Route path='/register' element={<SignUp/>} />
				<Route path='/dashboard' element={ <Dashboard /> } />

				<Route path='*' element={ <NotFound /> } />
			</Routes>
	)
}

export default RoutesApp;