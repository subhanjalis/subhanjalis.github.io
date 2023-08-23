import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon, faAws, faGit, faJava, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faC } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';

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
            <p>Hi lorem ipsum genrator text broHi lorem ipsum genrator text broHi lorem ipsum genrator text broHi lorem ipsum genrator text broHi lorem ipsum genrator text broHi lorem ipsum genrator text broHi lorem ipsum genrator text broHi lorem ipsum genrator text bro</p>
            <p>Hi lorem ipsum genrator text broHi lorem ipsum genrator text broHi lorem ipsum genrator text broHi lorem ipsum genrator text broHi lorem ipsum genrator text broHi lorem ipsum genrator text broHi lorem ipsum genrator text broHi lorem ipsum genrator text bro</p>
            <p>Hi lorem ipsum genrator text broHi lorem ipsum genrator text broHi lorem ipsum genrator text broHi lorem ipsum genrator text broHi lorem ipsum genrator text broHi lorem ipsum genrator text broHi lorem ipsum genrator text broHi lorem ipsum genrator text bro</p>
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