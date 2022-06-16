import React from 'react'

const ResidentCard = () => {

    let status='alive';

    return (
        <div className='resident-card'>
            <div className='resident-state'>
                <div className={`resident-status ${status}`}></div>
                <p>{status}</p>
            </div>
            <img src="" alt="" />

            
        </div>
    )
}

export default ResidentCard
