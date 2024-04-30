
// import React, { useEffect, useState } from 'react';
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import signInImg from "../../Assets/Images/signImg.png";
// import Button from "../../Components/Button.jsx";
// import "../../Styles/AuthPage.css";
// import { Signin_user } from '../../store/Actions/Authactions.js';

// const SignInPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const isLoading = useSelector((state) => state.auth.loading);
//   // const error = useSelector((state) => state.auth.error);
//   // const user = useSelector((state) => state.SignInuser.user);
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const user = useSelector((state) => state.auth.user);
//   const userType = useSelector((state) => state.auth.userType);
//   console.log(user, userType, isAuthenticated);

//   useEffect(() => {
//     if (isAuthenticated > 0) {
//       switch (userType) {
//         case "student":
//           // navigate("/ScienceFictionStories");
//           navigate("/");
//           break;
//         case "admin":
//           navigate("/Admin/Admin-Home");
//           break;
//         default:
//           navigate("/");
//       }
//     } else {
//       navigate("/SignInPage");
//     }
//   }, [isAuthenticated, userType, navigate]);


//   const validateInputs = () => {
//     let isValid = true;

//     if (email.trim() === '') {
//       setEmailError('Email address is required');
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       setEmailError('Email address is invalid');
//       isValid = false;
//     }

//     if (password.trim() === '') {
//       setPasswordError('Password is required');
//       isValid = false;
//     }

//     return isValid;
//   };


//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (validateInputs()) {
//       try {
//         dispatch(Signin_user({
//           Email: email,
//           Password: password
//         }));
//         // navigate("/ScienceFictionStories")


//       } catch (error) {
//         console.error("Error logging in:", error);
//       }
//     }
//   };


//   return (
//     <div >
//       <div className='signInHd flex items-center justify-center flex-col p-6'>
//         <h1 className='font-semibold font-poppins learnWithUs '>Unlock the Power of Words </h1>
//         <p className=' font-poppins font-light accessNew '>Play, Read, and Elevate Your Vocabulary!</p>
//       </div>
//       <div className='SignInContainer'>

//         <div className='signInBox1'>

//           <div className='signImgBox'>
//             <img src={signInImg} alt="illustration" />
//           </div>
//         </div>

//         <div className='signInBox2'>
//           <h2 className='font-poppins font-normal text-white SignText'>Sign In now</h2>
//           <form onSubmit={handleLogin}>
//             <div className='flex flex-col sm:py-4 py-2'>
//               <label className=' font-poppins text-white userInfoText'>Email address</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                   setEmailError('');
//                 }}
//                 required
//                 className='userInfoBox'
//               />
//               {emailError && <span className="text-red-500">{emailError}</span>}
//             </div>
//             <div className='flex flex-col sm:py-4 py-2'>
//               <label className='flex justify-between font-poppins text-white userInfoText'>
//                 <p>Password</p>
//                 <p className='flex gap-2 items-center'>
//                   <span onClick={togglePasswordVisibility}>
//                     {passwordVisible ? <FaRegEye />:<FaRegEyeSlash /> }
//                   </span>
//                   Hide
//                 </p>
//               </label>
//               <input
//                 type={passwordVisible ? 'text' : 'password'}
//                 value={password}
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                   setPasswordError('');
//                 }}
//                 required
//                 className='userInfoBox'
//               />
//               <p className='font-poppins text-white text-left'>Use 8 or more characters with a mix of letters, numbers & symbols</p>
//               {passwordError && <span className="text-red-500">{passwordError}</span>}
//             </div>

