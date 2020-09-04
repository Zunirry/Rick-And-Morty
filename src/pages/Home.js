import React from 'react'
import Search from '../components/Search'
import Dropdown from '../components/Dropdown'
import './styles/Home.css'
import GetCharacter from '../components/GetCharacter'


function Home() {
    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Search/>
                    </div>
                    <div className="col-12 offset-md-4 col-md-2">
                        <Dropdown />
                    </div>
                </div>
            </div>
            <GetCharacter />
        </div>
    )
}

export default Home