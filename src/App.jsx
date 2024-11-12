import { TaskFlow } from './Components/TaskFlow';
import { Auth } from './Components/Autenticacion/Auth';
import { UseAuth } from './Components/Autenticacion/UseAuth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

function App() {
  const { user, emailVerificated } = UseAuth()
  console.log('TaskFlow (User): ', user)
  console.log('TaskFlow (Mail): ', emailVerificated)

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