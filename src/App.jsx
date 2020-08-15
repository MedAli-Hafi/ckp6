import React from 'react';
import './App.css';
import Profile from './profile/Profile ';
function App() {

  return (
    <div className="prof" >
       <img 
        width="200px" 
        height="200px" 
        style={{borderRadius: '50%', marginBottom: 50}} 
        src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/88079996_599541874234839_1059110386545983488_o.jpg?_nc_cat=108&_nc_sid=174925&_nc_ohc=uZer0JS0XzkAX8RNCre&_nc_ht=scontent.ftun3-1.fna&oh=4dcd241e2de2f920908a1b31954dcbe7&oe=5F5E725B" alt="logo" className="logo"
        />
    <br/>
    <Profile  
     fullName="Med ali Hafi" bio="1993" profession="Front-end Developer " handleName={(name) => alert(name)}>
      </Profile>
    </div>
  );
}

export default App;
