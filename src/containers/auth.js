import { useState, createContext, useEffect } from "react";
import { auth, database } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loadingAuth, setLoadingAuth] = useState(false);
	const navigate = useNavigate();

	function storageUser(data) {
		localStorage.setItem("@ticketsPRO", JSON.stringify(data));
	}

	async function signIn(email, password) {
		setLoadingAuth(true);

		await signInWithEmailAndPassword(auth, email, password)
				.then(async (value) => {
					let uid = value.user.uid;

					const docRef = doc(database, "users", uid);
					const docSnap = await getDoc(docRef);

					let data = {
						uid: uid,
						name: docSnap.data.name,
						email: value.user.email,
						avatarUrl: docSnap.data.avatarUrl
					}

					setUser(data);
					storageUser(data);
					toast.success('You log in with success.');
					setLoadingAuth(false)
					navigate('/dashboard');
				}).catch((error) => {
					console.log(error);
					setLoadingAuth(false);
					toast.error(`Sorry, something went wrong. ${error}`);
				})
	}

	async function signUp(name, email, password) {
		setLoadingAuth(true);

		await createUserWithEmailAndPassword(auth, email, password)
				.then(async (value) => {
					let uid = value.user.uid;

					await setDoc(doc(database, "users", uid), {
						avatarUrl: null,
						name: name,
					}).then(() => {

						let data = {
							uid: uid,
							name: name,
							email: value.user.email,
							avatarUrl: null
						};

						setUser(data);
						storageUser(data);
						setLoadingAuth(false);
						navigate('/dashboard');
						toast.success('Welcome to the Dashboard');

					}).catch((error) => {
						console.log(error);
					}).finally(() => {
						setLoadingAuth(false);
					});
				})
	}

	return(
			<AuthContext.Provider
					value={{ signed: !!user , user, signIn, signUp, loadingAuth }}>
				{ children }
			</AuthContext.Provider>
	)
};

export default AuthProvider;