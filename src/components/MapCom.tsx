import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { memo } from 'react'

const position: [number, number] = [30.028511, 105.804817]

function MapCom({ coordinates = position }: { coordinates?: [number, number] }) {
  return (
    <div className="sub-2-container">
      <MapContainer
        center={coordinates}
        zoom={13}
        style={{ height: '400px', width: '100%', borderRadius: '10px' }}
        className="rounded-2xl"
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}>
          <Popup>Đây là Hà Nội! 🏙️</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default memo(MapCom)
