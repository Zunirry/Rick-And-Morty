import React from 'react'
import Llanto from '../img/llanto.png'
function NotFound() {
    return (
        <div>
            <div className="container">
                <div className="row ">
                    <div className="col text-center mt-5 mb-5">
                        <small>Error</small>
                        <h2>404</h2>
                        <br/>
                        <h3>Oh no! we did not find what you were looking for</h3>
                        <img src={Llanto} alt="Page not found" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound