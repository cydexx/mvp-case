import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { SvgXml } from "react-native-svg"
import { HeaderProps } from "@/types"

const plusIcon = `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12.5H19" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5.5V19.5" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`

export default function Header({ buttonFunction, title }: HeaderProps) {
	return (
		<View className="flex-row justify-between items-center px-4 pt-[3px] pb-2">
			<Text className="text-[34px] leading-[41px] font-bold">
				{title}
			</Text>
			{buttonFunction && (
				<TouchableOpacity onPress={buttonFunction} className="p-2">
					<SvgXml xml={plusIcon} />
				</TouchableOpacity>
			)}
		</View>
	)
}
