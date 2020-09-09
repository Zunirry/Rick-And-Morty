import React from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import './styles/Modal.css'


export default function Modal(props) {
    return (
        createPortal(
            <div className=" Modal">
                    <div >
                        <img src={props.id} alt="" />
                    </div>
                    <div >
                        <h2>{props.name}</h2>
                        <strong>ID: </strong> <p>{props.image} </p>
                        <strong>STATUS: </strong> <p>{props.status}</p>
                        <strong>GENDER: </strong> <p>{props.gender}</p>
                        <strong>ORIGIN: </strong> <p>{props.origin}</p>
                        <strong>SPECIE: </strong> <p>{props.species}</p>
                    </div>

                <Link to={{
                    pathname: "/"
                }}
                >
                    <button className="Modal-close" onClick={props.onClick}></button>
                </Link>
            </div>,
            document.getElementById('modal')
        )

    )
}
