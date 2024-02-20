import React from "react";
import { Outlet,Link } from "react-router-dom";
import Imgemail from '../img/gmail.png';
import Imgphon from '../img/טלפון.png';
import { UserContext } from '../users/userContext';


import { Title } from "./Header.component";

export const AboutPage=()=>{

    return(
        <div>
         


            <Link to={'/about'}></Link>
            <h2>...אז מאיפה הכל התחיל</h2>
            <p>כשהקמנו את 'דבורי & שרי עיצוב בארים', חשבנו בדיוק על אנשים כמוכם. אתם שלא<br />
            מתפשרים על יוקרה וטעם משובח, אתם שנושמים אסתטיקה ויופי ונמשכים לחגיגת<br />
            סטייל, אתם שלא מתפשרים באיכות ובעיצוב. כבר בפגישה עם דבורי & שרי, בה תיבחרו יחד<br />
            'קונספט' ואמירה שמתאימים לאופי האירוע, תוכלו לראות איך החלום שלכם הופך<br />
            ליצירה מציאותית מושלמת. הרעיון קורם עור וגידים והכל תוך תשומת לב, ירידה לפרטים<br />
            הקטנים ומתן דגש על גימורים שעושים את ההבדל בין 'מרשים' לבין אנין, מוקפד ו'עוצר<br />
            נשימה'.<br />
          דבורי & שרי עיצוב בארים' מתחייבת לעמוד בסטנדרט גבוה, הן של איכות חומרים ופרודוקטים והן'<br />
          של חדשנות ויצירתיות על פי מגמות עולות וטרנדים עדכניים בעולם האירועים העסקיים<br />
          והפרטיים. יחד עם דבורי & שרי תוכלו לבחור קו עיצוב אשר ייתפר במיוחד ובהתאמה אישית<br />
          לאירוע שלכם. אז אם אתם מחפשים להוסיף מתוק לאירוע עם עיצוב מלא חן ובר<br />
          מתוקים עוצר נשימה, מיתוג יוקרתי ושזירת פרחים מקצועית ומלאת סטייל, אל תהססו,<br />
         פנו ל'דבורי & שרי עיצוב בארים'
           </p>
<h2>!אנחנו פה לשרותכם</h2>
<img src={Imgphon} alt="phon"></img>
<h3>055-6765951/0533185641</h3>
<br></br>
<img src={Imgemail} alt="email"></img>
<h3>s0556765951@gmail.com/dvory5641@gmail.com</h3>
<div>
            
            <Outlet />
        </div>
        </div>
    )
}