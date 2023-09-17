import { useContext } from 'react';
import {Navigate} from "react-router-dom";
import {AuthContext} from "../containers/auth";

function Authorizer({ children }) {
	const { signed, loading } = useContext(AuthContext)

	if (loading) {
		return(
				<div>

				</div>
		)
	}

	if (!signed) {
		return <Navigate to='/not-authorized' />
	}

	return children;
}

export default Authorizer;