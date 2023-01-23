import axios from 'axios';

   export const getUsers = async() => 
       await axios.get('http://127.0.0.1:3000/api/tache');