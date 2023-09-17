import './index.css';
import RoutesApp from "./routes";
import {BrowserRouter} from "react-router-dom";
import AuthProvider from "./containers/auth";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <ToastContainer autoClose={3000}/>
          <RoutesApp />
        </AuthProvider>
       </BrowserRouter>
    </div>
  );
}

export default App;
