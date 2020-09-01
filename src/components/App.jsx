import React, { useState } from 'react';

function App(){

    const [userName, setUserName] = useState({
        uName: "",
        email: ""
    });

    function handleChange(event) {

       const {value, name} = event.target;
       
       setUserName( prevValue => {
           if (name === "uName") {
               return {
                   uName: value,
                   email: prevValue.email
               };
           } else if (name === "email") {
               return {
               uName: prevValue.uName,
               email: value
           };
        }
       })

       event.preventDefault() 
    }

    return (
        <div className="container">
            <h1>Hello {userName.uName}</h1>
            <form>
                <input
                    name="uName"
                    onChange={handleChange} 
                    placeholder="User Name"
                    value={userName.fName} 
                />
                <input
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                    value={userName.lName} 

                />
            <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default App;