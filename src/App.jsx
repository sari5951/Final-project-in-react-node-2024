import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { UserProvider } from '../src/components/users/userContext';
import { UserContext } from '../src/components/users/userContext';
import './App.css';

import { Title } from './components/pages/Header.component';

function App() {
  return (
    <UserProvider>
      <UserContext.Consumer>
        {({ user }) => (
          <>
            
            <nav style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#EAE1DD',
              height: '50px',
              width: '100%',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
            }}>

              {user && <span style={{ color: 'black', margin: '0 20px' }}>מחובר\ת  :{user.username}</span>}

              <Link to={'./LoginPage'} style={{ color: 'black', margin: '0 20px', textDecoration: 'none' }}>מנהל</Link>
              <Link to={'./massage'} style={{ color: 'black', margin: '0 20px', textDecoration: 'none' }}>הודעה </Link>
              <Link to={'./meetting'} style={{ color: 'black', margin: '0 20px', textDecoration: 'none' }}>לקביעת פגישה</Link>
              <Link to={'./Order'} style={{ color: 'black', margin: '0 20px', textDecoration: 'none' }}>להזמנות</Link>
              <Link to={'/Login'} style={{ color: 'black', margin: '0 20px', textDecoration: 'none' }}>התחברות</Link>
              <Link to={'/AboutPage'} style={{ color: 'black', margin: '0 20px', textDecoration: 'none' }}>עלינו </Link>
              <Link to={''} style={{ color: 'black', margin: '0 20px', textDecoration: 'none' }}>בית</Link>
            </nav>
            <div>
              <Title />
             
              <Outlet />
            </div>
          </>
        )}
      </UserContext.Consumer>
    </UserProvider>
  );
}




export default App
