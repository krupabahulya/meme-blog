import { Route, Routes, } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home'
import Meme from './components/MemeForm'
import Contact from './components/Contact';



const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='/createMeme' element={<Meme />}/>
          <Route path='/contact' element={<Contact/>}/>
          
          <Route path='*' element={<div>NotFound</div>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
