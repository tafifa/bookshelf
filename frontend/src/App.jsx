import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/HomePage';
import ReadingList from './pages/ReadingList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Homepage/> } />
        <Route path='/lists' element={ <ReadingList/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
