import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { createUserWithEmailAndPassword, SignInUserWithEmailAndPassword, googleSignIn, initializeLogIn as initializeLogIn, updateUserInfo }  from './LoginManager';



const Login = () =>
{
    initializeLogIn();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        userName: '',
        email: '',
        password: '',
        imgSrc: '',
        error: '',
        confirmPassword:'',
        success: false
    });

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleResponse = (res, redirect) =>
    {
        setUser(res)
        setLoggedInUser(res)
        if (redirect)
        {
            history.replace(from);
        }
    }

    const handleGoogleSignIn = () =>
    {
        googleSignIn()
            .then(res =>
            {
                handleResponse(res, true)
            })
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function (error) {
            // Handle error
          });
      }

    const handleSubmit = (event) =>
    {
        if (newUser && user.name && user.email && user.password)
        {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res =>
                {
                    handleResponse(res, true);
                    updateUserInfo(user.name);
                })
        }
        if (!newUser && user.email && user.password)
        {
            SignInUserWithEmailAndPassword(user.email, user.password)
                .then(res =>
                {
                    handleResponse(res, true);
                    setLoggedInUser(res);
                })
        }
        event.preventDefault();
    }

    const handleBlur = (event) =>
    {
        let isFormValid;

        if (event.target.name === 'name')
        {
            isFormValid = event.target.value.length > 4;
        }

        if (event.target.name === 'email')
        {
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
        }

        if (event.target.name === 'password')
        {
            const isPasswordValid = event.target.value.length > 6;
            const isPasswordHasNumber = /\d{1}/.test(event.target.value);
            isFormValid = isPasswordValid && isPasswordHasNumber;
        }
       


        if (isFormValid)
        {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }

    return (
        
        // <section className="container ">
        //     <div className='row login'>
        //     <div className="form-signin mt-5 pt-3 col-md-6">
        //     <form onSubmit={handleSubmit}>
        //         <h1 className="h3 text-center text-brand mb-3 fw-normal">{newUser ? 'Create an account' : 'SignIn'}</h1>
        //         {
        //             newUser &&
        //             <>
        //                 <label htmlFor="inputName" className="visually-hidden">User Name</label>
        //                 <input type="text" onBlur={handleBlur} name="name" className="form-control" placeholder="User Name" required />
        //             </>
        //         }
        //         <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
        //         <input type="email" onBlur={handleBlur} name="email" className="form-control" placeholder="Email address" required autoFocus />
        //         <label htmlFor="inputPassword" className="visually-hidden">Password</label>
        //         <input type="password" onBlur={handleBlur} name="password" className="form-control" placeholder="Min 8 caractor with text and number" required />
               
        //         <button className="w-100 btn btn-lg btn-brand  mb-2" type="submit">{newUser ? 'Create an account' : 'Signin'}</button>
        //         <p>{newUser ? 'Already have an account' : 'Don’t have an account'} ?
        //          <span onClick={() => setNewUser(!newUser)} className="text-warning" style={{ cursor: 'pointer' }}>
        //                 {newUser ? ' Signin' : ' Create an account'}
        //             </span></p>
        //         <p className="text-center">Or</p>
        //         <hr />
        //         <button onClick={handleGoogleSignIn} className="w-100 btn btn-lg btn-outline-success mb-2" type="submit">Connect with Google</button>
                
        //     </form>
        //     {
        //         console.log(user)
        //     }
        //     <p style={{ color: 'red' }}>{user.error}</p>
        //     {
        //         user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>
        //     }
        // </div>
            
        // </div>
        // <Footer></Footer>
        // </section>

        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Login To Your Account</div>
          <button onClick={handleGoogleSignIn} className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
            <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><i className="fab fa-facebook-f" /></span>
            <span>Login with Google</span>
          </button>
          <div className="relative mt-10 h-px bg-gray-300">
            <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
              <span className="bg-white px-4 text-xs text-gray-500 uppercase">Or Login With Email</span>
            </div>
          </div>
          <div className="mt-10">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-6">
                <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <input id="email" type="email" name="email" onBlur={handleBlur}  className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
                      <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>
                  </div>
                  <input id="password" type="password" onBlur={handleBlur}  name="password" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Password" />
                </div>
              </div>
              <div className="flex items-center mb-6 -mt-4">
                <div className="flex ml-auto">
                  <a href="#" className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700">Forgot Your Password?</a>
                </div>
              </div>
              <div className="flex w-full">
                <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                  <span className="mr-2 uppercase">Login</span>
                  <span>
                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center mt-6">
            <a href="#" target="_blank" className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
              <span>
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </span>
              <span className="ml-2">You don't have an account?</span>
            </a>
          </div>
        </div>
      </div>
        
    );
};

export default Login;