import './index.css';
import RoutesApp from "./routes";
import {BrowserRouter} from "react-router-dom";
import AuthProvider from "./containers/auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <RoutesApp />
        </AuthProvider>
       </BrowserRouter>
    </div>
  );
}

export default App;
