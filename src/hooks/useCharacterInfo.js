import axios from "axios";
import { useEffect, useState } from "react"

const useCharacterInfo = (resident) => {

    const URL = resident;
    const [character, setCharacter] = useState()

    useEffect(() => {
        axios.get(URL)
            .then(res => setCharacter(res.data))
            .catch(error => console.log(error))
    }, [resident])


    return character
        
   
}

export default useCharacterInfo
