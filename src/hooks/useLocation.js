import axios from 'axios'
import { useEffect, useState } from 'react'

const useLocation = () => {

    const [location, setLocation] = useState()
    const [id, setId] = useState(Math.ceil(Math.random() * 126))

    useEffect(() => {
        const API = `https://rickandmortyapi.com/api/location/${id}`

        axios.get(API)
            .then(res => setLocation(res.data))
            .catch(error => console.log(error))

    }, [id])

    const onSubmitId = (e) => {
        e.preventDefault()
        setId(Number(e.target.children[0].value));
    }

    return {location, onSubmitId}
}

export default useLocation
