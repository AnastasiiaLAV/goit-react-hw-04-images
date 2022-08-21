import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '28097205-76b692db46bdf0121d0cf888f';

export default async function getImages(query, page) {
  const SEARH_PARAMS = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page,
    q: query,
  };

  const response = await axios.get(API_URL, {
    params: SEARH_PARAMS,
  });

  return response.data;
}