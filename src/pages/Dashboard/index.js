import {useContext} from "react";
import { AuthContext } from "../../containers/auth";
import Drawer from "../../components/Common/Drawer";


const Dashboard = () => {
	const { logOut } = useContext(AuthContext);

	async function handleLogout() {
		await logOut();
	}

	return(
			<>
				<Drawer />

				<h1>Dashboard</h1>

				<button onClick={ handleLogout }>
					LogOut
				</button>
			</>
	)
}

export default Dashboard;