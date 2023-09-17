import './style.css';
import logo from '../../../assets/images/logo.png';
import {Link} from "react-router-dom";

const NotAuthorized = () => {
	return(
			<div class='not-authorized'>
				<img src={logo}  alt='Task manager Logo'/>

				<h1>401</h1>
				<p>Sorry, You are not allowed to access this page.</p>
				<br />

				<Link to='/' type='button'>
					Back to home page
				</Link>
			</div>
	)
}

export default NotAuthorized;