import React from "react"
import { SvgXml } from "react-native-svg"

const svg = `
<svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.51004 20.6924L14.0355 13.6213H18.9853C21.1066 13.6213 22.8744 12.5607 23.2279 11.5C22.8744 10.4393 21.1066 9.37868 18.9853 9.37868H14.0355L9.51004 2.30761C9.22719 1.88335 8.80293 1.74193 8.37867 1.88335L7.81298 2.02477C7.31801 2.2369 7.03516 2.66117 7.10587 3.15614L8.37867 9.37868L4.84313 10.0858L2.72181 7.96447H1.3076L2.0147 11.5L1.3076 15.0355H2.72181L4.84313 12.9142L8.37867 13.6213L7.10587 19.8439C7.03516 20.3388 7.318 20.7631 7.81298 20.9752L8.30795 21.1874C8.80293 21.2581 9.22719 21.1167 9.51004 20.6924Z" fill="white" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


`

export const FlightCardPlaneIcon = ({ width = 24, height = 24 }) => (
	<SvgXml xml={svg} width={width} height={height} />
)
