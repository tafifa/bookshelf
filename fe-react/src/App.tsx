import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Collection from './pages/Collection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Homepage/> } />
        <Route path='/collection' element={ <Collection/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
