import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import styled from 'styled-components'; 
import './Login.css'

const LoginContainer = styled.div`
  
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  padding-top: 30px;
  margin-left: 150px;
  margin-right: 150px;
  height: 300px;
  
  .bottom-text{
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
  }

  form{
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    height: 150px;
  }

  .main-text{
    text-align: center;
  }

  fieldset{
    border:0;
  }

  button{
    background: transparent;
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;
    cursor: pointer;
    height: 25px;
    border-radius: 2px;
    color: white;
    background-color: #3fd865;;
  }

  form #email, #password{
      display: flex;
      flex-direction : column;
      justify-content: space-between;
  }

  form input{
    padding: 5px;
    font-size: 16px;
    color: gray !important;    
  }

  a{
    text-decoration: none;
    outline: none;
    border: none;
    color: yellow;
  }
`


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      setLoading(false)
      history.push("/")
    } catch {
      setError("Failed to log in.")
      setLoading(false)
    }
  }

  return ( 
    <div className="login-container">
    <LoginContainer>
      <h2 className="main-text">Log In</h2>
          {error && <div >{error}</div>}
          <form onSubmit={handleSubmit}>
            <fieldset id="email">
              <label>Email</label>
              <input type="email" ref={emailRef} required />
            </fieldset>
            <fieldset id="password">
              <label>Password</label>
              <input type="password" ref={passwordRef} required />
            </fieldset>
            <button disabled={loading} className="w-100" type="submit">
              Log In
            </button>
          </form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <div className="bottom-text">
            Need an account?  <Link to="/signup"> Sign Up</Link>
          </div>
      </LoginContainer>
    </div> 
  )
}