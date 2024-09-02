import React from "react"
import { SvgXml } from "react-native-svg"

const svg = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_794_995)">
<path d="M4.10744 15.8925C7.36181 19.1469 12.6382 19.1469 15.8926 15.8925C19.1469 12.6382 19.1469 7.3618 15.8926 4.10743C12.6382 0.853062 7.36181 0.853061 4.10744 4.10743C0.853074 7.3618 0.853074 12.6382 4.10744 15.8925Z" stroke="#6B7280" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.64294 7.64297L12.357 12.357" stroke="#6B7280" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.64301 12.357L12.3571 12.357L12.3571 7.64297" stroke="#6B7280" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_794_995">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`

export const LandingIcon = ({ width = 24, height = 24 }) => (
	<SvgXml xml={svg} width={width} height={height} />
)
