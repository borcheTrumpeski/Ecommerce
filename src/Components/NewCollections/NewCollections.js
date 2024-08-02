import React from 'react'
import './NewCollections.css'
import NewItem from '../Item/NewItems'

const NewCollections = () => {
    return (
        <div className='new-collections'>
            <h1>New Collections</h1>
            <hr />
            <div className='collections'>
                <NewItem />
            </div>
        </div>
    )
}

export default NewCollections