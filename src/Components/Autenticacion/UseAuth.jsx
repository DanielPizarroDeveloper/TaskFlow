/* eslint-disable react/prop-types */
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../js/database/conection/conn.js';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext()

export function UseAuth () {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState(null);
    const [emailVerificated, setEmailVerificated] = useState(false);

    useEffect(() => {
        // Configura el observador de cambios en la autenticación
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser.displayName);  // Puedes guardar toda la info de `currentUser` si la necesitas
                setEmailVerificated(currentUser.emailVerified);
                setEmail(currentUser.email);
            } else {
                setUser(null);
                setEmailVerificated(false);
                setEmail(null);
            }
        });

        // Limpia el observador cuando el componente se desmonte
        return unsubscribe;
    }, []);

    return(
        <AuthContext.Provider value={{ user, setUser, email, setEmail, emailVerificated, setEmailVerificated }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext };