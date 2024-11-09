import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import { Home, Ibarra, Desarrollo } from  './Paginas';
import Navbar from './Componentes/Navbar';


const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ibarra" element={<Ibarra />} />
          <Route path="/Desarrollo" element={<Desarrollo />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App