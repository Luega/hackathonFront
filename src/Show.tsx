import React, { useState, useEffect } from 'react';
import './App.css';
import Treatment from './Treatment';
import { Patient } from './types';
import { useParams, useNavigate } from "react-router-dom";
          

function Show() {
  const [patient, setPatient] = useState<Patient>();
  const { id } = useParams();
  
  const getPatient = async () => {
      await fetch(`http://localhost:8000/api/patients/${id}`)
      .then((response) => response.json())
      .then(data => setPatient(data))
      .catch(err => err);
  };

  useEffect(() => { getPatient() }, []);

  const navigate = useNavigate();

  const handleClick = () => {
      navigate(`/patients/${id}/createTreatment`);
  }
  
  return (
    <div className='Show'>
      <h1>{patient?.name} {patient?.surname}</h1>
      <div>{ patient?.age }</div>
      <div>{ patient?.phone }</div>
      <div>{ patient?.address }</div>
      <div>{patient?.email}</div>
      <div className='treatments'>
      {patient?.treatments?.map((treatment, index) => {
        return <Treatment key={index} treatment={treatment} />
      })}
      </div>
      <button onClick={handleClick}>ADD NEW TREATMENT</button>
    </div>
  );
}

export default Show;