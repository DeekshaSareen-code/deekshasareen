import Login from './pages/LoginRegister/login';
import { Route, Routes} from "react-router-dom";
import Register from './pages/LoginRegister/signup';
import Dashboard from './pages/dashboard';
import Header from './pages/footer';
import Connections from './pages/connections';
function App() {
  return (
    <div className="App">
       <Header />
       <Routes>
         {/* <Route path="/" element={<HomePage />} /> */}
         <Route exact path="/login" element={<Login />}></Route>
         <Route exact path = "/register" element = {<Register />}></Route>
         <Route exact path ="/dashboard" element = {<Dashboard />}></Route>

         <Route exact path ="/connections" element = {<Connections />}></Route>
       </Routes>
   
    </div>
  );
}

export default App;
