import axios from 'axios';

const API_URL = 'https://swapi.dev/api';

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

export async function searchCharacters(search){
    try {
        const headers = {
            'Content-Type': 'application/json'
        };
        const res = await  axios.get(`${API_URL}/people/?search=${search}`,{headers})
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

export async function getFilm(id){
    try {
        const headers = {
            'Content-Type': 'application/json'
        };
        const res = await  axios.get(`${API_URL}/films/${id}/`,{headers})
       return res.data
    }catch(err){
        throw err.response.data
    }
}

export async function getSpecie(id){
    try {
        const headers = {
            'Content-Type': 'application/json'
        };
        const res = await  axios.get(`${API_URL}/species/${id}/`,{headers})
       return res.data
    }catch(err){
        throw err.response.data
    }
}

export async function getVehicle(id){
    try {
        const headers = {
            'Content-Type': 'application/json'
        };
        const res = await  axios.get(`${API_URL}/vehicles/${id}/`,{headers})
       return res.data
    }catch(err){
        throw err.response.data
    }
}

export async function getStarship(id){
    try {
        const headers = {
            'Content-Type': 'application/json'
        };
        const res = await  axios.get(`${API_URL}/starships/${id}/`,{headers})
       return res.data
    }catch(err){
        throw err.response.data
    }
}

export async function getPlanet(id){
    try {
        const headers = {
            'Content-Type': 'application/json'
        };
        const res = await  axios.get(`${API_URL}/planets/${id}/`,{headers})
       return res.data
    }catch(err){
        throw err.response.data
    }
}
