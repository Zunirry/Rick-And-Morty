import React from 'react'
export default function PeopleSelected(props) {
    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src={props.image} alt="character" />
                    </div>
                    <div className="col-12 col-md-5 offset-md-1">
                        <h2>
                            <strong>{props.name}</strong><br />
                        </h2>

                        <strong>ID: </strong> <small>{props.id}</small><br />
                        <strong>Location: </strong> <small>{props.location} </small><br />
                        <strong>Origin: </strong> <small>{props.origin} </small><br />
                        <strong>Status: </strong> <small>{props.status}</small><br />
                        <strong>Specie: </strong> <small>{props.species}</small><br />
                        <strong>Gender: </strong> <small>{props.gender} </small><br />
                    </div>
                </div>
            </div>
        </div>
    )
}