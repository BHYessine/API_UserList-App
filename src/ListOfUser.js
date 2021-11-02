import React from 'react'

function ListOfUser(props) {
    
    return (
        <div>
           <li>
                 name:    {props.user.name} <br/>
                 email: {props.user.email} <br/>
                 city: {props.user.address.city} <br/>
            </li>
        </div>
    )
}

export default ListOfUser
