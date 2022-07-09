import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState , useEffect} from 'react';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 4000)
    },[])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass}   strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']} idx={15} />
                        <span className='mobile-about'>About Me</span>
                    </h1>
                    <p>
                    Recent graduate from Lycoming college with a B.S. in Chemistry, minor in computer science. Throughout my four years of college experienced, I learned a lot about problem solving and critical thinking. These skills helped me finished my degree and are essential for web development
                    </p>

                    <p>
                    I would describe my work ethic as reliable and consistent. I enjoy my work and I find it easy to stay motivated and productive. I’ve also noticed that I feel better at the end of the day when I’ve had a great, productive day. Also, I find it rewarding after having a productive day which gives me motivation to complete the project, and I consider it to be one of my strengths.
                    </p>

                    

                    
                </div>
            </div>
            <Loader type="cube-transition"  />
        </>
    
    );
}

export default About;