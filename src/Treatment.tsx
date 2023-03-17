import React from 'react';
import './App.css';
import { TreatmentType } from './types';

interface Props {
  treatment: TreatmentType;
}

function Treatment({ treatment }: Props) {
  
  return (
    <div className='treatment'>
      <h1>{treatment.date}</h1>
      {treatment.medicalHistory ?
        <div className='treatment__info'>
          <h4>Medical History</h4>
          <div>{ treatment.medicalHistory }</div>
        </div>
        :
        null
      }
      {treatment.symptoms ?
        <div className='treatment__info'>
          <h4>Symptoms</h4>
          <div>{ treatment.symptoms }</div>
        </div>
        :
        null
      }
      {treatment.tests ?
        <div className='treatment__info'>
          <h4>Tests</h4>
          <div>{ treatment.tests }</div>
        </div>
        :
        null
      }
      {treatment.physicalExamination ?
        <div className='treatment__info'>
          <h4>Physical Examination</h4>
          <div>{ treatment.physicalExamination }</div>
        </div>
        :
        null
      }
      {treatment.diagnosis ?
        <div className='treatment__info'>
          <h4>Diagnosis</h4>
          <div>{ treatment.diagnosis }</div>
        </div>
        :
        null
      }
      {treatment.treatmentPlan ?
        <div className='treatment__info'>
          <h4>Treatment Plan</h4>
          <div>{ treatment.treatmentPlan }</div>
        </div>
        :
        null
      }
      {treatment.techniques ?
        <div className='treatment__info'>
          <h4>Techniques</h4>
          <div>{ treatment.techniques }</div>
        </div>
        :
        null
      }
      {treatment.treatmentExpectations ?
        <div className='treatment__info'>
          <h4>Treatment Expectations</h4>
          <div>{ treatment.treatmentExpectations }</div>
        </div>
        :
        null
      }
      {treatment.notes ?
        <div className='treatment__info'>
          <h4>Notes</h4>
          <div>{ treatment.notes }</div>
        </div>
        :
        null
      }
    </div>
  );
}

export default Treatment;
