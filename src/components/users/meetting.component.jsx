
import React, { useState, useEffect ,useContext } from "react";

import '../admin/Order.css'
import { UserContext } from './UserContext';

import { AddMeeting, deleteMeeting, getMeeting } from "../../../api/returnListCust.api";

export const MeettingForm = () => {
    const { user } = useContext(UserContext);

    const [serviceType, setserviceType] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [note, setNote] = useState('');
    const [customerName, setcustomerName] = useState('');
    const [telephone, setTelephone] = useState('');
    // const [deleteTelephone, setDeleteTelephone] = useState('');
    // const [meetings, setMeetings] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let newMeeting = {
           
            ServiceType: serviceType,
            DateTime: dateTime,
            Note: note,
            CustomereName: customerName,
            Telephone: telephone
        };
        try {

            await AddMeeting(newMeeting);

            setserviceType('');
            setDateTime('');
            setNote('');
            setcustomerName('');
            setTelephone('');
            alert("הפגישה התווספה בהצלחה!");


        } catch (error) {
            console.log(error);
            alert("ההודעה נכשלה");
        }

    };



    // alert("הפגישה נוספה בהצלחה!");


    // const handleCancel = () => {
    //     deleteMeeting(deleteTelephone);
    //     setDeleteTelephone('');
    // };
    // const handelGet=()=>{
    //     getMeeting(meetings);
    //     setMeetings('');

    // }

    return (
       
    
 
        <div>
                {user && <p>Hi, {user.username}!</p>}
            <br />
            <br />
            <h2>Want to be impressed and get a quote for your event</h2>
            <p>Make an appointment with our event designer</p>

            <form id="Form" onSubmit={handleSubmit}>
                <br />
                <label> The type of event
                    <br></br>
                    <select className="Formbranch" value={serviceType} onChange={(event) => setserviceType(event.target.value)} >
                        <option value="">מה הארוע שלך?</option>
                        <option value="Engagement">ארוע עסקי</option>
                        <option value="Bar Mitzvah">בת מצוה</option>
                        <option value="Bat Mitzvah">בר מצוה</option>
                        <option value="Alliance">ברית</option>
                        <option value="Engagement">אירוסין</option>
                        <option value="Birthday">יום הולדת</option>
                    </select>
                </label>
                <br />
                <br />
                <br />
                <label> The date of the event
                    <br></br>
                    <input type="datetime-local" className="Formbranch" value={dateTime} onChange={(event) => setDateTime(event.target.value)} />
                </label>
                <br />
                <br />
                <br />
                <label> Response to the designer
                    <br></br>
                    <textarea className="Formbranch" value={note} onChange={(event) => setNote(event.target.value)} />
                </label>
                <br />
                <br />
                <br />
                <label> Orderer's name
                    <br></br>
                    <input type="text" className="Formbranch" value={customerName} onChange={(event) => setcustomerName(event.target.value)} />
                </label>
                <br />
                <br />
                <br />
                <label> Contact phone number
                    <br></br>
                    <input type="tel" className="Formbranch" value={telephone} onChange={(event) => setTelephone(event.target.value)} />
                </label>
                <br />
                <br />
                <br />

                <button type="submit" id="ok">לשליחה</button>


            </form>



        </div>
    );
};









// import React, { useState } from "react";
// // import { AdminPage } from './Admin';

// import { AddMeeting } from "../../../api/returnListCust.api";
// // import { useNavigate } from "react-router-dom";

// export const MeettingForm = () => {
//     const [serviceType, setserviceType] = useState('');
//     const [dateTime, setDateTime] = useState('');

//   const handaleSubmit = async (event) => {
//     event.preventDefault();

//     let Manager = {
//       Password: serviceType,
//       Name: dateTime
//     };


//     await AddMeeting(Manager).then(result => {
//     //   navigate("/Admin");
//       alert("קוד תקין");
//     }).error(err => { console.log(err) });



//     setserviceType('');
//     setDateTime('');

//   };


//   return (
//     <div>

//       <br></br>
//       <br></br>
//       <form onSubmit={handaleSubmit}>
//         <label>
//           <input
//             type="text"
//             className="Formbranch"
//             value={serviceType}
//             onChange={(e) => setserviceType(e.target.value)}
//             required
//             placeholder="admin password"
//           />
//         </label>
//         <label>
//           <input
//             type="text"
//             className="Formbranch"
//             value={dateTime}
//             onChange={(e) => setDateTime(e.target.value)}
//             required
//             placeholder="admin name"
//           />
//         </label>
//         <br />
//         <br />


//         <button type="submit" id="ok" >
//           Enter
//         </button>

//       </form>

//       {/* {error && <p>{error}</p>} */}
//     </div>
//   );
// };


{/* Add cancel button */ }
{/* <label> Enter your telephone number to cancel the appointment:<br></br>
                <br></br>
                <input type="tel" value={deleteTelephone} onChange={(event) => setDeleteTelephone(event.target.value)} />
            </label>
            <br />
            <br></br>
            <button className="Formbranch" id="ok" onClick={handleCancel}>Cancel Appointment</button>
            <br /> */}
{/* <button className="Formbranch" id="fetchSessions" onClick={handleFetchSessions}>Fetch Sessions</button> */ }

{/* <button className="Formbranch" id="ok" onClick={handleFetchSessions}>Fetch Sessions</button> */ }
{/* <button className="Formbranch" id="ok" onClick={handelGet}>כל הפגישות
            </button> */}
// useEffect(() => {
//   const fetchMeetings = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/meeting');
//       setMeetings(response.data);
//     } catch (error) {
//       console.error(`Error in fetching meeting list: ${error.message}`);
//     }
//   };

//   fetchMeetings();
// }, []);