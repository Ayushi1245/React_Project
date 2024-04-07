import React, {useState, useEffect} from 'react';
function Users(){
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then( data =>{
            setUsers(data)
        })
    }, [])
    return (
        <div>
            <h2>Users</h2>
            <ul>
                {
                    users.map((user,index)=>{
                        return <li>
                            {user.name},{user.email}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default Users;