import React from 'react'

export default function FormInput(){
    return (
    <form autoComplete="off">
       <input type = "text" name="todo" id="todos" required placeholder="What needs to be done?" />
       <button type = "submit">Create</button>
     </form>
    )
}