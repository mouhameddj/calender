/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

import timeGridPlugin from  '@fullcalendar/timegrid'
import { Col,Card, Row } from 'antd';
import {getUsers} from "./api";
import"./Style.css";
import { render } from "@testing-library/react";



//const [values,setValues] = useState([])
//useEffect(()=>{},[])
 

    const loaddata =() =>{
        getUsers().then(res=>{
           console.log(res.data);
        }).catch(err=>{
            console.log(err);
        })
    }
    
   
    const index = () => {
        const handleSelect=(info)=>{
            console.log(info);
           
    
        }
       
        const department=[{
            id:'1',titre:'ffffff',color:'#800080'},
            {id:'2',titre:'fffffl',color:'#000080'},
            {id:'1',titre:'fffffm',color:'#FF0000'},]
    


     
  return (
    <div>
        <Row>
        <Col span={6}>
         <Card>
            <div id="external-event">
       
         <ul>
      {department.map((item, index) => 
        
           
            <li
            className="fc-event" 
            key={index} 
            style={{backgroundColor:item.color}} >
              {item.titre} {item.color}
            </li>
         
        )}
    </ul>
    </div>
         </Card>
        </Col>
        <Col span={18}>

     
        <h1>Index full</h1>
        <FullCalendar
        plugins={[ dayGridPlugin,timeGridPlugin, interactionPlugin ]}
       headerToolbar={{
        left:'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay'
       }}
       selectable={true}
       
       select={handleSelect}
      />
              </Col>
         </Row>
    </div>
  )
  
}

export default index