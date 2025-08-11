"use client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
// Provide a typed shape for the private `_getIconUrl` to avoid `any`.
type IconDefaultPrototypeWithGetIcon = {
  _getIconUrl?: unknown
}
// Remove the private method so we can provide custom icon URLs.
delete (L.Icon.Default.prototype as unknown as IconDefaultPrototypeWithGetIcon)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const LeafletMap = () => {
  const position: [number, number] = [6.524379, 3.379206]; // Lagos, Nigeria coordinates

  return (
    <MapContainer
      center={position}
      zoom={17}
      className="w-full h-[80vh] rounded-lg z-0"
      style={{ height: '80vh', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        
      />
      <Marker position={position}>
        <Popup>
          Your location marker
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;