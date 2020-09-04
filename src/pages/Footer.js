import React from 'react'
import Github from '../img/github.png'
import Facebook from '../img/facebook.png'
import Linkedin from '../img/linkedin.png'
import Instagram from '../img/instagram.png'
import './styles/Footer.css'

function Footer(){
    return(
        <div className=" footer">   
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md mt-2">
                        <small className="font-weight-light ">CREATED BY</small>
                        <p className="font-weight-bold">Zunirry</p>
                    </div>
            </div>
                <div className="row">

                    <div className="col-6 col-md mb-4">
                        <a href="https://github.com/Zunirry">
                            <img src={Github} alt="Zunirry's Github" />
                        </a>
                    </div>
                    <div className="col-6 col-md mb-4">
                        <a href="https://www.linkedin.com/in/milton-fabricio-zuno-ley-94784619a/">
                            <img src={Linkedin} alt="Zunirry's Linkedin" />
                        </a>
                    </div>
                    <div className="col-6 col-md mb-4">
                        <a href="https://www.facebook.com/zZunNoO/">
                            <img src={Facebook} alt="Zunirry's Facebook" />
                        </a>
                    </div>
                    <div className="col-6 col-md mb-4">
                        <a href="https://www.instagram.com/zunirry.boy/">
                            <img src={Instagram} alt="Zunirry's Instagram" />
                        </a>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default Footer