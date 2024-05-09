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

            <section>
                <div className="home flex center">
                    <div className="home-container flex column">
                        <div className="hero-section">
                            <h1>Hi It's <span>Mahmoud</span></h1>
                            <h3 className="text-animation">I'm a <span></span></h3>
                            <p>Enthusiastic Full Stack Developer with a knack for problem solving, I'm driven to create efficient digital experiences.
                                Looking forward to join a team that can challenge me and introduce me to new experiences. 
                                Let's connect and achieve something amazing together! </p>
                        </div>
                        <div className="social-icons flex">
                            <a href=""><LinkedInIcon className="icon"/></a>
                            <a href=""><GitHubIcon className="icon"/></a>
                            <a href=""><InstagramIcon className="icon"/></a>
                            <a href=""><XIcon className="icon"/></a>
                        </div>

                        <div className="btn-group flex">
                            <button className="btn">Hire</button>
                            <button className="btn">Contact</button>
                        </div>
                    </div>

                <div className="home-img">
                        <img src={image} alt="" />
                </div>
            </div>
            </section>





           

        </div>
    )
}

export default Profile