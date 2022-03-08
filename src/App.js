import Login from './LoginRegister/login';
import { Route, Routes} from "react-router-dom";
import Register from './LoginRegister/register';

function App() {
  return (
    <div className="App">
     
       <Routes>
         <Route exact path="/" element={<Login />}></Route>
         <Route exact path = "/register" element = {<Register />}></Route>
       </Routes>
   
    </div>
  );
}

export default App;