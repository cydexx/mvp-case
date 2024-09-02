import React from "react"
import { SvgXml } from "react-native-svg"

const svg = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_794_981)">
<path d="M15.8925 15.8926C19.1469 12.6382 19.1469 7.36181 15.8925 4.10744C12.6381 0.853075 7.36177 0.853075 4.1074 4.10744C0.853031 7.36181 0.853031 12.6382 4.1074 15.8926C7.36177 19.1469 12.6381 19.1469 15.8925 15.8926Z" stroke="#6B7280" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.64294 12.357L12.357 7.64298" stroke="#6B7280" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.357 12.357V7.64297H7.64294" stroke="#6B7280" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_794_981">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`

export const TakeOffIcon = () => <SvgXml xml={svg} />