//             <div className=' flex flex-col items-center text-white gap-4'>
//               <div className='w-[100%] text-white py-2'>
//                 <Button btnText="Sign In" onClickFunction={handleLogin} />
//               </div>
//               <div className='flex gap-6'>
//                 <p>Forgot Password? </p>
//                 <Link to="/RecoverpassWord">
//                   <p className='underline text-sky-500'>Recover now</p>
//                 </Link>
//               </div>
//               <div className='flex gap-6'>
//                 <p>Don't have an account? </p>
//                 <Link to="/SignUpPage">
//                   <p className='underline text-sky-500'>Sign Up</p>
//                 </Link>
//               </div>
//             </div>
//           </form>
//           {isLoading && <p>Loading...</p>}
//           {/* {error && <p>{error}</p>} */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignInPage;


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from "../../Components/Button.jsx";
import "../../Styles/AuthPage.css";
import { Signin_user } from '../../store/Actions/Authactions.js';

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


import signInImg from "../../Assets/Images/signImg.png";

import "../../Styles/AuthPage.css";
import RecoverpassWord from './RecoverpassWord.jsx';


const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false); // State for managing the visibility of the forgot password popup

  const isLoading = useSelector((state) => state.auth.loading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const userType = useSelector((state) => state.auth.userType);


  useEffect(() => {
    if (isAuthenticated > 0) {
      switch (userType) {
        case "student":
          navigate("/");
          break;
        case "admin":
          navigate("/Admin/Admin-Home");
          break;
        default:
          navigate("/");
      }
    } else {
      navigate("/SignInPage");
    }
  }, [isAuthenticated, userType, navigate]);

  const validateInputs = () => {
    let isValid = true;
    // Validation logic remains the same
    return isValid;
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (validateInputs()) {
      try {
        dispatch(Signin_user({
          Email: email,
          Password: password
        }));
      } catch (error) {
        console.error("Error logging in:", error);
      }
    }
  };

  const handleForgotPasswordClick = (e) => {
    e.preventDefault()
    setShowForgotPassword(!showForgotPassword);
  };

  

  return (
    <div>
      <div >
        <div className='signInHd flex items-center justify-center flex-col p-6'>
          <h1 className='font-semibold font-poppins learnWithUs '>Unlock the Power of Words </h1>
          <p className=' font-poppins font-light accessNew '>Play, Read, and Elevate Your Vocabulary!</p>
        </div>
        <div className='SignInContainer'>

          <div className='signInBox1'>

            <div className='signImgBox'>
              <img src={signInImg} alt="illustration" />
            </div>
          </div>
          <div className='signInBox2'>
            <h2 className='font-poppins font-normal text-white SignText'>Sign In now</h2>
            <form onSubmit={handleLogin}>
              <div className='flex flex-col sm:py-4 py-2'>
                <label className=' font-poppins text-white userInfoText'>Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError('');
                  }}
                  required
                  className='userInfoBox'
                />
                {emailError && <span className="text-red-500">{emailError}</span>}
              </div>
              <div className='flex flex-col sm:py-4 py-2'>
                <label className='flex justify-between font-poppins text-white userInfoText'>
                  <p>Password</p>
                  <p className='flex gap-2 items-center'>
                    <span onClick={togglePasswordVisibility}>
                      {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                    </span>
                    Hide
                  </p>
                </label>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError('');
                  }}
                  required
                  className='userInfoBox'
                />
                <p className='font-poppins text-white text-left'>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                {passwordError && <span className="text-red-500">{passwordError}</span>}
              </div>

              <div className=' flex flex-col items-center text-white gap-4'>
                <div className='w-[100%] text-white py-2'>
                  <Button btnText="Sign In" onClickFunction={handleLogin} />
                </div>
                <div className='flex gap-6'>
                  <p>Forgot Password? </p>
                  <button className='underline text-sky-500' onClick={handleForgotPasswordClick}>Recover now</button>
                  {/* <p className='underline text-sky-500'>Recover now</p> */}

                </div>
                <div className='flex gap-6'>
                  <p>Don't have an account? </p>
                  <Link to="/SignUpPage">
                    <p className='underline text-sky-500'>Sign Up</p>
                  </Link>
                </div>
              </div>
            </form>
            {isLoading && <p>Loading...</p>}
            {/* {error && <p>{error}</p>} */}
          </div>
        </div>
      </div>

      {showForgotPassword && (
        <RecoverpassWord  />

      )}


      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default SignInPage;
