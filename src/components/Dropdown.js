import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import './styles/Menu.css'

export default function Dropdown() {
    
    const filterBySpecieAction = (specieSelected) => {
        return {
            type: 'FILTER_BY_SPECIE',
            payload: {specieSelected}
        }
    }

  

    const dispatch = useDispatch()
    const filterBySpecie = useSelector ((state) => state.filterBySpecie)

    const handleSpecie = (specieSelected) =>{
        const value = specieSelected.target.value
        dispatch(filterBySpecieAction(value))
    }

    return (
        <select onChange={handleSpecie} value={filterBySpecie}>
            <option value="">Filter by Specie</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
            <option value="Humanoid">Humanoid</option>
            <option value="Poopybutthole">Poopybutthole</option>
            <option value="Mythological">Mythological Creature</option>
            <option value="Animal">Animal</option>
            <option value="Robot">Robot</option>
            <option value="Cronenberg">Cronenberg</option>
            <option value="Disease">Disease</option>
            <option value="unknown">unknown</option>
        </select>
    )
}

