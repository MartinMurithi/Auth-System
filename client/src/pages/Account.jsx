import React from 'react'

const Account = () => {
    return (
      <div className="formContainer">
      <form>
        <h5 className="formTitle">Welcome username</h5>
        <label htmlFor="admNo">Username</label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          name="username"
        
          required
        />

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
        <button className="submitBtn">Update Account</button>
      </form>
    </div>
  )
}

export default Account