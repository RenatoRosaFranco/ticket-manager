import { useState, createContext, useEffect } from "react";
import { auth, database } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loadingAuth, setLoadingAuth] = useState(false);

	async function signIn(email, password) {

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