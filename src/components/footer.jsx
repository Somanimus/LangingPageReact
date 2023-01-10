import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './CSS/footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="nav-container">
            <div className="footer-columns">
                <h3 className="title">Company and team</h3>
                <a href="http://" target="_blank" rel="noopener noreferrer">Company and team</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">News and Blog</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Press</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Careers</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Affiliates and partnerships</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Modern slavery statement</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Business</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Investor Relations</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Roadmap</a>
            </div>
            <div className="footer-columns">
                <h3 className="title">Help and support</h3>
                <a href="http://" target="_blank" rel="noopener noreferrer">Help center</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Mid-market rate</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Service status</a>
            </div>
            <div className="footer-columns">
                <h3 className="title">learn more</h3>
                <a href="http://" target="_blank" rel="noopener noreferrer">International Money transfer</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Swift/Codes</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Currency Converter</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">IBAN codes</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Rate alerts</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Compare exchange rates</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Security</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Invoice generator</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Business calculators</a>
            </div>
            <div className="socials ">
                <h3 className="title">Follow us</h3>
                <a href="http://" target="_blank" rel="noopener noreferrer"> <InstagramIcon/></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"> <TwitterIcon/></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"> <FacebookIcon/></a>
            </div>
            </div>
            <div className="copyright">
                <div className="logo"><a href="http://" target="_blank" rel="noopener noreferrer">KASSA24</a></div>
            </div>
        </footer>
   );
};

export default Footer;