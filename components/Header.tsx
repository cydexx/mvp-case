import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { HeaderProps } from "@/types"
import { PlusIcon } from "./icons"

export default function Header({ buttonFunction, title }: HeaderProps) {
	return (
		<View className="flex-row justify-between items-center px-4 pt-[3px] pb-2">
			<Text className="text-[34px] leading-[41px] font-bold">
				{title}
			</Text>
			{buttonFunction && (
				<TouchableOpacity onPress={buttonFunction} className="p-2">
					<PlusIcon />
				</TouchableOpacity>
			)}
		</View>
	)
}
