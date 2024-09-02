import React from "react"
import { SvgXml } from "react-native-svg"

const svg = `
<svg width="106" height="35" viewBox="0 0 106 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="17.0294" x2="104.682" y2="17.0294" stroke="#E5E7EB" stroke-linecap="round" stroke-dasharray="4 4"/>
<g clip-path="url(#clip0_814_56)">
<path d="M51.51 26.6924L56.0355 19.6213H60.9853C63.1066 19.6213 64.8744 18.5607 65.2279 17.5C64.8744 16.4393 63.1066 15.3787 60.9853 15.3787H56.0355L51.51 8.30761C51.2272 7.88335 50.8029 7.74193 50.3787 7.88335L49.813 8.02477C49.318 8.2369 49.0352 8.66117 49.1059 9.15614L50.3787 15.3787L46.8431 16.0858L44.7218 13.9645H43.3076L44.0147 17.5L43.3076 21.0355H44.7218L46.8431 18.9142L50.3787 19.6213L49.1059 25.8439C49.0352 26.3388 49.318 26.7631 49.813 26.9752L50.308 27.1874C50.8029 27.2581 51.2272 27.1167 51.51 26.6924Z" fill="white" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_814_56">
<rect width="24" height="24" fill="white" transform="translate(52.5 0.529438) rotate(45)"/>
</clipPath>
</defs>
</svg>



`

export const FlightCardPlaneIcon = () => <SvgXml xml={svg} />
