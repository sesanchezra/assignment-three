import React from 'react'

const Location = ({location}) => {
    return (
        <div className='location'>
            <h4><span>Name:</span> {location?.name}</h4>
            <h4><span>Type:</span> {location?.type}</h4>
            <h4><span>Dimension:</span> {location?.dimension}</h4>
            <h4><span>Population:</span> {location?.residents.length}</h4>
        </div>
    )
}

export default Location
