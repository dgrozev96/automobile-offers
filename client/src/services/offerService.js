import { request } from './requester';

const baseUrl = 'http://localhost:3030/data';

export const getAll = () => request(`${baseUrl}/offers`)

export const create = async (offerData, token) => {
    let response = await fetch(`${baseUrl}/offers`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({ ...offerData, likes: "0" })
    });

    let result = await response.json();

    return result;
};

export const getOne = (offerId) => {
    return fetch(`${baseUrl}/offers/${offerId}`)
        .then(res => res.json())
};

export const destroy = (offerId, token) => {
    return fetch(`${baseUrl}/offers/${offerId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
}

export const like = async (offerId) => {
   
        return fetch(`${baseUrl}/offers/${offerId}`)
        .then(res =>res.json())
        
    
    // let response = await fetch(`${baseUrl}/offers/${offer._id}`, {
    //     method: 'PATCH',
    //     headers: {
    //         'content-type': 'application/json',
    //         'X-Authorization': token,
    //     },
    //     body: JSON.stringify({ likes: "1"})
    // })
}
