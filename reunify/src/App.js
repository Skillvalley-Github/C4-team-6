import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className='App'>
    <Routes>
       <Route path="/" element={<Dashboard/>}/>
    </Routes>
    </div>
  );
}

export default App;
