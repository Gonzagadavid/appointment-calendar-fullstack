import React from 'react';

function SignUp() {
  return (
    <div>
      <h2>Sign up</h2>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Lastname" />
      <input type="email" placeholder="email@server.com" />
      <input type="password" placeholder="password" />
      <button type="button">Send</button>
    </div>
  );
}

export default SignUp;
