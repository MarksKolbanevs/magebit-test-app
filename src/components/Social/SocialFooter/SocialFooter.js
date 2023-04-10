import React from 'react';
import './../index.css';
import { FacebookButton,InstagramButton,TwitterButton, YoutubeButton } from '../SocialButtons';

function SocialFooter() {
  return (
    <div className='social-footer'>
      <hr/>
      <div className='social-footer-content'>
        <FacebookButton/>
        <InstagramButton/>
        <TwitterButton/>
        <YoutubeButton/>
        </div>
      </div>
  );
}

export default SocialFooter;
