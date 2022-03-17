import { Marker, Popup, MapContainer, TileLayer, useMap } from 'react-leaflet';

import './index.css';

interface Props {
  place: any;
}

function HandleFlyTo(locate) {
  const map = useMap();
  map.flyTo(locate.locate, map.getZoom());

  return (
    <Marker position={locate.locate}>
      <Popup>You are here!</Popup>
    </Marker>
  );
}

function Map({ place }: Props) {
  const initalPlace = { lat: 51.505, lng: -0.09 };

  return (
    <MapContainer center={initalPlace} zoom={13} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {place && <HandleFlyTo locate={place} />}
    </MapContainer>
  );
}

export default Map;
