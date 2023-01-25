import axios from 'axios';

   export const getDepartements = async() => 
       await axios.get('http://127.0.0.1:3000/api/tache');