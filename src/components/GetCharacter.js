import React, {useState, useEffect } from 'react'
import Cards from './Cards'
import { useSelector, useDispatch } from 'react-redux'
import Modal from '../modal/Modal'
function GetCharacter() {
    const [nextPage, setNextPage] = useState(1)

    const dispatch = useDispatch()
    const searchFilter = useSelector ((state) => state.searchFilter)
    // const peopleList = useSelector((state) => state.peopleList)
    const peopleList = useSelector((state) =>{
        if('' !== state.filterBySpecie && searchFilter.length === 0){
            return state.peopleFilterBySpecie
        }
        if(searchFilter.length > 0){
            return searchFilter
        }
        return state.peopleList
    })
    
    const handleLoad = () => {
         setNextPage(nextPage + 1)
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
                console.log(error.message)
            })
            
        }
        console.log('ESTO ES EL NEXT PAGE', nextPage)
        FetchData()
    }, [nextPage])
    
    console.log('el estado de mi app es ', peopleList)

    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    
                    
                    {
                        peopleList.map(({ image, name, id }) => {
                            return (
                                <Cards
                                    name={name}
                                    id={id}
                                    key={id}
                                    image={image}
                                />
                            )
                        })
                    }
                </div>
                <button 
                className="col-12 col-md-2 offset-md-5 btn btn-outline-warning mb-4"
                onClick={() =>handleLoad()}
                >
                    Load More!
                </button>


            </div>
        </div>
    )
}



export default GetCharacter