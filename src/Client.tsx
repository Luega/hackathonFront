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
    <div className='patient grow' onClick={handleClick}>
      <div className='patient__description'>
        <h1>{ patient.name } { patient.surname }</h1>
        <div><span>Date of birth:  </span>{ patient.age }</div>
        <div><span>Phone number:  </span>{ patient.phone }</div>
        <div><span>Address:  </span>{ patient.address }</div>
        <div><span>Email:  </span>{ patient.email }</div>
      </div>
      <button className='_myBtn delete_btn' onClick={deletePatient}><i className="fa-solid fa-trash"></i></button>
    </div>
  );
}

export default Client;
