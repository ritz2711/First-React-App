import React, {useState} from 'react';

import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';


function App() {
  const[userList,setUserList] = useState([]);
  const addUserList = (uName,uAge) =>{
    setUserList((preUsersList) =>{
      return(
        [...preUsersList,
          {name:uName,age:uAge}
        ]
      )
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserList} />
      <UserList users={userList} />

    </div>
  );
}

export default App;
