import api from './api';

interface ParamsProps {
  place: string;
}

export default {
  async get(params?: ParamsProps) {
    const url = `/?addressdetails=1&format=json&limit=1&q=${
      params ? `${params.place}` : ''
    }`;

    return api.get(url);
  },
};
