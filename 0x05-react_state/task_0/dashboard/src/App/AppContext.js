import React  from 'react';

export const defaultUser = {
  email: 'johndoe@gmail.com',
  password: 'johnDoe101',
  isLoggedIn: false,
}

export const defaultLogOut = () => {};

const AppContext = React.createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

export default AppContext;

