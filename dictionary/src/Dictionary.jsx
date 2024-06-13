import {useState} from 'react'
export default function Dictionary(){

    const[input, setInput]=useState("");
    const[meaning, setMeaning]=useState("");
   
    const words=  [
    
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
    
        { word: "Component", meaning: "A reusable building block in React." },
    
        { word: "State", meaning: "An object that stores data for a component." }
    
    ]
    const hashMap= new Map();
    for(var i=0;i<words.length;i++){
        hashMap.set(words[i].word.toLowerCase(), words[i].meaning);
        console.log(hashMap);
    }
    const search=()=>{
        const searchString=input.toLowerCase();
        if(hashMap.has(searchString)){
        const mean=hashMap.get(searchString);
        setMeaning(mean);
        }
        else{
            setMeaning("Word not found in the dictionary.");
        }


    }
    
    return(
        <div>
            <h1>Dictionary App</h1>
            <input type="text"
                placeholder="Search for a word..."
                
                onChange={(e)=>{setInput(e.target.value)}}
            />
            <button onClick={search}>Search</button>   
              Definition: 
           {meaning ? <>{meaning}</> : <></>}
        </div>
    )
}