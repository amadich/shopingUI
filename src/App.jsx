import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import './App.css';
import Main from './Pages/Main';
import Login from './Pages/Login';
function App() {
  
  return ( 
    <>
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Router>
    </>
   );
}

export default App;