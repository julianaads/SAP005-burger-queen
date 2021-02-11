// import React from 'react';

import React,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {Link} from '@material-ui/core'

function Login(){

    const history = useHistory()

    // const routerBack = () => {
    //     history.push('/')
    // }

     const routerHall=()=>{
     history.push('/Hall')
     }
    // const routerKitchen=()=>{
    //   history.push('/Kitchen')
    // }
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function btnLogin(event){
        event.preventDefault();
        fetch('https://lab-api-bq.herokuapp.com/users/', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `email=${email}&password=${password}`
        })
            .then((response) => response.json()).then((json) => {
                 console.log(json);
                if (json.id !== null) {
                    routerHall();
                }
                setEmail('');
                setPassword('');

            })
        
    };

    return(
        <div className="App">
            <h1 className="login">Login</h1>
            <form className="loginForm">
                
                <input type="text" placeholder="E-mail*" value={email}  id="emailInput" onChange={(event) => setEmail(event.target.value)}/>

                <input type="password" placeholder="Senha*" value={password} id="loginInput" onChange={(event) => setPassword(event.target.value)}/>

                <button className="loginBtn" onClick={btnLogin}>Acessar</button>

               <p>Novo por aqui? <Link href="/register">Registre-se</Link></p>


            </form>
        </div>
    )

    
};


export default Login;