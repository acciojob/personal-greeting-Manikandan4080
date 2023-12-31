import React,{useState, useEffect} from "react";

const Greetings = () => {
    const [userName, setUsername] = useState('');

    return (
        <div>
            <p>Enter your name:</p>
            <input 
                value={userName}
                onChange={(e)=>setUsername(e.target.value)}>
            </input>
            {
                userName && <p>{`Hello ${userName}!`}</p>
            }
        </div>
    );
}
export default Greetings;