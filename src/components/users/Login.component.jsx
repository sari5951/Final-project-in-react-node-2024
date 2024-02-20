

// import { Link } from 'react-router-dom';
// import { Title } from "../pages/Header.component";
import React, { useState ,useContext} from "react";
import { AddCustemer, getCustemerID,} from "../../../api/returnListCust.api";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
 import { UserContext } from './UserContext';
// import { BrowserRouter as Router, Route, Switch,useNavigate} from 'react-router-dom';



export const Login = () => {
    const { setUser } = useContext(UserContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isConect,setIsConect]=useState('');
    const [emailUser,setEmailUser]=useState('');
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const newCustomer = {
            Name: name,
            Email: email,
            Phone: phone
        };
         AddCustemer(newCustomer)
                 .then(() => {
                setEmail("");
                setName("");
                setPhone("");
                setIsConect(true);
                alert("הלקוח התווסף בהצלחה!");
                setUser({ username: name });
              navigate('/');

            })
            .catch((error) => {
                console.error(error.message);
            });


            // const handleEmailLogin=(e)=>{
            //     e.preventDefault();
            //     getCustemerID(emailUser);
                


            // };
    };

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" className="Formbranch" value={name} onChange={(e) => setName(e.target.value)} required placeholder="name and last name" />
                </label>
                <br></br>
                <label>
                    <input type="email" className="Formbranch" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
                </label>
                <br></br>
                <label>
                    <input type="text" className="Formbranch" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="telephone" />
                </label>
                <br></br>
                <br></br>
                <button type="submit" id="ok">לאישור ושליחה</button>
            </form>
            <br></br>
           
            {/* <form onSubmit={handleEmailLogin}>
                <label>
                <input type="email" className="Formbranch" value={emailUser} onChange={(e) => setEmailUser(e.target.value)} required placeholder="Email" />
                </label>
                <button type="submit" id="ok">Login with Email</button>
            </form> */}
        </div>
    );
           
      
   
};
// ...............מבוטק

// import React, { useState ,} from "react";
// // import { AddCustomer } from "../../../api/returnListCust.api";
// import { AddCustemer } from "../../../api/returnListCust.api";
// import { UserContext } from './UserContext';

// import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

// export const Login = () => {
//     const { setUser } = useContext(UserContext);
//     const [name, setName] = useState("");useContext
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const [isConnect, setIsConnect] = useState(false);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [username, setUsername] = useState("");
//     const navigate = useNavigate();

//     const handleRegister = (e) => {
//         e.preventDefault();
//         const newCustomer = {
//             Name: name,
//             Email: email,
//             Phone: phone
//         };
//         AddCustemer(newCustomer)
        
//             .then(() => {
//                 setEmail("");
//                 setName("");
//                 setPhone("");
//                 setIsConnect(true);
//                 setIsLoggedIn(true);
//                  setUser({ username: name });
//                 alert("Customer added successfully!");
               
//             })
//             .catch((error) => {
//                 console.error(error.message);
//             });
//     };

//     const handleLogin = (e) => {
//         e.preventDefault();
//         // Add logic for user login
//         setIsLoggedIn(true);
//         alert("Logged in successfully!");
//     };

//     return (
//         <div>
//             {isLoggedIn ? (
//                 <div>
//                     Welcome, {username}! You are logged in.
//                     {/* Add logout button if needed */}
//                 </div>
//             ) : (
//                     <form onSubmit={handleRegister}>
//                         <label>
//                             <input type="text" className="Formbranch" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Name and last name" />
//                         </label>
//                         <label>
//                             <input type="email" className="Formbranch" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
//                         </label>
//                         <label>
//                             <input type="text" className="Formbranch" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="Telephone" />
//                         </label>
//                         <br></br>
//                         <br></br>
//                         <button type="submit" id="ok">Register</button>
//                     </form>
//                 )}

//             {isConnect && (
//                 <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: '50px', width: '50%', margin: '0 auto' }}>
//                     <Link to={'/'} style={{ color: 'black', marginRight: '10px', textDecoration: 'none' }}>Home Page</Link>
//                     <div style={{ width: '1px', height: '100%', backgroundColor: 'black', margin: '0 10px' }}></div>
//                     <Link to={'/AboutPage'} style={{ color: 'black', marginRight: '10px', textDecoration: 'none' }}>About</Link>
//                     <div style={{ width: '1px', height: '100%', backgroundColor: 'black', margin: '0 10px' }}></div>
//                     <Link to={'/Login'} style={{ color: 'black', marginRight: '10px', textDecoration: 'none' }}>Contact</Link>
//                     <div style={{ width: '1px', height: '100%', backgroundColor: 'black', margin: '0 10px' }}></div>
//                     <Link to={'../Order'} style={{ color: 'black', marginRight: '10px', textDecoration: 'none' }}>for orders</Link>
//                     <div style={{ width: '1px', height: '100%', backgroundColor: 'black', margin: '0 10px' }}></div>
//                     <Link to={'../meetting'} style={{ color: 'black', marginRight: '10px', textDecoration: 'none' }}>for meetting</Link>
//                     <div style={{ width: '1px', height: '100%', backgroundColor: 'black', margin: '0 10px' }}></div>
//                     <Link to={'../LoginPage'} style={{ color: 'black', marginRight: '10px', textDecoration: 'none' }}>Log in to admin</Link>
//                     <div style={{ width: '1px', height: '100%', backgroundColor: 'black', margin: '0 10px' }}></div>       <Link to={'./massage'} style={{ color: 'black', marginRight: '10px', textDecoration: 'none' }}>Sending a message to the manager</Link>

//                     {/* Add more links here */}
//                 </nav>
//             )}

//             {!isLoggedIn && (
//                 <form onSubmit={handleLogin}>
//                     <label>
//                         <input type="text" className="Formbranch" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="Username" />
//                     </label>
//                     <button type="submit">Login</button>
//                 </form>
//             )}
//         </div>
//     );
// };
