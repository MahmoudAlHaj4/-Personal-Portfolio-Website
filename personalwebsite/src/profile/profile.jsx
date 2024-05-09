import "./profile.css"
import Button from "./componenet/buttonComponenet"
import image from '../images/sec.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const Profile = ()=>{
    return (
        <div className="main-page flex column">
            <div className="heading flex ">
               <p className="logo"><span>Mahmoud</span> Al Haj</p>

                <div className="navbar flex  ">
                    <a href=""><Button label= "Home" /></a>
                    <a href=""><Button label= "Education"/></a>
                    <a href=""><Button label= "Services"/></a>
                    <a href=""><Button label= "Contact"/></a>
                    
                </div>
            </div>
        </div>
    )
}

export default Profile