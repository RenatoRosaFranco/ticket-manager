import './style.css';
import logo from '../../assets/logo.png';
import {useState, useContext } from "react";
import {Link} from "react-router-dom";
import { AuthContext } from '../../contexts/auth';

const SignIn = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { signIn } = useContext(AuthContext);

	function handleSignIn(e) {
		e.preventDefault();

		if (email !== '' && password !== '' ) {
			signIn(email, password);
		}
	}



	return(
			<div className='container-center'>
				<div className='login'>
					<div className='login-area'>
						 <img src={logo}  title='Logo do sistema de chamados' />
					</div>

					<form onClick={ handleSignIn }>
						<h1>Login</h1>

						<input type='email'
						       placeholder='Type our e-mail'
						       value={email}
						       onChange={ (e) => { setEmail(e.target.value) }} />

						<input type='password'
						       placeholder='Type our password'
						       value={password}
						       onChange={ (e) => { setPassword(e.target.value) }} />

						<button type='submit' >
							Acessar
						</button>
					</form>

					<Link to='/register'>
						Create an account.
					</Link>
				</div>
			</div>
	);
}

export default SignIn;