import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginAndRegister from './pages/login&register'
import NovaAba from './pages/products'

function App() {
    return (
      <Router>
          <Routes>
            <Route path="/" element={ <LoginAndRegister />} />
            <Route path="/nova" element={ <NovaAba />} />
          </Routes>
      </Router>
    )
}

export default App
