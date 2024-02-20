import React from "react";
import { Link } from "react-router-dom";
import { Title } from "../pages/Header.component";
export const Menue=()=>{
    <li>
        <Link to ={'../pages/Home.component'}>עמוד הבית</Link>
        <Link to ={'../pages/about.component'}>אודות</Link>
        <Link to ={'../users/Login.component'}>צור קשר</Link>
      
       
    </li>
    }