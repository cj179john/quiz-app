import axios from 'axios';
import config from '../config';
import { multiClientMiddleware } from 'redux-axios-middleware';

const clients = {
  api: {
    client: axios.create({
      baseURL: `${config.api.url}/api`,
      responseType: 'json'
    })
  },
};

export const axiosMiddleware = multiClientMiddleware(clients);