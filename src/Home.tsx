import React, { useState, useEffect, } from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';
import { Patient } from './types';
import Client from './Client';

function Home() {
  const [patients, setPatients] = useState<Patient[]>();
  const [reRender, setReRender] = useState<boolean>(false);

  const getPatients = async () => {
      await fetch('http://localhost:8000/api/patients')
      .then((response) => response.json())
      .then(data => setPatients(data))
      .catch(err => err);
  };

  useEffect(() => { getPatients() }, [reRender]);

  const navigate = useNavigate();

  const handleClick = () => {
      navigate("/createPatient");
  }

  const handleReRender = () => {
    setReRender(!reRender);
  }
  
  return (
    <div className='Home'>
      <header>
        <div>Logo</div>
        <div>
          <button onClick={handleClick}>ADD NEW</button>
        </div>
      </header>
      {patients?.map((patient, index) => {
        return <Client key={index} patient={patient} handleReRender={handleReRender} />
      })}
    </div>
  );
}

export default Home;
