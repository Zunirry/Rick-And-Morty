import React from 'react'
import { Link } from 'react-router-dom'
export default function Cards(props) {

    console.log(props)
    return (
        <div className="col-12 col-md-6 col-lg-3 mb-4">
            <Link to={`/people/${props.id}`} >
                <div className="card card-bg">
                    <img src={props.image} className="card-img-top" title="" alt="" />
                    <div className="card-body">
                        <h6 className="card-title mb-0 font-weight-bold text-uppercase"> {props.name} </h6>
                    </div>
                </div>
            </Link>
        </div>
    )
}