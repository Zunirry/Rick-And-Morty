import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './styles/Menu.css'


export default function Search(props) {
    const dispatch = useDispatch()
    const searchFilter = useSelector ((state) => state.searchFilter)

    const handleSubmit  = e =>{
        dispatch({
            type: 'FILTER_BY_NAME',
            payload: e.target.value
        })
        
    }
    return (
            <input
                type="text"
                placeholder="Search for a people"
                name="search"
                onChange={handleSubmit}
                defaultValue={searchFilter}
            />

    )
}

