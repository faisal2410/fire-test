/**
 * create a component that will keep track of user's auth state
 * then wrap _app.js so that entire app knows if the user is logged in or not
 */

import React, { useEffect, useContext } from "react";
import firebase from "../firebase";
import { Context } from "../context";

const FirebaseAuthState = ({ children }) => {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        dispatch({
          type: "LOGOUT",
        });
      } else {
        const { token } = await user.getIdTokenResult();
        console.log("TOKEN", token);
        // send this token to backend
        // backend will check if thie token is valid (using firebase admin tool)
        // if it is verified, you get the same user information in the backend too
        // then you can decide to either save this user in your database or update the existing user
        // then send the user information back to client
      }
    });
  }, []);

  return <>{children}</>;
};

export default FirebaseAuthState;
