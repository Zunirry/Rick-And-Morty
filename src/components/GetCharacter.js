import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import { useSelector, useDispatch } from 'react-redux'
import Modal from '../modal/Modal'

function GetCharacter() {
    const [nextPage, setNextPage] = useState(1)

    const [modalState, setModalState] = useState({
        isVisible: false,
        id: '',
        image: '',
        name: '',
        status: '',
        species: '',
        gender: '',
        origin: {
            name: ''
        }
    });

    const dispatch = useDispatch()
    const searchFilter = useSelector((state) => state.searchFilter)
    // const peopleList = useSelector((state) => state.peopleList)
    const peopleList = useSelector((state) => {
        // && searchFilter.length === 0
        if ('' !== state.filterBySpecie) {
            return state.peopleFilterBySpecie
        }
        if (searchFilter.length > 0) {
            return searchFilter
        }
        return state.peopleList
    })

    const handleLoad = () => {
        setNextPage(nextPage + 1)
    }

    const handleBackLoad = () => {
        if(nextPage > 1){
            setNextPage(nextPage - 1)
        }
    }

    useEffect(() => {

        function FetchData() {
            fetch(`https://rickandmortyapi.com/api/character/?page=${nextPage}`)
                .then(response => response.json())
                .then((list) => {
                    dispatch({
                        type: 'SET_PEOPLE_LIST',
                        payload: list.results
                    })
                })
                .catch(error => {
                    dispatch({
                        type: 'ERROR',
                        payload: error.message
                    })
                })

        }
        FetchData()
    }, [nextPage, dispatch])

    const handleClick = (id, name, image, status, species, gender, origin ) => {
        setModalState({ 
            ...modalState, 
            id: id,
            image: image,
            name: name,
            status: status,
            species: species,
            gender: gender,
            origin: origin.name,
            isVisible: !modalState.isVisible
        });
    };

    const handleCloseModal = () => {
        setModalState({ ...modalState, isVisible: false });
    }
    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    {
                         peopleList.map(({ image, name, id, status, species, gender, origin }) => {
                            return (
                                <Cards
                                    name={name}
                                    id={id}
                                    key={id}
                                    image={image}
                                    onClick={() => handleClick(image, name, id, status, species, gender, origin)}
                                />
                            )
                        })
                    }
                </div>
                <button
                    className="col-12 col-md-2 btn btn-outline-secondary mb-4 Back-button"
                    onClick={() => handleBackLoad()}
                >
                    Back Page
                </button>
                <button
                    className="col-12 col-md-2 offset-md-8 btn btn-outline-warning mb-4 "
                    onClick={() => handleLoad()}
                >
                    Load More!
                </button>
                {
                    modalState.isVisible &&
                    <Modal 
                    name={modalState.name} 
                    id={modalState.id} 
                    image={modalState.image} 
                    status={modalState.status} 
                    species={modalState.species}
                    gender={modalState.gender}
                    origin={modalState.origin}
                    onClick={handleCloseModal}   
                    />
                }

            </div>
        </div>
    )
}



export default GetCharacter