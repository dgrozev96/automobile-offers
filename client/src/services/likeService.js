import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const like = (userId, offerId) => request.post(`${baseUrl}/likes`, {userId, offerId});
export const getOfferLikes = (offerId) => {
    const query = encodeURIComponent(`offerId="${offerId}"`);

    return request.get(`${baseUrl}/likes?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId));
};