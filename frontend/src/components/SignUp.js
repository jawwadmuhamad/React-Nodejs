import react,{useState} from 'react';

const SignUp=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const postData = ()=>{
        console.log(name, email, password);
    }
    return(
        <div>
            <h1>Register</h1>
            <input type='text' placeholder='name' 
                value={name} onChange={(e)=>setName(e.target.value)}
            />
            <input type='email' placeholder='email' 
                value={email} onChange={(e)=>setEmail(e.target.value)}
            />
            <input type='password' placeholder='password' 
                value={password} onChange={(e)=>setPassword(e.target.value)}
            />
            <button onClick={postData} type='submit'>Submit</button>
        </div>
    )
}

export default SignUp;