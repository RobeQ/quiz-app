import axios, { AxiosResponse } from 'axios';

const api = axios.create({
  timeout: 1000,
});

const get = async (url: string, responseFn: (res: AxiosResponse) => void) =>
  await api
    .get(url)
    .then(responseFn)
    .catch((error) => console.log(error));

export { get };

export const GET_QUIZ_URL = (id: number) => `/quiz/${id}`;
