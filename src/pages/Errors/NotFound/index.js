import './style.css';
import logo from '../../../assets/logo.png';
import {Link} from "react-router-dom";

const NotFound = () => {
	return(
			<div class='not-found'>
				<img src={logo}  alt='Task manager Logo'/>

				<h1>404</h1>
				<p>The page you are looking does not exist.</p>
				<br />

				<Link to='/' type='button'>
					Back to home page
				</Link>
			</div>
	)
}

export default NotFound;