

import React, { useState ,useContext} from "react";
import {addMessage}   from "../../../api/returnListCust.api";
import { UserContext } from './UserContext';



export const SendMassage = () => {
    const { user } = useContext(UserContext);
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        let Message = {
            Message: message
        };

        try {
            await addMessage(Message);
            alert("ההודעה נשלחה למנהל בהצלחה!");
            setMessage('');
        } catch (error) {
            console.log(error);
            alert("ההודעה נכשלה");
        }
    };

    return (
        <div>
              {user && <p>Hi, {user.username}!</p>}
            <br />
            <form onSubmit={handleSubmit}>
                <label>הודעה למנהל<br />
                    <textarea className="Formbranch" value={message} onChange={(event) => setMessage(event.target.value)} required />
                    </label>
                    <br></br>
                    <button type="submit" id="ok">לשליחה</button>
            </form>
          
              
        </div>
    );
};



export default SendMassage;
