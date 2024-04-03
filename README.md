# react-leaflet.locatecontrol

[![npm version](https://badge.fury.io/js/@turtlesocks%2Freact-leaflet.locatecontrol.svg)](https://badge.fury.io/js/@turtlesocks%2Freact-leaflet.locatecontrol)

Basic React wrapper for the [Leaflet Locate Control Plugin](https://github.com/domoritz/leaflet-locatecontrol)

## [Demo Page](https://turtiesocks.github.io/react-leaflet.locatecontrol/)

## Installation

Add Peer Dependencies:

```bash
  // npm
  npm i react-leaflet leaflet.locatecontrol

  // yarn
  yarn add react-leaflet leaflet.locatecontrol

  // pnpm
  pnpm add react-leaflet leaflet.locatecontrol
```

Add React Leaflet.LocateControl:

```bash
  // npm
  npm i @turtlesocks/react-leaflet.locatecontrol

  // yarn
  yarn add @turtlesocks/react-leaflet.locatecontrol

  // pnpm
  pnpm add @turtlesocks/react-leaflet.locatecontrol
```

## Usage

```tsx
import * as React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { LocateControl } from '@turtlesocks/react-leaflet.locatecontrol'

import 'leaflet/dist/leaflet.css'
// You still need to import the CSS from the original plugin
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css'

function App() {
  return (
    <MapContainer center={[40.777455, -73.969036]} zoom={15}>
      <TileLayer
        attribution="Map data Â© <a href='https://www.openstreetmap.org'>OpenStreetMap</a> contributors"
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
      />
      <LocateControl metric position="bottomleft" />
    </MapContainer>
  )
}
```

## Props

Respects all of the properties typed by the [original plugin](https://github.com/domoritz/leaflet-locatecontrol)

## Contributing

- `pnpm run start` to start the Vite dev server with HMR enabled.
- With VS Code you can open a debugger in Chrome for IDE debugging
