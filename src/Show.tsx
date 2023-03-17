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

  const redirectToHome = () => {
      navigate("/");
  }
  
  return (
    <div className='Show'>
      <header className='Show__Header'>
        <div className='Logo' onClick={redirectToHome}><i className="fa-solid fa-house"></i></div>
        <div>
          <button className='_myBtn add_btn' onClick={handleClick}><i className="fa-solid fa-address-card"></i></button>
        </div>
      </header>
      <div className='Show__patientContainer'>
        <div className='Show__patientInfo'>
          <h1>{patient?.name} {patient?.surname}</h1>
          <div><span>Date of birth: </span>{ patient?.age }</div>
          <div><span>Phone number: </span>{ patient?.phone }</div>
          <div><span>Address: </span>{ patient?.address }</div>
          <div><span>Email: </span>{ patient?.email }</div>
        </div>
        {patient?.treatments?.length != 0 ?
        <div className='Show__patientTreatments'>
          <h3>Treatmnets:</h3>
          {patient?.treatments?.map((treatment, index) => {
            return <Treatment key={index} treatment={treatment} />
          })}
          </div>
          :
          <h3>No treatmnets</h3>
        }
      </div>
    </div>
  );
}

export default Show;