import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path='/' element={<Login/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
