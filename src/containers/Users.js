import React, {useState} from 'react';
function Users(){
    const [users, setUsers] = useState([
        {name:"ayushi",age:19},
        {name:"akshita", age:16}
    ])
    return (
        <div>
            <h2>Users</h2>
            <ul>
                {
                    users.map((user,index)=>{
                        return <li>
                            {user.name},{user.age}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default Users;