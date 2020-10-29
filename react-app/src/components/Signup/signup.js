import React, { useState, useReducer } from 'react';
import countries from './countries.json'
import styles from './signup.module.css'

const initialState = { firstName: "", lastName: "", email: "", password: "", country: 0, terms: false }

const reducer = (state, action) => {
    if (action.name === "reset") return { initialState }
    return {
        ...state,
        [action.name]: action.value,
    }
}

const Signup = () => {

    const [formState, setFormState] = useReducer(reducer, initialState)
    const [isFormSubmitting, setIsFormSubmitting] = useState(false)
    const [errors, setErrors] = useState([])

    const isFormValid = () => {
        const err = [];

        for (const [name, value] of Object.entries(formState)) {
            //if (name === 'terms') continue;

            if (value === initialState[name]) {
                err.push(name)
            }
        }

        setErrors(err);
        return err.length === 0
    };

    const handleSubmit = e => {
        e.preventDefault()
        if (isFormValid()) {
            setIsFormSubmitting(true);
            setTimeout(() => {
                setIsFormSubmitting(false);
                //resetFormState()
            }, 3000)
        }
    }

    const handleInputChange = e => {
        const value = (e.target.type === "checkbox") ? e.target.checked : e.target.value
        console.log(e.target.type)
        setFormState({
            name: e.target.name,
            value: value
        })
    }
    
    const { firstName, lastName, email, password, country, terms } = formState

    console.log(errors.includes('firstName'));
    return (
        <div className={styles.login}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                <div className={styles.inputwrapper}>
                    <label htmlFor="firstName">First Name</label>
                    <input                        
                        onChange={handleInputChange}
                        name="firstName"
                        value={firstName}
                        type="text"
                        data-testid="input-firstName"
                    />
                    {errors.includes('firstName') && (
                        <p className={styles.errortext}>First name is required</p>
                    )}
                    <label htmlFor="lastName">Last Name</label>
                    <input                        
                        onChange={handleInputChange}
                        name="lastName"
                        value={lastName}
                        type="text"
                        id="lastName"
                        data-testid="input-lastName"
                    />
                    {errors.includes('lastName') && (
                        <p className={styles.errortext}>Last name is required</p>
                    )}
                    <label htmlFor="email">Email</label>
                    <input                        
                        onChange={handleInputChange}
                        name="email"
                        value={email}
                        type="text"
                        id="email"
                        data-testid="input-email"
                    />
                    {errors.includes('email') && (
                        <p className={styles.errortext}>Email is required</p>
                    )}
                    <label htmlFor="password">Password</label>
                    <input                        
                        onChange={handleInputChange}
                        name="password"
                        value={password}
                        type="password"
                        id="password"
                        data-testid="input-password"
                    />
                    {errors.includes('password') && (
                        <p className={styles.errortext}>Password is required</p>
                    )}
                    <label htmlFor="country">Countries</label>
                    <select id="country" name="country" value={country} onChange={handleInputChange}>
                        <option value=""></option>
                        {countries.map(item =>
                            <option value={item.code}>{item.name}</option>
                        )
                        }
                    </select>
                    {errors.includes('country') && (
                        <p className={styles.errortext}>Country is required</p>
                    )}
                    <label htmlFor="terms">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            checked={terms}
                            onChange={handleInputChange}
                            data-testid="input-terms"
                        />
                     I accept the terms of service</label>
                    {errors.includes('terms') && (
                        <p className={styles.errortext}>Please check terms and conditions</p>
                    )}
                </div>
                <button type="submit">Submit</button>
                <pre>{JSON.stringify(formState, null, 2)}</pre>
            </form>
        </div>
    )
}

export default Signup