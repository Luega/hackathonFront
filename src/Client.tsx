import React from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';
import { Patient } from './types';

interface Props {
  patient: Patient;
  handleReRender: () => void;
}

function Client({ patient, handleReRender }: Props) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/patients/${patient.id}`);
  }

  const deletePatient = async (e: any) => {
    e.stopPropagation();
    await fetch(`http://localhost:8000/api/patients/${patient.id}`, {
      method: "DELETE"
    });
    handleReRender();
  }

  return (
    <div className='patient' onClick={handleClick}>
      <h1>{ patient.name } { patient.surname }</h1>
      <div>{ patient.age }</div>
      <div>{ patient.phone }</div>
      <div>{ patient.address }</div>
      <div>{ patient.email }</div>
      <button onClick={deletePatient}>Delete</button>
    </div>
  );
}

export default Client;
