import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className='social-icons'>
      <FaTwitter size={32} color="black" style={{ marginRight: '10px' }} />
      <FaInstagram size={32} color="black" style={{ marginRight: '10px' }} />
      <FaFacebook size={32} color="black" style={{ marginRight: '10px' }} />
      <FaWhatsapp size={32} color="black" style={{ marginRight: '10px' }} />
    </div>
  );
}

export default SocialIcons;
