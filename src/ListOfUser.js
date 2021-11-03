import React from 'react';
import { 
  BsFillPersonFill, 
  BsFillHouseDoorFill, 
  BsFillEnvelopeFill, 
  BsFillTelephoneFill,
  BsGlobe,
  BsFillBriefcaseFill 
} from 'react-icons/bs';
import user from '../public/user.png'

function ListOfUser(props) {
    
    return (
        <div className="userCard">
          <div className="userImg">
              <img 
                src= {user}
                title={props.user.username} 
                alt="user"                 
                />
              <h4> {props.user.username} </h4>
          </div>
           <ul key={props.user.id} className="userBio">
                <li> <BsFillPersonFill className="icon"/> {props.user.name} </li>
                <li> <BsFillHouseDoorFill className="icon"/> {props.user.address.street} {props.user.address.suite}, {props.user.address.city} </li>
                <li> <BsFillEnvelopeFill className="icon"/> {props.user.email} </li>
                <li> <BsFillTelephoneFill className="icon"/> {props.user.phone} </li>
                <li> <BsGlobe className="icon"/> {props.user.website} </li>
                <li> <BsFillBriefcaseFill className="icon"/> {props.user.company.bs} at {props.user.company.name} </li>
            </ul>
        </div>
    )
}

export default ListOfUser
