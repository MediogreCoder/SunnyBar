import React from 'react'
export default function Login(props) {


  return (
    <div class="loginContainer">
       <div>
        <h1>Login</h1>
      </div>
      <div>
        <form onSubmit={props.handleSubmit}>
          <div>
      <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={props.username} onChange={(e) => props.setUsername(e.target.value)} />
          </div>
          <div>
      <label htmlFor="imageURL">Password</label>
            <input type="password" id="imageURL" value={props.password} onChange={(e) => props.setPassword(e.target.value)} />
          </div>
          <div>
        <button type="submit" onClick={() =>
        {
          props.logUserCity()
            }}>Login</button>
            </div>
        </form>
        </div>
      </div>
  );
}



