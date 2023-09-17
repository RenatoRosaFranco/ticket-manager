import './style.css';
import logo from '../../assets/images/logo.png';
import { isPresent } from "../../utils/helper";
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import { AuthContext } from '../../containers/auth';

const SignUp = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { signUp, loadingAuth } = useContext(AuthContext);

	async function handleSubmit(e) {
		e.preventDefault();

		if (isPresent(name)  && isPresent(email) && isPresent(password)) {
			await signUp(name, email, password);
		}
	}

	return(
			<div className='container-center'>
				<div className='login'>
					<div className='login-area'>
						 <img src={logo}  title='Task manager Logo' />
					</div>

					<form onClick={ handleSubmit }>
						<h1>Pagina de Login</h1>

						<input type='text'
						       placeholder='Type our name'
						       value={name}
						       onChange={ (e) => { setName(e.target.value) }} />

						<input type='email'
						       placeholder='Type our e-mail'
						       value={email}
						       onChange={ (e) => { setEmail(e.target.value) }} />

						<input type='password'
						       placeholder='Type our password'
						       value={password}
						       onChange={ (e) => { setPassword(e.target.value) }} />

						<button type='submit' >
							{ loadingAuth ? 'Carregando' :  'Cadastrar' }
						</button>
					</form>

					<Link to='/'>
						Already have an account? <strong>Login</strong>
					</Link>
				</div>
			</div>
	);
}

export default SignUp;