import React from "react"
import { SvgXml } from "react-native-svg"

const svg = `
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 20.8333C18.75 19.1757 18.0915 17.586 16.9194 16.4139C15.7473 15.2418 14.1576 14.5833 12.5 14.5833C10.8424 14.5833 9.25269 15.2418 8.08058 16.4139C6.90848 17.586 6.25 19.1757 6.25 20.8333" stroke="#6B7280" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 14.5833C14.8012 14.5833 16.6667 12.7179 16.6667 10.4167C16.6667 8.11548 14.8012 6.25 12.5 6.25C10.1988 6.25 8.33334 8.11548 8.33334 10.4167C8.33334 12.7179 10.1988 14.5833 12.5 14.5833Z" stroke="#6B7280" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 22.9167C18.253 22.9167 22.9167 18.253 22.9167 12.5C22.9167 6.74704 18.253 2.08334 12.5 2.08334C6.74704 2.08334 2.08334 6.74704 2.08334 12.5C2.08334 18.253 6.74704 22.9167 12.5 22.9167Z" stroke="#6B7280" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`

export const ProfileTabIcon = ({ width = 24, height = 24 }) => (
	<SvgXml xml={svg} width={width} height={height} />
)
