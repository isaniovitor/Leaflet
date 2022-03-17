import { getPlacepData } from '../../../services/placeMap';

export async function fetchData(place, setSearchedLocation) {
  try {
    const request = await getPlacepData(place);

    if (request.status >= 200 && request.status < 300) {
      setSearchedLocation({
        lat: request?.data[0].lat,
        lng: request?.data[0].lon,
      });
    }
  } catch {
    // ...
  }
}
