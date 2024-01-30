import axios from "axios";
import { CAR_API_KEY, BASE_URL } from "./utils/data";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': CAR_API_KEY,
  },
});

export const getCars = async (limit: number = 10) => {
  try {
    const res = await api.get('/images/search', {
      params: { limit },
    });
    return res.data;
  } catch (error) {
    console.log('Ошибка в получении котических изображений', error);
    throw error;
  }
};

export const addFavouriteCar = async (catId: string) => {
  try {
    const res = await api.post('/favourites', {
      'image_id': catId,
    });
    return res.data
  } catch (error) {
    console.log('Ошибка отправки котика на сервер', error);
    throw error;
  }
}

export const getFavouriteCars = async (catId: string) => {
  try {
    const res = await api.get('/favourites');
    return res.data;
  } catch (error) {
    console.log('Ошибка получения любимых котиков', error);
    throw error;
  }
}