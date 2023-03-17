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

    const redirectToHome = () => {
      navigate("/");
    }
  
  return (
      <div className='create-patient'>
        <header className='Home__Header'>
            <div className='Logo' onClick={redirectToHome}><i className="fa-solid fa-house"></i></div>
        </header>
          <form className='create-patient__form' onSubmit={handleSubmit}>
              <label>First Name:</label>
              <input required type="text" value={name} placeholder='First name'
                  onChange={(e: any) => setName(e.target.value)} />
              <label>Last Name:</label>
              <input required type="text" value={surname} placeholder='Last name'
              onChange={(e:any) => setSurname(e.target.value)} />
              <label>Date of birth:</label>
              <input required type="text" value={age} placeholder='YYYY-MM-DD'
                  onChange={(e: any) => setAge(e.target.value)} />
              <label>Phone number:</label>
              <input required type="tel" value={phone} placeholder='mobile phone'
                  onChange={(e: any) => setPhone(e.target.value)} />
              <label>Address:</label>
              <input required type="text" value={address} placeholder='address'
                  onChange={(e: any) => setAddress(e.target.value)} />
              <label>Email:</label>
              <input required type="email" value={email} placeholder='email'
              onChange={(e:any) => setEmail(e.target.value)} />
              <button className='_myBtn add_btn' type='submit'><i className="fa-solid fa-square-plus"></i></button>
          </form>
    </div>
  );
}

export default CreatePatient;
