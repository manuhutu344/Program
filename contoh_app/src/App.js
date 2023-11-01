import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Tambah from './Pages/Tambah';
import View from './Pages/View';

function App() {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/tambah' element={<Tambah />} />
    <Route path='/update/:id' element={<Tambah />} />
    <Route path='/view/:id' element={<View />} />
    </Routes>
  );
}

export default App;
