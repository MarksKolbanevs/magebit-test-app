import './index.css';
import React from 'react';
import { useState,useEffect } from 'react';
import {SocialFooter} from './components/Social/SocialFooter';

function App() {
  let [errorMessage,setErrorMessage] = useState(String);
  let [email,setEmail] = useState(String);
  let [checkboxValue,setCheckboxValue] = useState(String);
  let [submitButtonDisabled, setSubmitButtonDisabled] = useState(false); // Used to disable button
  let [emailSubmit, setEmailSubmit] = useState(false); // Used to show second screen with trophy after successfull validation
  let [runCheckData, setRunCheckData] = useState(false); // Used to not run validation after loading the page

  useEffect(() => {
    if(runCheckData){ // Will run after user click the submit button
      checkData();
    }
  }, [email, checkboxValue]);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeCheckbox = (event) =>{
    setCheckboxValue(event.target.checked);
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    let dataCheck = checkData();
    if(dataCheck){
      setEmailSubmit(true);
    }
  }

  const checkData = () =>{
    setRunCheckData(true); // Allow run this function in real time
    if(checkboxValue != true){
      setErrorMessage('You must accept the terms and condition');
      setSubmitButtonDisabled(true);
      return false;
    }
    if(email.toLowerCase().endsWith('.co')){
      setErrorMessage('We are not accepting subscriptions from Colombia emails');
      setSubmitButtonDisabled(true);
      return false;
    }
    if(/\S+@\S+\.\S+/.test(email) == true && email.toLowerCase().endsWith('.com')){
      setSubmitButtonDisabled(false);
      setErrorMessage('');
      return true;
    }else{
      setErrorMessage('Please provide a valid email!');
      setSubmitButtonDisabled(true);
      return false;
    };

  }

  return (
    <div className="App">
      <section>
      <div className='contentBx'>
        <nav>
          <div className='nav-bar-logo-content'>
            <img src='assets/logo-icon.svg' href="#"/>
            <img src='assets/logo-text.svg' href="#" id="logo-text"/>
          </div>
          <div className='nav-bar-navigation'>
            <a href = "#">About</a>
            <a href = "#">How it works</a>
            <a href = "#">Contact</a>
          </div>
        </nav>
        {emailSubmit == false ?
        <div className='subscription-main-container'>
        <div className='subscription-main-content'>
          <div className='subscription-main-content__text'>
            <h1>Subscribe to newsletter</h1>
            <p>Subscribe to our newsletter and get 10% discount on pineapple glasses.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className= {`subscription-input-container ${errorMessage?.length > 0 ? 'subscription-input-container-error' : ''}`}>
              <input onChange={handleChangeEmail} name = "email" placeholder='Type your email address here...'/>
              <button disabled={submitButtonDisabled} onClick = {handleSubmit} type="submit">
                {/*Submit button arrow*/}
                <svg width="24" height="14" viewBox="0 0 24 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="currentOpacity" d="M17.7071 0.2929C17.3166 -0.0976334 16.6834 -0.0976334 16.2929 0.2929C15.9023 0.683403 15.9023 1.31658 16.2929 1.70708L20.5858 5.99999H1C0.447693 5.99999 0 6.44772 0 6.99999C0 7.55227 0.447693 7.99999 1 7.99999H20.5858L16.2929 12.2929C15.9023 12.6834 15.9023 13.3166 16.2929 13.7071C16.6834 14.0976 17.3166 14.0976 17.7071 13.7071L23.7071 7.70708C24.0977 7.31658 24.0977 6.6834 23.7071 6.2929L17.7071 0.2929Z"/>
                </svg>
                {/*Submit button arrow*/}
              </button>
            </div>
            {errorMessage?.length > 0 ? <p className='error-message'>{errorMessage}</p>:null}
          </form>
          <div className='terms-of-service'>
              <input onChange={handleChangeCheckbox} type="checkbox" name = "checkbox" id="checkbox"/>
              <label htmlFor="checkbox">I agree to <a href = '#'>terms of service</a></label>
          </div>
          <SocialFooter/>
          </div>
        </div>
        :
          <div className='thanks-for-subscribing-container'>
            <div className='thanks-for-subscribing-content'>
              <img src="assets/cup.svg"/>
                <div className='thanks-for-subscribing-content__text'>
                  <h1>Thanks for subscribing!</h1>
                  <p>You have successfully subscribed to our email listing. Check your email for the discount code.</p>
                </div>
                <SocialFooter/>
            </div>
          </div>
          }
      </div>
      <div className='imgBx'>
        <img src='assets/background.png'/>
      </div>
      </section>
    </div>
  );
}

export default App;
