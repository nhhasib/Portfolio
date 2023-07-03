
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import PageHeader from "../../components/PageHeader";

const About = () => {
    return (
        <div className="overflow-hidden">
            <PageHeader
                headerText="About me"
                icon={<FaInfoCircle size={40} />}
            />

            <div className="md:flex flex-row-reverse justify-center items-center">
                <div className="w-1/2">
                    <Animate
                        play
                        duration={1}
                        start={{ transform: "translateX(900px)" }}
                        end={{ transform: "translateX(0px)" }}
                    >
                        <img src="/public/Hasib.png" className="md:p-4 mt-4 mx-20 md:mx-0" alt="" />
                    </Animate>
                </div>
                <div className="md:w-1/2 p-4 md:p-12 md:mx-12">
                    <Animate
                        play
                        duration={1}
                        delay={0.5}
                        start={{ transform: "translateX(-800px)" }}
                        end={{ transform: "translateX(0px)" }}
                    >
                        <h1 className="text-xl md:text-2xl text-orange-400 mb-2 md:mb-4 border-b border-orange-500 w-60">Front End Developer</h1>
                        <p className="text-justify leading-relaxed">I am a passionate front-end developer with a strong focus on creating engaging and user-friendly web experiences.

                            Throughout my career, I have gained valuable experience and expertise in front-end development, allowing me to effectively translate design concepts into interactive and visually appealing websites. With a deep understanding of HTML, CSS, and JavaScript, I have the technical skills necessary to bring ideas to life on the web. <br /> <br />
                            I am passionate about responsive web design, ensuring that websites are accessible and optimized for various devices and screen sizes. I stay up to date with the latest front-end frameworks and libraries, such as React or Vue.js, to leverage their power and enhance the efficiency of my development process.
                        </p>
                    </Animate>
                    <Animate
                        play
                        duration={1}
                        delay={0.5}
                        start={{ transform: "translateY(500px)" }}
                        end={{ transform: "translateX(0px)" }}
                    >
                        <h1 className="mt-8 border-b-2 border-dotted border-orange-400 md:pb-2">Personal Information</h1>
                        <ul className="mt-2 leading-loose">
                            <li>Name: Nafiul Hasan Hasib</li>
                            <li>Phone: +880 1521434921</li>
                            <li>Email: nafiul.hasan1997@gmail.com</li>
                            <li>Address: Tongi, Gazipur, Dhaka, Bangladesh.</li>
                        </ul>
                        <div className="flex justify-center items-center  my-4 gap-5 text-orange-400">
                            <Link to="https://www.facebook.com/NHHasib" target="_blank"><FaFacebook className='text-2xl'></FaFacebook></Link>
                            <Link to="https://www.linkedin.com/in/nafiul-hasan-hasib/" target="_blank"><FaLinkedin className='text-2xl'></FaLinkedin></Link>
                            <Link to="https://github.com/nhhasib" target="_blank"><FaGithub className='text-2xl'></FaGithub></Link>
                        </div>
                    </Animate>
                </div>
            </div>
        </div>
    );
};

export default About;