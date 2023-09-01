import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import firebaseApp from './firebaseConfig'
import firebase from 'firebase/compat/app'; 
import * as firebaseui from 'firebaseui'
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { addUserThunk } from "../redux/user/user.actions";
import axios from "axios";
import 'firebaseui/dist/firebaseui.css'
import styles from '../pages/index.module.scss'
import githubLogo from '../assets/github-logo.png'

const GithubOAuthButton = ({handleLogin}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);

    const auth = getAuth(firebaseApp);
    const provider = new GithubAuthProvider();

    const addUser = (userInfo) => {
      return dispatch(addUserThunk(userInfo));
    };

    const handleGithubOAuth = () => {
        signInWithPopup(auth, provider).then((result) => {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            // The signed-in user info.
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            auth.onAuthStateChanged((currentUser) => {
                const uid = currentUser.uid;
                const username = currentUser.reloadUserInfo.screenName; 
                // const email = user.reloadUserInfo.providerUserInfo[0].email;
                // const photoUrl = user.reloadUserInfo.photoUrl;
                const accessToken = token; 
                const userInfo = {
                    uid, 
                    username, 
                    name : username, 
                    accessToken
                }
                addUser(userInfo);
                handleLogin();
                // Redirect after 2 seconds
                setTimeout(() => {
                    navigate("/repos", {
                        state: {
                            username,
                        }
                    });
                }, 500); // Delay in milliseconds
            })
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GithubAuthProvider.credentialFromError(error);
            // ...
        });
    }
    return (
        <button type="button" className={styles.container__button} onClick={handleGithubOAuth}>
            <img className={styles.container__button__logo} src={githubLogo} alt="Github Logo" />
            <span className={styles.container__button__text}>Connect to GitHub</span>
        </button>
    );
};

export default GithubOAuthButton;