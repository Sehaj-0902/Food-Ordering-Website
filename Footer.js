import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../styles/Footer.css";
import Whatsapp from "@mui/icons-material/WhatsApp";

function Footer() {
  return (
    <div className="footer">
<div className="socialMedia">
    <InstagramIcon />  <TwitterIcon />  <LinkedInIcon />  <FacebookIcon /> <Whatsapp/> 
     </div>
<p> &copy; 2024 pizzeriapizza.com </p>
    </div>
  );
}

export default Footer;