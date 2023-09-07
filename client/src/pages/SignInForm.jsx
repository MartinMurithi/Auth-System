import React from 'react'

const SignInForm = () => {
    return (
      <div className="formContainer">
      <form>
        <h5 className="formTitle">Sign In</h5>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          required
        //   onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          required
        //   onChange={(e) => setAge(e.target.value)}
        />
        <button className="submitBtn">Sign In</button>
      </form>
    </div>
  )
}

export default SignInForm