import React, { useContext, useEffect } from 'react';
import { MyProvider } from '../context';
import '../styles/show-condition.css';


function ShowConditin() {

    const data = new Date()
    const context = useContext(MyProvider);

    let day: string;

    // get day 
    if(data.getDay() === 0){ day = "Sunday";
    } else if (data.getDay() === 1) {
    day = " Monday";
    } else if (data.getDay()  === 2) {
    day = "Tuesday";
    } else if (data.getDay()  === 3) {
    day = "Wednesday";
    } else if (data.getDay()  === 4) {
    day = "Thursday";
    } else if (data.getDay()  === 5) {
    day = "Friday";
    } else if (data.getDay()  === 6) {
    day = "Saturday";
    }


    const mainElement: Element | null = document.querySelector('.show_condition_container .main');
    const headerElement: Element | null = document.querySelector('.show_condition_container header');

    useEffect(()=>{
        headerElement?.animate([
            {
                transform: 'translateY(-100%)',
                opacity: 0
            },
            {
    
                transform: 'translateY(0%)',
                opacity: 1
    
            }
        ],700)


        mainElement?.animate([
            {
    
                opacity: 0
    
            },
            {
    
                opacity: 1
    
            }
        ],700)

        
    },[context?.search])

    return ( 
        <div className="show_condition_container">
            
            <header>
                <h4>{context?.data.location.country}</h4>
                <span>{context?.data.location.name}</span>
                <span>{day!}</span>
            </header>

            <div className="main">
                <div className='left'>
                    <img src={context?.data.current.condition.icon} alt="" />
                </div>


                <div className='right'>
                    <h4>{context?.data.current.condition.text}</h4>
                    <span>Wind: {context?.data.current.wind_kph}Kph</span>
                    <span>Pressur: {context?.data.current.pressure_in}in</span>
                    <span>Dirction: {context?.data.current.wind_dir}in</span>
                    <h3>{context?.data.current.temp_c}°C / {context?.data.current.temp_f}°F</h3>
                </div>
            </div>
        
        </div>
     );
}

export default React.memo(ShowConditin);