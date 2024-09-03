
import Navbar from './components/Navbar';
import './css/App.css';
import { Route, Routes} from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import NoteFound from './pages/NoteFound';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/signup' Component={SignUp} />
      <Route path='/login' Component={Login} />
      <Route path='/home' Component={Home} />
      {/* <Route path='/' exactComponent={SignUp} /> */}
      <Route path='*' element={<NoteFound/>} />
      </Routes>
    </div>
  );
}

export default App;
