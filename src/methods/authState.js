import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react'
import auth from '../services/firebase';

const useAuthState = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        })
    }, [authUser])
    return { authUser }
}

export default useAuthState