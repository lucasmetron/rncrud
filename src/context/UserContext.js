import React, {createContext, useState} from 'react';
import {users} from '../data/users';

const UserContext = createContext({});

export function UserProvider(props) {
  const [usersList, setUsersList] = useState(users);

  return (
    <UserContext.Provider value={[usersList, setUsersList]}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
