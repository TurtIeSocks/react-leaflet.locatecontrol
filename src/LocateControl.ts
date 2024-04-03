import 'leaflet.locatecontrol'
import { createControlComponent } from '@react-leaflet/core'
import { control } from 'leaflet'

export interface LocateControlProps
  extends Omit<L.Control.LocateOptions, 'position'> {
  position?: L.ControlOptions['position']
}

export const LocateControl = createControlComponent<
  L.Control.Locate,
  LocateControlProps
>((props) => control.locate(props))
