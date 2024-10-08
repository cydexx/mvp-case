import React from "react"
import { SvgXml } from "react-native-svg"

const svg = `
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5417 20L16.6667 11.4583L20.3125 7.8125C21.875 6.25 22.3958 4.16667 21.875 3.125C20.8333 2.60417 18.75 3.125 17.1875 4.6875L13.5417 8.33333L5 6.45833C4.47917 6.35417 4.0625 6.5625 3.85417 6.97917L3.54167 7.5C3.33333 8.02083 3.4375 8.54167 3.85417 8.85417L9.375 12.5L7.29167 15.625H4.16667L3.125 16.6667L6.25 18.75L8.33333 21.875L9.375 20.8333V17.7083L12.5 15.625L16.1458 21.1458C16.4583 21.5625 16.9792 21.6667 17.5 21.4583L18.0208 21.25C18.4375 20.9375 18.6458 20.5208 18.5417 20Z" stroke="#111827" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`

export const FlightsTabIcon = ({ width = 24, height = 24 }) => (
	<SvgXml xml={svg} width={width} height={height} />
)
