import Registration from "./Pages/Registration"
import Login from "./Pages/Login"
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/registration" element={<Registration />}/>
       <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
  )
}

export default App
