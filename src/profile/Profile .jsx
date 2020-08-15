import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
export default function Profile(props) {

       return (

              <div style={{marginTop: 200}}>
                     <br />
                     <h1>{props.fullName ? props.fullName : "Name"}</h1>
                     <br />
                     <p>{props.bio ? props.bio : "Bio"}</p>
                     <br />
                     <p><strong>{props.profession ? props.profession : "profession"}</strong></p>
                     <br />
                     <i class="fas fa-map-marker-alt"></i>
                     <span className="profile-card-loc__txt">
                            sfax, Tunisia
        </span>
        <br />
        <br />
        <br />
                     <Button onClick={() => props.handleName(props.fullName)} variant="info">Alert name</Button>


              </div>
       )
}
