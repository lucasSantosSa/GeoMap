
import {createContext, useContext, useCallback, useState} from 'react';
import React from 'react'

import firebase from '../config/firebase';
import api from '../services/api';
import { Route } from 'react-router';

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

  let [isSigned, setIsSigned] = useState(false)
  const [firebaseUID, setFirebaseUID] = useState('')

  const signIn = useCallback(async(
    {email, password, squadID}
  ) => {
    firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(async(userCredential) => { 
      setFirebaseUID(userCredential.user.uid.toString());
      localStorage.setItem('firebaseUID',firebaseUID); 
      isSigned = setIsSigned(true);
      localStorage.setItem('@GeoMap:isSigned',isSigned); 
      
    }).catch((error) => {
      console.log(error);
      window.alert('E-mail ou Senha não conferem');
    })
  }, []);

  

  const signUp = useCallback(async(
    {name, email, password},
  ) => {
    firebase.auth()
    .createUserWithEmailAndPassword(String(email), String(password))
    .then(async(userCredential) => {
    setFirebaseUID(userCredential.user.uid.toString())
      console.log(firebaseUID);
      await api.post(
        '/User',
        { name: name,
          firebaseUID: firebaseUID, 
          Projects: [''],
          squadID: 'squad6',
        },)
        .catch((error) => {
        console.log(error, 'ERRO DO BACKEND');
      });
    }).catch((error) => {
      console.log(error, 'ERRO DO FIREBASE');
      if (error.code == 'auth/email-already-in-use'){
        window.alert('E-mail já cadastrado')
      }
    });
      window.alert('CADASTRO EFETUADO COM SUCESSO!');
      setFirebaseUID(''); 
    }, []);

  const signOut = useCallback(() => {
    
    firebase.auth().signOut()
    .then(() => {
      isSigned = setIsSigned(false);
      localStorage.removeItem('@GeoMap:isSigned', isSigned);
    }).catch((error) => {
      console.log(error)
    });
    
  }, []);

  return (
    <AuthContext.Provider value={{
      firebaseUID,
      isSigned,
      signIn,
      signUp,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  );

};

function useAuth() {
  
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth deve ser utilizado dentro de um AuthProvider');
  }

  return context;
}

export {AuthProvider, useAuth};

