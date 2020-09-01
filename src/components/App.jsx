import React, { useState } from 'react';

function App(){

    const [name, setName] = useState("");
    const [completeName, setCompleteName] = useState("")

    function handleChange(event){
        setName(event.target.value);

        event.preventDefault();
    }

    function handleClick(){
        setCompleteName(name)
    }
    return (
        <div className="container">
            <h1>Hello {completeName}</h1>
            <form onSubmit={handleClick}>
                <input
                    onChange={handleChange} 
                    type="text" 
                    placeholder="What's your name?"
                    value={name} 
                />
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;