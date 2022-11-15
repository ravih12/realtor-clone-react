import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import Offers from "./pages/Offers"
import ForgotPassword from "./pages/ForgotPassword"
import SignUp from "./pages/SignUp"
function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/profile" element={<Profile />}/> 
        <Route path="/signIn" element={<SignIn />}/> 
        <Route path="/signup" element={<SignUp />}/> 
        <Route path="/forgot-password" element={<ForgotPassword />}/> 
        <Route path="/offers" element={<Offers />}/> 

        
        
      </Routes>
    </Router>
    </>

  );
}

export default App;
