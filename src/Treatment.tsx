import React from 'react';
import './App.css';
import { TreatmentType } from './types';

interface Props {
  treatment: TreatmentType;
}

function Treatment({ treatment }: Props) {
  
  return (
    <div className='treatment'>
      <h1>{ treatment.date }</h1>
      <div>{ treatment.medicalHistory }</div>
      <div>{ treatment.symptoms }</div>
      <div>{ treatment.tests }</div>
      <div>{ treatment.physicalExamination }</div>
      <div>{ treatment.diagnosis }</div>
      <div>{ treatment.treatmentPlan }</div>
      <div>{ treatment.techniques }</div>
      <div>{ treatment.treatmentExpectations }</div>
      <div>{ treatment.notes }</div>
    </div>
  );
}

export default Treatment;
