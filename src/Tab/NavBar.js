import React ,{useState} from "react"
import './NavBar.css'
function NavBar(props)
{
    const[username,setusername]=useState('');
    const[useremail,setuseremail]=useState('');
    const[usermarks,setusermarks]=useState('');
    const nameenter=(event)=>
    {
        setusername(event.target.value);
    }
    const email =(event)=>
    {
        setuseremail(event.target.value);
    }
    const num =(event)=>
    {
        setusermarks(event.target.value);
    }
    const submit=(event)=>
    {
        event.preventDefault();
        const obj={
            id:Math.random().toString(),
            Name :username,
            Email :useremail,
            Marks :usermarks,
        };
        props.val(obj);
        setusername('');
        setuseremail('');
        setusermarks('');
    }
    

    return(
        <div className="navbar">
                <label>Name</label>
                <input type ='text' value={username} onChange={nameenter}/>
                <label>Email</label>
                <input type ='e-mail' value={useremail} onChange={email}/>
                <label>Marks</label>
                <input type ='number'  value={usermarks} onChange={num}/>
                <button type='submit' onClick={submit}> Add </button>
        </div>
    );
}
export default NavBar;