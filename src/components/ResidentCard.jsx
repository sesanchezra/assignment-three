import React from 'react'
import useCharacterInfo from '../hooks/useCharacterInfo';

const ResidentCard = ({resident}) => {

    const character = useCharacterInfo(resident);
    
    console.log(character);
    return (
        <div className='resident-card'>
            <div className='resident-state'>
                <div className={`resident-status ${character?.status}`}></div>
                <p>{`${character?.status} - ${character?.species}`}</p>
            </div>
            <div className='resident-image'>
                <img src={character?.image} alt={`${character?.id}`} />
            </div>
            <div className='resident-info'>
                <h5><span>{character?.name}</span></h5>
                <h5><span>Origin:</span>{character?.origin.name}</h5>
                <h5><span>Episodes appear:</span>{character?.episode.length}</h5>
            </div>
            
        </div>
    )
}

export default ResidentCard
