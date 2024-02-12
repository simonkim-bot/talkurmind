import { useState } from "react";
import axios from "axios";
const LoginForm =() =>{
    const [username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit =  async(e)=>{
        e.preventDefault();
         
        const authObject = { 'project-ID':"23ac1941-8213-4850-85bd-22903f978b5e", 'User-Name': username, 'User-Secret':password };
        
        try{
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username',username);
            localStorage.setItem('password',password);

            window.location.reload();
        }catch(error){
            setError('abeg your credentials no be correct')

        }
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">AMA Talkurmind</h1>
                <form onSubmit ={handleSubmit}>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="Password" required/>

                    <div align="center">
                        <button type="submit" className="button">
                            <span>Talk Ur Mind</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm