import { useState } from "react";

export default function IslandForm({ island }) {

  const [phoneNumber, setPhoneNumber] = useState("Type Phone Number");
  const [nameInput, setNameInput] = useState("Type Full Name");

  function checkPhoneNumber (event){
    setPhoneNumber(event.target.value);
  }

  function confirmReservation () {
    window.confirm(`Are you sure you want to book to ${island.name} 
        with the following creditionals.\n Name: ${nameInput}\n Phone: ${phoneNumber}`)
  }

  function nameInputHandler (event){
    setNameInput(event.target.value);
  }

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input  placeholder= {nameInput} onChange={nameInputHandler}/>
      <input  placeholder= {phoneNumber} type="tel" onChange={checkPhoneNumber}/>
      <button className="book" onClick={confirmReservation}>
        Book for today!
      </button>
    </div>
  );
}
