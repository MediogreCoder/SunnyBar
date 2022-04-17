import React from 'react'
export default function Login(props) {


  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" value={props.username} onChange={(e) => props.setUsername(e.target.value)} />
      <label htmlFor="imageURL">Password</label>
      <input type="text" id="imageURL" value={props.password} onChange={(e) => props.setPassword(e.target.value)} />
        <button type="submit" onClick={() =>
        {
          props.logUserCity()
    }}>Login</button>
    </form>
  );
}



