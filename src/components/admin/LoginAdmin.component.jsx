import React, { useState } from "react";
import { AdminPage } from './Admin';

import { checkAdmin } from "../../../api/returnListCust.api";
import { useNavigate } from "react-router-dom";


export const LoginPage = () => {
  const [password, setPassword] = useState('');
  // const [error, setError] = useState("");

  const [name, setName] = useState('');
  const navigate = useNavigate();
  const handaleSubmit = async (event) => {
    event.preventDefault();

    let Manager = {
      Password: password,
      Name: name
    };
    

    await checkAdmin(Manager).then(result => {
      navigate("/Admin");
      alert("קוד תקין");
    });
    // .error(err => { console.log(err) });


   
    setPassword('');
    setName('');

  };


  return (
    <div>

      <br></br>
      <br></br>
      <form onSubmit={handaleSubmit}>
        <label>
          <input
            type="password"
            className="Formbranch"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="admin password"
          />
        </label>
        <label>
          <input
            type="text"
            className="Formbranch"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="admin name"
          />
        </label>
        <br />
        <br />


        <button type="submit" id="ok" >
          Enter
        </button>

      </form>

      {/* {error && <p>{error}</p>} */}
    </div>
  );
};

