import React, { useState } from 'react'

const UserForm = () => {
   const [username, setUsername] = useState( '' )
   const [email, setEmail] = useState( '' )

   const handleSubmit = ( event ) => {
      event.preventDefault()


      console.log( 'username', username )
      console.log( 'email', email )

      setUsername( '' )
      setEmail( '' )
   }

   return (
      <form onSubmit={handleSubmit}>
         <div>
            <label>Username</label>
            <input value={username} onChange={( e ) => { setUsername( e.target.value ) }} type="text" />
         </div>
         <div>
            <label>Email</label>
            <input value={email} onChange={( e ) => { setEmail( e.target.value ) }} type="email" />
         </div>
         <button>Add User</button>
      </form>
   )
}

export default UserForm