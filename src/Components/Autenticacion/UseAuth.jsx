/* eslint-disable react/prop-types */
import { auth } from '../../database/conexion/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export function UseAuth () {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [emailVerificated, setEmailVerificated] = useState(false)

    useEffect(() => {
        // Configura el observador de cambios en la autenticación
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser.displayName);  // Puedes guardar toda la info de `currentUser` si la necesitas
                setEmailVerificated(currentUser.emailVerified);
            } else {
                setUser(null);
                setEmailVerificated(false);
            }
        });

        // Limpia el observador cuando el componente se desmonte
        return unsubscribe;
    }, []);

    return(
        <AuthContext.Provider value={{ user, setUser, emailVerificated, setEmailVerificated }}>
            {children}
        </AuthContext.Provider>
    )
}