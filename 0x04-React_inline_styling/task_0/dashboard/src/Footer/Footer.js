import React from "react";
import { getFullYear } from '../utils/utils';
import { getFooterCopy } from '../utils/utils';
// import './Footer.css';

function Footer({ className }) {
  return (
    <div className={className}>
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    </div>
  )
}


export default Footer;