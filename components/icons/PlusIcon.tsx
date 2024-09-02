import React from "react"
import { SvgXml } from "react-native-svg"

const svg = `
<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12.5H19" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5.5V19.5" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`

export const PlusIcon = () => <SvgXml xml={svg} />
