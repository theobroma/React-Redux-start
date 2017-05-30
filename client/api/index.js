import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
  listComments() {
    return axios.get(`${apiPrefix}/medium`);
  },
  publishComment(data) {
    return axios.post(`${apiPrefix}/medium`,data);
  }
};
