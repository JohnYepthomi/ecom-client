import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <div>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <div variant="danger">{error}</div>}
          {message && <div variant="success">{message}</div>}
          <form onSubmit={handleSubmit}>
            <fieldset id="email">
              <label>Email </label>
              <input type="email" ref={emailRef} required />
            </fieldset>
            <button disabled={loading} className="w-100" type="submit">
              Reset Password
            </button>
          </form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
      </div>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}