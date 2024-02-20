
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getMeeting, deleteMeeting, putMeeting, getMessages, getCustemer, getCustemerID } from "../../../api/returnListCust.api";

export const AdminPage = () => {

  const [meetinglist, setmeetinglist] = useState([]);
  const [flag, setFlag] = useState(false);
  const [updateMeetingData, setUpdateMeetingData] = useState(null);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);
  const [messagelist, setMessagelist] = useState([]);
  const [customerList, setCustomerList] = useState([]);
  // const [searchPhoneId, setSearchPhoneId] = useState('');
  // const [searchedCustomer, setSearchedCustomer] = useState(null);
  const [customerId, setCustomerId] = useState('');
  const [customer, setCustomer] = useState(null);
  // של  עדכון הפגישה
  const [id, setId] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [dateTime, setDateTime] = useState('');





  useEffect(() => {
    //להצגת כל הפגישות

    const returenMeeting = async () => {
      try {
        const appointments = await getMeeting();
        const { data } = appointments;

        setmeetinglist(data);
        // if(data==null)

      }
      catch {
        console.log("error");
      }

    };

    returenMeeting();

  }, []);


  const handelDeletMeeting = async (id) => {
    try {
      await deleteMeeting(id);
      alert("the meeting deleted succsefuly!");
      const appointments = await getMeeting();
      const { data } = appointments;
      setmeetinglist(data);
    } catch {
      console.log("error");
      alert("the meeting isnot delet!");
    }
  };

  // לעדכון פגישה
  // const handleUpdateMeeting = (id) => {
  //   const meetingToUpdate = meetinglist.find(meeting => meeting.id === id);
  //   setUpdateMeetingData(meetingToUpdate);
  // };


  // const submitUpdateMeeting = async () => {

  //   try {
  //     await putMeeting(updateMeetingData.id, updateMeetingData);
  //     alert('הפגישה התעדכנה בהצלחה!');
  //     const appointments = await getMeeting();
  //     const { data } = appointments;
  //     setmeetinglist(data);
  //     setUpdateMeetingData(null);
  //   } catch {
  //     console.log("error");
  //     alert("העדכון נכשל");
  //   }
  // };

  // לעדכון פגישה חדש!
  const handleUpdateMeeting = async () => {
    const updateData = { CustomereName: customerName, Telephone: telephone, DateTime: dateTime };


    try {
      const response = await axios.put(`http://localhost:3000/meeting/${id}`, updateData);

      if (response.status === 200) {
        console.log('Meeting updated:', response.data);
        alert("succfuly");
        const appointments = await getMeeting();
        const { data } = appointments;
        setmeetinglist(data);
        alert("succfuly");
      } else {
        console.error('Failed to update meeting');
        // Handle update failure
        alert("tuhd");
      }
    } catch (error) {
      console.error('Error updating meeting:', error);
      alert("chtch");
      // Handle error
    }
    //   alert('הפגישה התעדכנה בהצלחה!');
    //   const appointments = await getMeeting();
    //   const { data } = appointments;
    //   setmeetinglist(data);
    //   // setUpdateMeetingData(null);
    // } catch {
    //   console.log("error");
    //   alert("העדכון נכשל");
    // }
  }




  //  לקבלת ההודעות

  useEffect(() => {

    const returenMessage = async () => {
      try {
        const messages = await getMessages();
        const { data } = messages;

        setMessagelist(data);
        // if(data==null)

      }
      catch {
        console.log("error");
      }

    };

    returenMessage();

  }, []);
  // קבלת כל הלקוחות

  useEffect(() => {
    const returnCustomer = async () => {
      try {
        const customers = await getCustemer();
        const { data } = customers;
        setCustomerList(data);
      }
      catch {
        console.log("error");
      }
    }
    returnCustomer();

  }, []);
  //קבלת לקוח ע"פ ID

  //   useEffect(() => {
  //   const searchCustomer = async () => {
  //     try {
  //       const customer = await  getCustemerID(searchPhoneId);
  //       const {data}=customer;
  //       setSearchedCustomer(data);
  //     }
  //     catch (error) {
  //       console.log("error", error);
  //     }
  //   }
  //   searchCustomer()

  // }, []);
  // קבלת לקוח לפי id דרך ב 

  const getCustById = async () => {
    try {
      await getCustemerID(customerId);
      setCustomer('');
      alert("הלקוח הצליח");
    } catch (erroe) {

      console.error('Error fetching customer:', error);

    }
  }
  return (
    <div>
      <ul>
        {flag && meetinglist
          .map((appointment) => (
            <li>
              <p> id:{appointment.id}</p>
              <p> <h5>שם לקוח:</h5> {appointment.CustomereName}</p>
              <p> <h5>טלפון לקוח:</h5>{appointment.Telephone}</p>
              <p><h5>הערת הלקוח:</h5> {appointment.Note}</p>
              <p> <h5>תאריך הזמנה:</h5>{appointment.DateTime}</p>
              <p><h5>סוג הבר:</h5> {appointment.ServiceType}</p>
              <button onClick={() => handelDeletMeeting(appointment.id)}>למחיקת הפגישה</button>
              {/* <button onClick={() => handleUpdateMeeting(appointment.id)}>לעדכון הפגישה</button> */}
              {/* {updateMeetingData && (
                  <div>
                    <h2>Update Meeting</h2>
                    <label><input type="text" className="Formbranch" value={updateMeetingData.CustomerName} onChange={(e) => setUpdateMeetingData({ ...updateMeetingData, CustomerName: e.target.value })} placeholder="שם לקוח" /></label>
                    <br></br>
                    <label><input type="text" className="Formbranch" value={updateMeetingData.Phone} onChange={(e) => setUpdateMeetingData({ ...updateMeetingData, Phone: e.target.value })} placeholder="טלפון לקוח" /></label>
                    <br></br>
                    <label><input type="datetime-local" className="Formbranch" value={updateMeetingData.DateTime} onChange={(e) => setUpdateMeetingData({ ...updateMeetingData, DateTime: e.target.value })} placeholder="תאריך הזמנה" /></label>
                    <br></br>
                    <button onClick={submitUpdateMeeting}>Submit Update</button>
                  </div>
                )} */}
              <div>
                <h4>:לעדכון הפגישה</h4>

                <br></br>
                <input type="text" className="Formbranch" value={id} onChange={(e) => setId(e.target.value)} placeholder="Meeting ID" /><br></br>
                <input type="text" className="Formbranch" value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Customer Name" /><br></br>
                <input type="text" className="Formbranch" value={telephone} onChange={(e) => setTelephone(e.target.value)} placeholder="Telephone" /><br></br>
                <input type="text" className="Formbranch" value={dateTime} onChange={(e) => setDateTime(e.target.value)} placeholder="Date and Time" /><br></br>
                <button onClick={handleUpdateMeeting}>Update Meeting</button>
              </div>
            </li>
          ))
        }
      </ul>

      <ul>
        {
          flag2 && messagelist.map((messages) => (
            <li>
              <p>{messages.message.Message}</p>


            </li>
          ))
        }
      </ul>


      <ul>
        {
          flag3 && customerList.map((customers) => (
            <li>
              <p>{customers.name}</p>
              <p>{customers.email}</p>
              <p>{customers.phone}</p>

            </li>
          ))
        }
      </ul>


      <br></br>
      <br></br>

      {/* {
     flag4  && searchedCustomer(

      
          <div>
            <h2>Customer Details</h2>
            <p>Name: {searchedCustomer.name}</p>
            <p>Email: {searchedCustomer.email}</p>
            <p>Phone: {searchedCustomer.phone}</p>
          </div>
        )

      } */}



      <button id="ok" onClick={() => setFlag(!flag)}>כל הפגישות</button>
      <br></br>
      <br></br>
      <button id="ok" onClick={() => setFlag2(!flag2)}>כל ההודעות</button>
      <br></br>
      <br></br>
      <button id="ok" onClick={() => setFlag3(!flag3)}>כל הלקוחות</button>
      <br></br>
      <br></br>


      <input
        type="text"
        placeholder="Enter Customer ID"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)} />

      <button onClick={getCustById}>Fetch Customer</button>

      {customer && (
        <div>
          <h2>Customer Details</h2>
          <p>ID: {customer.id}</p>
          <p>Name: {customer.name}</p>

        </div>
      )}

      {/* <label>
        <br></br>
        <input type="text" className="Formbranch" value={searchPhoneId} onChange={(event) => setSearchPhoneId(event.target.value)} placeholder="הכנס טלפון לחיפוש"/>
      </label> */}

      <br></br>
      <br></br>
      {/* <button id="ok" onClick={() => setFlag4(!flag4)}> לקוח לפי טלפון</button> */}




    </div>
  )

};