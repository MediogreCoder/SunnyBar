import React from 'react'

import LoggedUser from './loggedUsers';

export default function Login(props) {
  const user = props.holdname

  return (
    <div class="loginContainer">

    <div>
     <h1>Login</h1>
   </div>
   <div>
     <form onSubmit={props.handleSubmit}>
       <div>
         <input type="text" placeholder="Username" id="username" value={props.username} onChange={(e) => props.setUsername(e.target.value)} />
       </div>
       <div>
         <input type="password" placeholder='Password' id="imageURL" value={props.password} onChange={(e) => props.setPassword(e.target.value)} />
       </div>
       <div>
     <button type="submit" onClick={() =>
     {
       props.logUserCity()
         }}>Login</button>
         </div>
     </form>
   </div>







   <div class='rightbox'>
 <div class='rightwave -one'></div>
 <div class='rightwave -two'></div>
 <div class='rightwave -three'></div>
 <div class='leftwave -one'></div>
 <div class='leftwave -two'></div>
 <div class='leftwave -three'></div>  
 <div class='centerRightwave -one'></div>
 <div class='centerRightwave -two'></div>
 <div class='centerRightwave -three'></div>
 <div class='centerLeftwave -one'></div>
 <div class='centerLeftwave -two'></div>
 <div class='centerLeftwave -three'></div>
 <div class='centerwave -one'></div>
 <div class='centerwave -two'></div>
 <div class='centerwave -three'></div>
   </div>
   
   </div>
);
}



