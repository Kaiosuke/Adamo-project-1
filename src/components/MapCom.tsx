import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position: [number, number] = [21.028511, 105.804817];

function MapCom() {
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "400px", width: "100%", borderRadius: "10px" }}
      className="rounded-2xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Đây là Hà Nội! 🏙️</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapCom;
