import './style.css';
import logo from '../../assets/logo.png';
import {useState} from "react";
import {Link} from "react-router-dom";

const SignIn = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	function handleSubmit() {
		console.log('You arrived');
	}

	return(
			<div className='container-center'>
				<div className='login'>
					<div className='login-area'>
						 <img src={logo}  title='Logo do sistema de chamados' />
					</div>

					<form onClick={() => handleSubmit() }>
						<h1>Pagina de Login</h1>

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