import { TaskFlow } from './Components/TaskFlow';
import { Auth } from './Components/Autenticacion/Auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RegisterAccount } from './Components/Autenticacion/Register';
import { AuthProvider } from './Components/Autenticacion/UseAuth';
import { VerifyEmail } from '../src/Components/Autenticacion/VerifyEmail';

import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={ <TaskFlow />} />
          <Route path='/Authorize' element={ <Auth />} />
          <Route path='/CreateAccount' element={ <RegisterAccount /> } />
          <Route path='/Verify-email' element= { <VerifyEmail /> } />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App