import { useContext } from 'react';
import {Navigate} from "react-router-dom";
import {AuthContext} from "../containers/auth";

function Authorizer({ children }) {
	return children;
}

export default Authorizer;