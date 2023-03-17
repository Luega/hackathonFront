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

  const redirectToHome = () => {
      navigate("/");
  }

  const handleReRender = () => {
    setReRender(!reRender);
  }
  
  return (
    <div className='Home'>
      <header className='Home__Header'>
        <div className='Logo' onClick={redirectToHome}><i className="fa-solid fa-house"></i></div>
        <div>
          <button className='_myBtn add_btn' onClick={handleClick}><i className="fa-solid fa-user-plus"></i></button>
        </div>
      </header>
      <main className='Home__patientsContainer'>
        {patients?.map((patient, index) => {
          return <Client key={index} patient={patient} handleReRender={handleReRender} />
        })}
      </main> 
    </div>
  );
}

export default Home;
