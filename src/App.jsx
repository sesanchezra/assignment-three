
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'
import Form from './components/Form';
import Header from './components/Header'
import Location from './components/Location'
import ResidentCard from './components/ResidentCard';
import useLocation from './hooks/useLocation';

function App() {

  const{location,onSubmitId} = useLocation();

  console.log(location);
  return (
    <div className="App">
      <Header />
      <Location
      location={location}
      />
      <Form
        onSubmitId={onSubmitId}
      />
      <div className='residents-cards'>
        <ResidentCard
        />
        <ResidentCard
        />
        <ResidentCard
        />
        <ResidentCard
        />
        <ResidentCard
        />
        <ResidentCard
        />
      </div>
      


    </div>
  )
}

export default App
