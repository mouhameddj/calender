/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin,{ Draggable } from "@fullcalendar/interaction" // needed for dayClick

import timeGridPlugin from  '@fullcalendar/timegrid'
import { Col,Card, Row } from 'antd';
import {getDepartements} from "./api";
import"./Style.css";
import { render } from "@testing-library/react";


   
    const index = () => {
      const [isModalVisible,setisModalVisible]=useState(false);
     
         const [departments, setDepartments] = useState([]);
        
		 
		const handleSelect=(info)=>{
      showModal();
            console.log(info);
        }
        const showModal =()=>{
          setisModalVisible(true)
         }
         const handleOK =()=>{
          setisModalVisible(false)
         }
         const handleCancel  =()=>{
          setisModalVisible(false)
         }
    
     
        
        const drag = () =>{
           
          let dragable=(document.getElementById("external-event"))
       
            new Draggable(dragable,{
            itemSelector:".fc-event",
            eventData: function(eventEl){
               let id =eventEl.getAttribute("nom")  
               let title =eventEl.getAttribute("title")   
               let color =eventEl.getAttribute("color")         
               return{
                id:id,
                title:title,
                color:color
              }
            }
          })
         }
		// useEffect dima wost l component mouch lbara (componentmte3ek index hné )
		  useEffect(() => {
        loadData();
        drag();
				
			});

     const loadData=()=>{
      getDepartements().then(res=>{
					 
        //les données mte3ek bech yjiw mil back hné lifehom liste des departments w kif ta3mil setDepartments taw yafichehom fil front
        setDepartments(res.data);
     }).catch(err=>{
       console.log(err);
       
       
     })

      }
		

  return (
    <div>
        <Row>
        <Col span={6}>
         <Card>
            <div id="external-event">
       
         <ul>
      {departments.map((item, index) => 
        
           
            <li
            className="fc-event" 
            id={item.titre}
            color={item.color}
            key={index} 
            style={{backgroundColor:item.color}}  >
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
      
	   //chouf library mta3 fullcalendar react taw tal9a onclick w ondrop w ... kifeh haw exemple : https://codesandbox.io/s/fullcalendar-react-avoid-drop-on-same-day-wn97b?file=/src/DemoApp.jsx:0-3087
	  
      
    select={handleSelect}
     selectable={true}
 
            />
              </Col>
         </Row>
    </div>
  )
  
}

export default index

