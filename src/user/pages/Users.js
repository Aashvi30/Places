import React from 'react';
import UsersList from '../components/UserList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Aashvi',
      image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d',
      places: 1
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
