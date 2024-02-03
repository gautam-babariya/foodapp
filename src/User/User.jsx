import React from 'react';
import Header from '../../components/Header/Header';
import './User.css'
import Checkoption from '../../components/Checkoption/Checkoption';
import Heroimage from '../../components/Heroimage/Heroimage'
import Topsellproduct from '../../components/Topsellproduct/Topsellproduct'
import Cards from '../../components/Cards/Cards';


function User() {
    return (
        <div>
                <Header />
            <div className="checkoptioncomponentdiv-class">
                <Checkoption />
            </div>
            <div className="heroimagecomponentdiv-class">
                <Heroimage />
            </div>
            <div className="topsellproductcomponentdiv-class">
                <Topsellproduct />
            </div>
            <div className="cardscomponentdiv1-class">
                <div className="cardscomponentdiv2-class">
                    <Cards />
                </div>
            </div>
        </div>
    )
}

export default User
