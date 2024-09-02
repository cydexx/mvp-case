import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { SvgXml } from "react-native-svg"

import { EmptyStateProps } from "@/types"

export default function EmptyState({
	icon,
	title,
	description,
	buttonText,
	onButtonPress,
}: EmptyStateProps) {
	return (
		<View className="flex-1 justify-center items-center p-4 space-y-6">
			<View className="flex flex-col items-center space-y-4 ">
				<SvgXml xml={icon} width={28} height={28} />
				<View className="flex flex-col items-center space-y-2 px-4">
					<Text className="text-[#111827] font-bold text-[22px] leading-[28px] ">
						{title}
					</Text>
					<Text className="text-[#4B5563] text-[17px] leading-[22px] text-center max-w-[400px]">
						{description}
					</Text>
				</View>
			</View>
			<TouchableOpacity
				onPress={onButtonPress}
				className="bg-[#EA580C] px-5 py-3 rounded-[14px] "
			>
				<Text className="text-white font-semibold">{buttonText}</Text>
			</TouchableOpacity>
		</View>
	)
}
