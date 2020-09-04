import React, { useState, useEffect } from 'react'
import PeopleSelected from '../components/PeopleSelected'

export default function People({match}) {
    const [people, setPeople] = useState({

    });

    
    useEffect(() => {
        function fetchData() {
            fetch(`https://rickandmortyapi.com/api/character/${match.params.id}`)
                .then(response => response.json())
                .then(data => {
                    setPeople(data)
                })
                .catch(error => {
                    console.log(error.message)
                })
        }
        fetchData()
    }, [match.params.id])

    return (
        <div className="container mt-4">
            <div className="row">
                <PeopleSelected
                    name={people.name}
                    key={people.id}
                    id={people.id}
                    image={people.image}
                    status={people.status}
                    species={people.species}
                    gender={people.gender}
                    location={people.location?.name}
                    origin={people.origin?.name}
                />
            </div>
        </div>
    )
}