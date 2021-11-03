import React, { useState, useEffect }  from 'react'
import ListOfUser from './ListOfUser'

function UserList() {
    const [data, setData] = useState([]); 
    const [error, setError] = useState(null); 
    useEffect(() => {
        function fetchData() {     
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json()) 
            .then(res => setData(res))
            .catch(err => setError(err));
            console.log(data) 
        }
        fetchData();
    }, []);
    
    return (
        <div>
            <ul className="cardList" >
                {data.map(course => (
                    <ListOfUser 
                        user = {course}
                    />
                ))}
            </ul>
            
        </div>
    )
}

export default UserList
