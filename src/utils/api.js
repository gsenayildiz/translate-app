import axios from "axios";

export default axios.create({
    baseURL:"https://text-translator2.p.rapidapi.com",
    headers: {
        'x-rapidapi-key': 'e552ca3b70msh455368d175ebc4bp1e7692jsn5d54ecf619e2',
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
      },
});