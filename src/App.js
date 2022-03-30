import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';



function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((previousUsersList) => {
      return([...previousUsersList, {name: uName, age: uAge}]);
    })
  }

  return (
    
    <div>
      <AddUser onAddUser={addUserHandler}/>
      {usersList.length > 0 && <UsersList users={usersList}/>}
    </div>
  );
}

export default App;
