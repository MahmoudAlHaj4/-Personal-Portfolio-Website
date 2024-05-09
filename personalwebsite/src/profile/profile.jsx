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

            <section>
                <h2 className="head">Education</h2>
                <div className="education">
                
                <div className="timeline-items flex">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                            <div className="timeline-date">
                                2018
                            </div>
                            <div className="timeline-content">
                                <h3>Youth For Development</h3>
                                <p>
                                    Finishing a one-year accounting training provides essential skills in financial management, i
                                    ncluding reporting, auditing, taxation, and budgeting. Graduates gain hands-on experience with accounting software and real-world case studies, preparing them for roles in various sectors like public accounting, 
                                    corporate finance, or government agencies.
</p>
                            </div>
                        
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                            <div className="timeline-date">
                                2020
                            </div>
                            <div className="timeline-content">
                                <h3>BAU</h3>
                                <p>
                                    A computer engineer is a professional who designs, develops, and maintains computer hardware and software systems. 
                                    They possess expertise in areas such as computer architecture, digital electronics,
                                    programming languages, and operating systems. Computer engineers work on a wide range of projects, 
                                    from designing microprocessors 
                                    and circuit boards to developing software applications and algorithms</p>
                            </div>     
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                            <div className="timeline-date">
                                2023
                            </div>
                            <div className="timeline-content">
                                <h3>Foundation of Computer Science - SE Factory</h3>
                                <p>Completed a refresher course for fundamental Computer Science topics 
                                    that every Software Engineer should be familiar with. These topics include 
                                    Algorithms and Data Structures, Complexity Analysis, Object-Oriented 
                                    Programming </p>
                            </div>     
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                            <div className="timeline-date">
                                2024
                            </div>
                            <div className="timeline-content">
                                <h3>Full-Stack Web Development - SE Factory</h3>
                                <p>Intensive full stack web development program covering cloud 
                                architecture, front-end, back-end development and web application over 
                                12 weeks of lectures, workshops and projects</p>
                            </div>     
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>      
                    </div>
                </div>
                </div>
            </section>

            <section className="services-container">
                <h2 className="head">Services</h2>
                <div className="services">
                    <div className="services-content">
                        <div className="service-box">
                            <div className="service-info">
                                <h4>UI Design</h4>
                                <p>UI Design, short for User Interface Design, focuses on creating visually appealing,
                                     intuitive, and functional interfaces for software applications, websites, or other digital products. 
                                     UI designers work on elements such as layout, typography, color schemes, 
                                    and interactive components to ensure a seamless and engaging user experience.</p>
                            </div>
                        </div>
                        <div className="service-box">
                            <div className="service-info">
                                <h4>Frontend Development</h4>
                                <p> Frontend Development involves building the client-side of web applications or software,
                                     focusing on the parts that users interact with directly.
                                      Frontend developers use languages like HTML, CSS, and JavaScript to create responsive, 
                                      dynamic, and visually appealing interfaces.
                                     They work closely with UI designers to implement designs and ensure smooth user interactions.</p>
                            </div>
                        </div>
                        <div className="service-box">
                            <div className="service-info">
                                <h4>Backend Development</h4>
                                <p>Backend Development focuses on the server-side of web applications, 
                                    dealing with databases, server logic, and ensuring smooth communication between the frontend and the server.
                                     Backend developers use languages like Python, PHP or Node.js, along with frameworks like Django, Laravel or Express.js, 
                                     to build the logic and functionality that powers the application behind the scenes.</p>
                            </div>
                        </div>
                        <div className="service-box">
                            <div className="service-info">
                                <h4>Full Stack Web Developer</h4>
                                <p>Full Stack Development involves working on both the frontend and backend aspects of web development. 
                                    Full stack developers have proficiency in both frontend and backend technologies, 
                                    allowing them to handle all aspects of development, from designing user interfaces to building server logic and databases.
                                     They have a comprehensive understanding of how the different layers of a web application work together,
                                     enabling them to create fully functional and robust software solutions.</p>
                            </div>
                        </div>
                 </div>
                </div>
             
            </section>

           

        </div>
    )
}

export default Profile