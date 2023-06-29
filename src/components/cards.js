import React from 'react'
import image1 from "../assets/21172_TICodes_PlatformLanding_PYTHONcircle.png"
import image2 from "../assets/descargar.jpeg"
import image3 from "../assets/python.jpg.png"


export default function Cards() {
    const cards = 
    [
      {
        id:1,
        title: 'React python',
        Image: image1,
        instructor: 'Juan Ayala'
      },
      {
        id:2,
        title: 'Java Docker',
        Image: image2,
        instructor: 'Roberto Ayala'
      },
      {
        id:3,
        title: 'Python word',
        Image: image3,
        instructor: 'Francisco Ayala'
      }
    ]
  
    return (
      <div className="container d-flex justify-content-center aling-item-center h-100">
        <div className="row">
         
              {
                cards.map(c=> (
                  <div className="col-md-4" key={cards.id}>
                    <card 
                    key={c.id}
                    id={c.id}
                    title={c.title}
                    image = {c.Image}
                    instructor = {c.instructor}
                    />
                    </div> 
                ))
  
                
              }
       
         
         
        </div>
      </div>
    );
  }