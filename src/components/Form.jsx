import React from 'react'

const Form = ({onSubmitId}) => {
    return (
        <form className='custom-location' onSubmit={onSubmitId}>
        <input type="text" placeholder='Type a location id' />
        <button>Search</button>
      </form>
    )
}

export default Form
