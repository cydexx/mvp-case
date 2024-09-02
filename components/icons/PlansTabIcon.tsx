import React from "react"
import { SvgXml } from "react-native-svg"

const svg = `
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.125 10.4167H21.875V6.24999C21.875 5.69746 21.6555 5.16755 21.2648 4.77685C20.8741 4.38615 20.3442 4.16666 19.7917 4.16666H5.20833C4.6558 4.16666 4.12589 4.38615 3.73519 4.77685C3.34449 5.16755 3.125 5.69746 3.125 6.24999V20.8333C3.125 21.3859 3.34449 21.9158 3.73519 22.3065C4.12589 22.6972 4.6558 22.9167 5.20833 22.9167H12.5" stroke="#6B7280" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.33331 2.08334V6.25001" stroke="#6B7280" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.6667 2.08334V6.25001" stroke="#6B7280" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.1771 15.3125C21.8221 14.9593 21.3704 14.7193 20.8791 14.6229C20.3877 14.5265 19.8788 14.578 19.4167 14.7708C19.1042 14.8958 18.8229 15.0833 18.5833 15.3229L18.2292 15.6771L17.8646 15.3229C17.5108 14.968 17.0596 14.726 16.5682 14.6277C16.0768 14.5295 15.5673 14.5793 15.1042 14.7708C14.7917 14.8958 14.5208 15.0833 14.2813 15.3229C13.2917 16.3021 13.2396 17.9583 14.4896 19.2188L18.2292 22.9167L21.9792 19.2188C23.2292 17.9583 23.1667 16.3021 22.1771 15.3229V15.3125Z" stroke="#6B7280" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`

export const PlansTabIcon = ({ width = 25, height = 25 }) => (
	<SvgXml xml={svg} width={width} height={height} />
)
