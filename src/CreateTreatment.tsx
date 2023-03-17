import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import './App.css';

function CreateTreatment() {

    const { id } = useParams();

    const [date, setDate] = useState("");
    const [medicalHistory, setMedicalHistory] = useState("");
    const [symptoms, setSymptoms] = useState("");
    const [tests, setTests] = useState("");
    const [physicalExamination, setPhysicalExamination] = useState("");
    const [diagnosis, setDiagnosis] = useState("");
    const [treatmentPlan, setTreatmentPlan] = useState("");
    const [techniques, setTechniques] = useState("");
    const [treatmentExpectations, setTreatmentExpectations] = useState("");
    const [notes, setNotes] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const request = new Request(`http://localhost:8000/api/patients/${id}/treatments`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                date: date,
                medicalHistory: medicalHistory,
                symptoms: symptoms,
                tests: tests,
                physicalExamination: physicalExamination,
                diagnosis: diagnosis,
                treatmentPlan: treatmentPlan,
                techniques: techniques,
                treatmentExpectations: treatmentExpectations,
                notes: notes,
            }),
        });
        const response = await fetch(request);
        const resJson = await response.json();
        navigate(`/patients/${resJson.id}`);
    };

    const redirectToHome = () => {
      navigate("/");
    }
  
  return (
      <div className='create__treatment'>
          <header className='Home__Header'>
            <div className='Logo' onClick={redirectToHome}><i className="fa-solid fa-house"></i></div>
          </header>
          <form className='treatment__form' onSubmit={handleSubmit}>
              <label>Date</label>
              <input required type="text" value={date} placeholder='YYYY-MM-DD'
              onChange={(e:any) => setDate(e.target.value)} />
              <label>Medical History</label>
              <textarea value={medicalHistory}
              onChange={(e:any) => setMedicalHistory(e.target.value)} />
              <label>Symptoms</label>
              <textarea value={symptoms}
              onChange={(e:any) => setSymptoms(e.target.value)} />
              <label>Tests</label>
              <textarea value={tests}
              onChange={(e:any) => setTests(e.target.value)} />
              <label>Physical examination</label>
              <textarea value={physicalExamination}
              onChange={(e:any) => setPhysicalExamination(e.target.value)} />
              <label>Diagnosis</label>
              <textarea value={diagnosis}
              onChange={(e:any) => setDiagnosis(e.target.value)} />
              <label>Treatment plan</label>
              <textarea value={treatmentPlan}
              onChange={(e:any) => setTreatmentPlan(e.target.value)} />
              <label>Techniques</label>
              <textarea value={techniques}
              onChange={(e:any) => setTechniques(e.target.value)} />
              <label>Treatment expectations</label>
              <textarea value={treatmentExpectations}
              onChange={(e:any) => setTreatmentExpectations(e.target.value)} />
              <label>Notes</label>
              <textarea value={notes}
              onChange={(e:any) => setNotes(e.target.value)} />
              <button className='_myBtn add_btn' type='submit'><i className="fa-solid fa-square-plus"></i></button>
          </form>
    </div>
  );
}

export default CreateTreatment;
