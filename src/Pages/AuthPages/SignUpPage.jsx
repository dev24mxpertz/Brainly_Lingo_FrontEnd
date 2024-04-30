
import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import signInImg from "../../Assets/Images/signImg.png";
import Button from "../../Components/Button.jsx";
import "../../Styles/AuthPage.css";
import { SignUp_user } from '../../store/Actions/Authactions.js';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [UserName, setUserName] = useState('');
  const [childrenName, setchildrenName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [UserNameError, setUserNameError] = useState('');
  const [childrenError, SetChildrenError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [clickCheck, setClickCheck] = useState("");

  const handleTermsChange = () => {
    setTermsChecked(!termsChecked);
  };

  const validateInputs = () => {
    let isValid = true;

    if (UserName.trim() === '') {
      setUserNameError('Full name is required');
      isValid = false;
    }
    if (childrenName.trim() === '') {
      SetChildrenError('Children is required');
      isValid = false;
    }

    if (email.trim() === '') {
      setEmailError('Email address is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email address is invalid');
      isValid = false;
    }

    if (password.trim() === '') {
      setPasswordError('Password is required');
      isValid = false;
    } else if (!/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/.test(password)) {
      setPasswordError('Password must be 8 or more characters long and contain at least one letter, one number, and one special character');
      isValid = false;
    }

    if (marketingChecked === false && termsChecked === false) {
      setClickCheck("please accept terms and conditions")
      isValid = false
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      dispatch(SignUp_user({
        Username: UserName,
        // lastName,
        Email: email,
        Password: password,
        Children_Name: childrenName
      })).then(() => {
        navigate("/LeaderBoard");
      });
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
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
          <h2 className='font-poppins font-normal text-white SignText'>Sign up now</h2>
          <form onSubmit={handleSubmit}>
            {/* <div className='flex sm:flex-row flex-col sm:gap-4 gap-1 nameInput'>
              <div className='flex flex-col sm:w-[50%] w-[100%] py-2'>
                <label className=' font-poppins text-white userInfoText'>First name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setFirstNameError('');
                  }}
                  required
                  className='userInfoBox'
                />
                {firstNameError && <span className="text-red-500">{firstNameError}</span>}
              </div>
              <div className='flex flex-col sm:w-[50%] w-[100%] py-2'>
                <label className='font-poppins text-white userInfoText'>Last name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    setLastNameError('');
                  }}
                  required
                  className='userInfoBox'
                />
                {lastNameError && <span className="text-red-500">{lastNameError}</span>}
              </div>
              
            </div> */}
            <div className='flex flex-col py-2 '>
              <label className=' font-poppins text-white userInfoText'>Full Name</label>
              <input
                type="text"
                value={UserName}
                onChange={(e) => {
                  setUserName(e.target.value);
                  setUserNameError('');
                }}
                required
                className='userInfoBox'
              />
              {UserNameError && <span className="text-red-500">{UserNameError}</span>}
            </div>

            <div className='flex flex-col py-2 '>
              <label className=' font-poppins text-white userInfoText'>Children Name</label>
              <input
                type="text"
                value={childrenName}
                onChange={(e) => {
                  setchildrenName(e.target.value);
                  SetChildrenError('');
                }}
                required
                className='userInfoBox'
              />
              {childrenError && <span className="text-red-500">{childrenError}</span>}
            </div>




            <div className='flex flex-col py-2 '>
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
            {/* <div className='flex flex-col py-2 '>
              <label className=' font-poppins text-white userInfoText'>Phone number</label>
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="RU"
                value={phoneNo}
                onChange={setPhoneNo}
              />
              {/* {phoneNoError && <span className="text-red-500">{phoneNoError}</span>} */}
            {/* </div>  */}
            <div className='flex flex-col py-2 '>
              <label className='flex justify-between font-poppins text-white userInfoText'>
                <p>Password</p>
                <p className='flex gap-2 items-center'><span onClick={togglePasswordVisibility}>
                {passwordVisible ? <FaRegEye />:<FaRegEyeSlash /> }
                  </span>Hide</p>

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
            <div>
              <div className="checkbox-container py-4">
                <input
                  type="checkbox"
                  id="termsCheckbox"
                  checked={termsChecked}
                  onChange={handleTermsChange}
                  className='checkItem'
                />
                <label htmlFor="termsCheckbox" className="font-poppins text-white checkbox-text">
                  By creating an account, I agree to our <span className='underline text-sky-500'><Link to="/TermsNPolicy">Terms of use</Link></span> and
                  <span className='underline text-sky-500'><Link to="/TermsNPolicy"> Privacy Policy</Link></span>

                </label>
              </div>


            </div>

            <div className=' flex flex-col items-center text-white gap-4 '>
            <div className=' w-[100%] text-white'>
                <Button btnText="Sign Up" onClickFunction={handleSubmit} />
              </div>
              {/* <div className='flex gap-6'>
                <p>Forgot Password? </p>
                <Link to="/RecoverpassWord">
                  <p className='underline text-sky-500'>Recover now</p>
                </Link>
              </div> */}
              <div className='flex gap-6'>
                <p>Already have an account? </p>
                <Link to="/SignInPage">
                  <p className='underline text-sky-500'>Log in</p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
