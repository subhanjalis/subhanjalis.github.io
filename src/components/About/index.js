import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon, faAws, faGit, faJava, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faC } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';
import { Link, NavLink } from 'react-router-dom'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 3000)
     }, [])
    
    return (
        <>
        <div className='container about-page'>
        <div className="text-zone">
                <h1>
                <AnimatedLetters
                letterClass = {letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} 
                idx={15}
                />
                </h1> 
            <p>I am a dedicated and passionate software engineer actively seeking new opportunities to contribute my expertise. With a strong foundation in software development, I am driven by an insatiable curiosity that propels me to continually seek out and embrace the latest technologies. 
                <p>My journey in the tech world has been marked by a relentless desire to learn and grow, not just professionally, but also personally.</p> I thrive in dynamic environments where innovation and collaboration are at the forefront. My experience is a testament to my adaptability and eagerness to tackle challenges head-on, making me an enthusiastic team player and a proactive problem solver. As I embark on this exciting career path, I am excited to channel my ever-expanding skill set into creating cutting-edge solutions that push the boundaries of what technology can achieve.
        </p>
        <Link to="https://drive.google.com/file/d/1DwI-G87BJ9YJV9dcovoT3wprUd8ISTkG/view?usp=share_link" className='flat-button'>RESUMÉ</Link>
        </div> 
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="Blue"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faNodeJs} color="Green"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJava} color="Orange"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faGit} color="Red"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faAws} color="Black"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faPython} color="Yellow"/>
                    </div>
                </div>
            </div>
            </div>
            <Loader type="pacman"/>
            </>
    )
}

export default About