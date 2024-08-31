
import Navbar from './components/Navbar';
import './css/App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/signup' Component={SignUp} />
      <Route path='/login' Component={Login} />
      <Route path='/home' Component={Home} />
      <Route path='/' exact Component={SignUp} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
