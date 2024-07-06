// src/hooks/useUsers.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

const useUsers = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=20');
        setUsers(response.data.results);
      } catch (error) {
        console.error('Error fetching users:', error);
        alert('Error fetching users. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return { users, setUsers, isLoading };
};

export default useUsers;