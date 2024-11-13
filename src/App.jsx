import { TaskFlow } from './Components/TaskFlow';
import { Auth } from './Components/Autenticacion/Auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <TaskFlow />} />
        <Route path="/Auth" element={ <Auth />} />
      </Routes>
    </Router>
  )
}

export default App