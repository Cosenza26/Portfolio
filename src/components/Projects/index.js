import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useState } from 'react';
import Ecommerce from '../../assets/images/ecommerce.png'
import Tictactoe from '../../assets/images/tictactoe.png'
import BudgetTracker from '../../assets/images/budgetTracker.png'


const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 4000)
    },[])


    return (
        <>
            <div className="container project-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['P','r','o','j','e','c','t','s']} idx={15} />
                        <span className='mobile-project'>Projects</span>
                    </h1>
                    
                </div>
                

            </div>  
            <div className="wrapper">
                <div className='card'>
               
                    <div className='image'>
                        <a href='https://github.com/Cosenza26/BudgetTracker' target='_blank' rel='noreferrer'> 
                        <img src={BudgetTracker} alt='Budget Tracker Project' />
                        </a>
                    </div>
                   

                    <div className='content'>
                        <h3>Budget Tracker</h3>
                        <p>
                        This is a budget tracker app that I made using React.
                        </p>
                        <br/>
                        <p>
                            Click image to see the code.
                        </p>
                       

                    </div>

                    


                </div>
                <div className='card'>
               

                    <div className='image'>
                        <a href='https://github.com/Cosenza26/eCommerce' target='_blank' rel='noreferrer'> 
                            <img src={Ecommerce} alt='e-commerce store' />
                        </a>
                    </div>

                    <div className='content'>
                        <h3>eCommerce Website</h3>
                        <p>
                        eCommerce website using React, commercejs and stripe. Commercejs
                        </p>
                        <br/>
                        <p>
                            Click image to see the code.
                        </p>
                       

                    </div>


                </div>


                <div className='card'>
               


                    <div className='image'>
                    <a href='https://github.com/Cosenza26/TicTacToe' target='_blank' rel='noreferrer'> 
                        <img src={Tictactoe} alt='TicTacToe Project' />
                        </a>
                    </div>

                    <div className='content'>
                        <h3>Tic Tac Toe Game</h3>
                        <p>
                        This is a classic Tic Tac Toe game that I made using React.

                        
                        
                        </p>
                        <br/>
                        <p>
                            Click image to see the code.
                        </p>
                        

                        

                    </div>


                </div>
            </div>


            <Loader type="cube-transition"  />
           

        </> 

    )
    

    
}


export default Project;