import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const getAll = () => request.get(`${baseUrl}/offers`)

export const getMyOffers = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);

    return request.get(`${baseUrl}/offers?where=${query}`);
};

export const create = async (offerData, token) => {
    let response = await fetch(`${baseUrl}/offers`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...offerData, likes: []})
    });

    let result = await response.json();

    return result;
};

export const update = (offerId, offerData) => request.put(`${baseUrl}/offers/${offerId}`, offerData);

export const getOne = (offerId, signal) => {
    return fetch(`${baseUrl}/offers/${offerId}`, { signal })
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

export const like = (offerId, offer, token) => {
    return fetch(`${baseUrl}/offers/${offerId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(offer)
    }).then(res => res.json());
};