
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'
import Form from './components/Form';
import Header from './components/Header'
import Location from './components/Location'
import ResidentCard from './components/ResidentCard';
import useLocation from './hooks/useLocation';

function App() {
  const [loading, setLoading] = useState(false)

  const{location,onSubmitId} = useLocation();

  console.log(location?.residents)

  


  return (
    <>
    <Header />
    <div className="App">
      
      <Location
      location={location}
      />
      <Form
        onSubmitId={onSubmitId}
      />
      <div className='residents-cards'>
        {
          location?.residents.map(resident => (
            <ResidentCard
              resident={resident}
              key={resident}
            />
            )
          )
        }
        
        
      </div>
    </div>
    </>
  )
}

export default App
