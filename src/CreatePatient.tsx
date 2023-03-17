import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';

function CreatePatient() {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const request = new Request("http://localhost:8000/api/patients", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                surname: surname,
                age: age,
                phone: phone,
                address: address,
                email: email,
            }),
        });
        const response = await fetch(request);
        const resJson = await response.json();
        navigate(`/patients/${resJson.id}`);
    };
  
  return (
    <div className='create-patient'>
          <form onSubmit={handleSubmit}>
              <input type="text" value={name} placeholder='name'
              onChange={(e:any) => setName(e.target.value)} />
              <input type="text" value={surname} placeholder='surname'
              onChange={(e:any) => setSurname(e.target.value)} />
              <input type="number" value={age} placeholder='age'
              onChange={(e:any) => setAge(e.target.value)} />
              <input type="number" value={phone} placeholder='phone'
              onChange={(e:any) => setPhone(e.target.value)} />
              <input type="text" value={address} placeholder='address'
              onChange={(e:any) => setAddress(e.target.value)} />
              <input type="text" value={email} placeholder='email'
              onChange={(e:any) => setEmail(e.target.value)} />
              <button type='submit'>Create new patient</button>
          </form>
    </div>
  );
}

export default CreatePatient;
