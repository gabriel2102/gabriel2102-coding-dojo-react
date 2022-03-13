import React, { useState } from 'react'

export const Formulario = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [title, setTitle] = useState("");
    const [titleErrorName, setTitleErrorName] = useState("");
    const [titleErrorLast, setTitleErrorLast] = useState("");
    const [titleErrorEmail, setTitleErrorEmail] = useState("");
    const [titleErrorPass, setTitleErrorPass] = useState("");
    const [titleErrorCPass, setTitleErrorCPass] = useState("");

    const handlerError = (e) =>{
        
        
        if(e.target.name==='firstName'){
            if(e.target.value.length < 3) {
                setTitleErrorName("First Name must be 3 characters or longer!");
            } else {
                setTitleErrorName('');
            }
            setFirstName(e.target.value);
        }
        if(e.target.name==='lastName'){
            if(e.target.value.length < 3) {
                setTitleErrorLast("Last Name must be 3 characters or longer!");
            } else {
                setTitleErrorLast('');
            }
            setLastName(e.target.value);
        } 
        if(e.target.name==='email'){
            if(e.target.value.length < 3) {
                setTitleErrorEmail("Email must be 3 characters or longer!");
            } else {
                setTitleErrorEmail('');
            }
            setEmail(e.target.value);
        }
        if(e.target.name==='password'){
            if(e.target.value.length < 8) {
                setTitleErrorPass("Password must be 8 characters or longer!");
            } else {
                setTitleErrorPass('');
            }
            setPassword(e.target.value);
        }
        console.log(password);
        if(e.target.name==='confirmPassword'){
            if(e.target.value!== password){
                setTitleErrorCPass("Password must match");
            } else {
                setTitleErrorCPass('');
            }
            setConfirmPassword(e.target.value);
        }
    }
    return (
    <div>
        <form>
            <div>
                <label htmlFor='firstName'>First Name</label>
                <input name='firstName' type='text' onChange={handlerError}/>
                {
                    titleErrorName ?
                    <p style={{color:'red'}}>{ titleErrorName }</p> :
                    ''
                }
            </div>
            <div>
                <label htmlFor='lastName'>Last Name</label>
                <input name='lastName' type='text' onChange={handlerError}/>
                {
                    titleErrorLast ?
                    <p style={{color:'red'}}>{ titleErrorLast }</p> :
                    ''
                }
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input name='email' type='email' onChange={handlerError} />
                {
                    titleErrorEmail ?
                    <p style={{color:'red'}}>{ titleErrorEmail }</p> :
                    ''
                }
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input name='password' type='text'onChange={handlerError} />
                {
                    titleErrorPass ?
                    <p style={{color:'red'}}>{ titleErrorPass }</p> :
                    ''
                }
            </div>
            <div>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input name='confirmPassword' type='text'onChange={handlerError} />
                {
                    titleErrorCPass ?
                    <p style={{color:'red'}}>{ titleErrorCPass }</p> :
                    ''
                }
            </div>
        </form>
    </div>
  )
}
