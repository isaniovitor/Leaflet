import request from '../request';

export const getPlacepData = async (place: string) => {
  try {
    const response = await request.get({ place });
    return response;
  } catch {
    return null;
  }
};
