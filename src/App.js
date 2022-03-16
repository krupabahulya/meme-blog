import { Route, Routes, NavLink } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home'


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='/about' element={<div>About</div>}/>
          <Route path='/contact' element={<div>Contact</div>}/>
          <Route path='*' element={<div>NotFound</div>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
