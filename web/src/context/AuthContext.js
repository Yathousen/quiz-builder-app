import React, { createContext, useState, useEffect } from 'react';

import { Firebase } from '../services';

export const Context = createContext();

const AuthContext = (props) => {
  const [auth, setAuth] = useState({ loading: true });

  useEffect(() => {
    const subscription = Firebase.auth().onAuthStateChanged((session) => {
      if (session) {
        Firebase.auth()
          .currentUser.getIdTokenResult()
          .then((token) => {
            setAuth({ session, token, loading: false });
            session.getIdToken(true);
          })
          .catch((ex) => {
            setAuth({ loading: false });
          });
      } else {
        setAuth({ loading: false });
      }
    });
    return () => subscription && subscription();
  }, []);

  return <Context.Provider value={auth}>{props.children}</Context.Provider>;
};

export default AuthContext;
