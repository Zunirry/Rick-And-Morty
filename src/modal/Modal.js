import React from 'react'
import { createPortal } from 'react-dom'
import { useSelector, useDispatch } from 'react-redux'
import './styles/Modal.css'


export default function Modal(props) {
    const peopleList = useSelector((state) => state.peopleList)
    const modal = useSelector((state) => state.modal)

    if (!props.isOpen) {
        return null
    }
    console.log(peopleList.name)
    return createPortal(
        <div>
            <div className="Modal">
                <h2>asasd</h2>
            </div>
        </div>,
        document.getElementById('modal')
    )
}
