import React from 'react';

function Footer() {
  return (
    <div className="footer">
        <div className='footer-div1'>
        <h3>Socials</h3>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
        </div>

        <div className='footer-div2'>
        <h3>Contact</h3>
        <p>Mail:
        <br />
        <br />
        info@whatever.com</p>
        </div>

        <div className='footer-div3'>
        <h3>Address</h3>
        <p>Beispielstraße 48</p>
        <p>28312, Beispielburg</p>
        <p>Deutschland</p>
        </div>
    </div>
  );
}

export default Footer;
