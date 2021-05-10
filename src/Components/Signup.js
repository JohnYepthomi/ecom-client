import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        //we return to prevent further login attempts
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      history.push("/");
    } catch {
      setError("Failed to create an account");
      setLoading(false);
    }
  }

  return (
    <>
        <div>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <div variant="danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <fieldset id="email">
              <label>Email</label>
              <input type="email" ref={emailRef} required />
            </fieldset>
            <fieldset id="password">
              <label>Password</label>
              <input type="password" ref={passwordRef} required />
            </fieldset>
            <fieldset id="password-confirm">
              <label>Password Confirmation</label>
              <input type="password" ref={passwordConfirmRef} required />
            </fieldset>
            <button disabled={loading} className="w-100" type="submit">
              Sign Up
            </button>
          </form>
        </div>

        <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login">Log In</Link>
        </div>

    </>
  )
}