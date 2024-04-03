import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { MapContainer, TileLayer } from 'react-leaflet'

import { LocateControl } from '../src'

import 'leaflet/dist/leaflet.css'
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css'

function App() {
  return (
    <MapContainer center={[40.777455, -73.969036]} zoom={15}>
      <TileLayer
        attribution="Map data Â© <a href='https://www.openstreetmap.org'>OpenStreetMap</a> contributors"
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
      />
      <LocateControl />
    </MapContainer>
  )
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(<App />)
