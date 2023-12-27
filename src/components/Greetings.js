import React,{useState, useEffect} from "react";

const Greetings = () => {
    const [userName, setUsername] = useState('');
    const [greeting, setGreeting] = useState('');

    useEffect(() =>{
        greet(userName);
    }, [userName]);

    return (
        <div>
            <p>Enter your name:</p>
            <input 
                value={userName}
                onChange={(e)=>setUsername(e.target.value)}>
            </input>
            <p>{greeting}</p>
        </div>
    );

    function greet(name){
        if(name){
            setGreeting(`Hello ${name}!`);
        }
        else{
            setGreeting('');
        }
    }
}
export default Greetings;