// import React from 'react';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core'



function Register() {

    const history = useHistory()

    const routerBack = () => {
        history.push('/')
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    function btnRegister (event) {
        event.preventDefault();
        event.preventDefault();

                    fetch('https://lab-api-bq.herokuapp.com/users/', {
                        method: 'POST',
                        headers: {
                            'accept': 'application/json',
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: `email=${email}&password=${password}&role=${role}&restaurant=NaBrasaBurger's&name=${name}`
                    })
                        .then((response) => response.json()).then((json) => {
                             console.log(json);
                            if (json.id !== null) {
                                routerBack();
                            }
                            setName('');
                            setEmail('');
                            setPassword('');
                            setRole('');
                        })

    }
    

    return (

        <div className="App">
            <h1 className="login">Register</h1>
            <form className="loginForm">

                <input type="text" placeholder="Nome*" value={name} id="cadName" onChange={(event) => setName(event.target.value)} />

                <input type="text" placeholder="E-mail*" value={email} id="cadEmail" onChange={(event) => setEmail(event.target.value)} />

                <input type="password" placeholder="Senha*" value={password} id="cadPassword" onChange={(event) => setPassword(event.target.value)} />

                <FormControl component="fieldset">
                    <FormLabel component="legend">Cargo*</FormLabel>
                    <RadioGroup aria-label="" name="gender1" value={role} onChange={(event) => setRole(event.target.value)}>
                        <FormControlLabel value="hall" control={<Radio />} label="Atendente" />
                        <FormControlLabel value="cook" control={<Radio />} label="Cozinheiro" />
                    </RadioGroup>
                </FormControl>

                <button className="btnRegister" onClick={btnRegister}>Acessar</button>


            </form>




        </div>

    );
};

export default Register;