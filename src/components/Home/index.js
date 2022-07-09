import {Link} from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ','C', 'r', 'i', 's', 't', 'h', 'i', 'a', 'n', ' ','C', 'o', 's', 'e', 'n', 'z', 'a',' '];
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', "."];
     
    useEffect(() => {
        setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 4000)
    },[])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className='mobile-home'> Hi,  <br/>
                            I'm Cristhian Cosenza <br/>
                            Web Developer.</span>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        

                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={34} />

                        
                    </h1>

                    <h2> Frontend Developer</h2> 
                     <Link to="/project" className="flat-button">PROJECTS</Link>
               
                </div>
               


            </div>
            <Loader type="cube-transition"  />
        </>
    )


}


export default Home;