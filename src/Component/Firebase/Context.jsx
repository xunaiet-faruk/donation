import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./Firebase";
export const Authcontext = createContext(null);
const provider =new GoogleAuthProvider();
const Context = ({children}) => {
    const [loading, setloading ] = useState(true)
    const [users,setusers] =useState(null)
    const auth = getAuth(app);

const createuser =(email,password) =>{ 
    return createUserWithEmailAndPassword(auth,email,password)
}

const signemaill =(email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
}

const googleprob =() =>{
    return signInWithPopup(auth,provider);
}

const logout = () =>{
    return signOut(auth)
}

useEffect(()=>{

const unsubscribe = onAuthStateChanged(auth,user =>{ 
    setloading(false)
    setusers(user)
    console.log('hlw context peoples', user)
 })

return () =>{
    unsubscribe();
}

},[])

    const Authemail ={createuser,signemaill,users,googleprob,logout,loading }

    return (
       <Authcontext.Provider value={Authemail}>

{children}



       </Authcontext.Provider>
    );
};

export default Context;