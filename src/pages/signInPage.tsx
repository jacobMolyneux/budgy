import {useState, useEffect} from 'react'
import {supabase} from '../supabaseClient'

const SignInPage = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    const signIn = async () => {
        const {data, error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })
    }
    return(
        <section>
            <div>
                <form className = 'border'>
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
                    <button onClick = {() => signIn()}>Sign In</button>
                </form>
            </div>
        </section>
    )
}

export {SignInPage}