import axios from 'axios';

const API_URL = 'https://swapi.co/api';

export async function getCharacters(page){   
    try {
        const headers = {
            'Content-Type': 'application/json'
        };
        const res = await  axios.get(`${API_URL}/people?page=${page}`,{headers})
       return res.data
    }catch(err){
        throw err.response.data
    }
}

export async function getCharacter(id){   
    try {
        const headers = {
            'Content-Type': 'application/json'
        };
        const res = await  axios.get(`${API_URL}/people/${id}/`,{headers})
       return res.data
    }catch(err){
        throw err.response.data
    }
}