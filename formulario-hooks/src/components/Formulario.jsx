import React, { useState } from 'react'

export const Formulario = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
    <div>
        <form>
            <div>
                <label htmlFor='firstName'>First Name</label>
                <input name='firstName' type='text' onChange={(e)=>setFirstName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='lastName'>Last Name</label>
                <input name='lastName' type='text' onChange={(e)=>setLastName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input name='email' type='email' onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input name='password' type='text'onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div>
                <label htmlFor='confirmPassword'>Password</label>
                <input name='confirmPassword' type='text'onChange={(e)=>setConfirmPassword(e.target.value)} />
            </div>
        </form>
        <h1>Datos</h1>
        <p>Nombre: {firstName}</p>
        <p>Nombre: {lastName}</p>
        <p>Email: {email}</p>
        <p>password: {password}</p>
        <p>password: {confirmPassword}</p>
    </div>
  )
}
