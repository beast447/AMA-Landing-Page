import Logo from '../assets/logo.png';
import { SocialIcon } from 'react-social-icons';

function Header(){
    return(
        <div className="header">
            <img src= {Logo} alt="logo" className="logo"/>
            <div className="social-icons">
                <SocialIcon url="https://www.facebook.com/amaconsultingbusiness1" target="_blank" fgColor="#fff" bgColor="#000" style={{ height: 35, width: 35 }} />
                <SocialIcon url="https://twitter.com/MaePhillips62" target="_blank" fgColor="#fff" bgColor="#000" style={{ height: 35, width: 35 }} />
                <SocialIcon url="https://www.linkedin.com/company/ama-consulting-business-svcs-inc/" target="_blank" fgColor="#fff" bgColor="#000" style={{ height: 35, width: 35 }} />
                <SocialIcon url="https://www.taxbuzz.com/find-the-best-tax-preparer/virginia/madison-heights/mae-phillips" target="_blank" fgColor="#fff" bgColor="#000" style={{ height: 35, width: 35 }} />
            </div>
        </div>
    )
}

export default Header;