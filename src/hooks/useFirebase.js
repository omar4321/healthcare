import { getAuth, GithubAuthProvider, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentiction from './../pages/Login/Firebase/firebase.init';

initializeAuthentiction();

const UserFirebase = () =>{
    const [users,setUsers] =  useState({}); 
    const [isloading, setIsloding] = useState(true);
    const auth = getAuth();
    const signInUsingGoogle = () =>{
        setIsloding(true)
        const googleprovider = new GoogleAuthProvider();
        signInWithPopup(auth,googleprovider)
        .then(result =>{
            setUsers(result.user);

        })
        .finally(()=> setIsloding(false));
    }
    
     useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, user=>{
             if(users){
                 setUsers(users);
             }
             else{
                 setUsers({})
             }
             setIsloding(false);
         });
         return () => unsubscribe;
     },[])

    //  github

    const signInUsingGithub = () =>{
        setIsloding(true)
        const GithubProvider = new GithubAuthProvider();
        signInWithPopup(auth,GithubProvider)
        .then(result =>{
            setUsers(result.user);

        })
        .finally(()=> setIsloding(false));
    }
    
     useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, user=>{
             if(users){
                 setUsers(users);
             }
             else{
                 setUsers({})
             }
             setIsloding(false);
         });
         return () => unsubscribe;
     },[])
    const logOut = () =>{
        signOut(auth)
        .then(()=>{})
        .finally(()=> setIsloding(false))
    }
     
    // login
    


    return {
        users,
        logOut,
        signInUsingGoogle,
        isloading,
        signInUsingGithub
    }
}

export default UserFirebase;