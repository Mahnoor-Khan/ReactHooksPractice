import './App.css';
import { useState , useEffect ,createContext, useRef } from 'react';
import ComA from './components/ComA';

const FirstName=createContext()

const App=()=> {
  const LuckyName=useRef(null)
  const [name,setName]=useState('Mahnoor')
  const [show,setShow]=useState(false)
  
  useEffect((()=>
  console.log('ok')
  ),[]);
 
  const getYourName=()=>{
    const name=LuckyName.current.value
    name === "" ? alert('Please Fill the form') : setShow(true);
  }

  return (
    <div>
    
    <h1>{name}</h1>

    <button onClick={()=>setName(<FirstName.Provider value={'Mahnoor Khan'}>
      <ComA/>
    </FirstName.Provider>)}>Click me to get full name!</button>

    <br/><br/>

    <form onSubmit={getYourName}>
    <label>Enter Your Lucky Name</label><br/>
      <input type="text" id="luckyName" ref={LuckyName }/><br/>
      <button>Submit</button>
      <p>{show ? `Your Lucky Name is ${name}` : ""}</p>
    </form>

    </div>
    
  );
}

export default App;
export { FirstName };



