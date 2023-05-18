import { SupabaseClient } from '@supabase/supabase-js'
import {useState, useEffect} from 'react'
import {supabase} from '../supabaseClient'
const RegisterPage = () => {
    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    const register = async () => {
        const user = await supabase.auth.signUp({      
                "email": email,
                "password": password,
        })    
    }
    return(
        <section>
            <div>
                <form className = 'border'>
                    <div className = 'border flex justify-center'>
                        <div className = 'flex flex-col text-start'>
                            <label>First Name</label>
                            <input type = 'text' className = 'border' onChange = {(e) => setFirstName(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Last Name</label>
                            <input type = 'text' onChange = {(e) => setLastName(e.target.value)}></input>
                        </div>
                    </div>
                    <div>
                        <label>
                            Email Address
                        </label>
                        <input type ='text' onChange = {(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div>
                        <label>
                            Password
                        </label>
                        <input type = 'password' onChange = {(e) => setPassword(e.target.value)}></input>
                    </div>
                    <button onClick = {() => register()}></button>
                </form>
            </div>
        </section>
    )
}

export {RegisterPage}