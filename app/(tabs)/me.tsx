import React from "react"
import { View, Text, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "@/components/Header"

export default function ProfileScreen() {
	return (
		<SafeAreaView className="flex-1 bg-white">
			<Header title="Profile" />

			<View className="items-center py-6">
				<Image
					src="https://github.com/cydexx.png"
					className="w-24 h-24 rounded-full mb-4"
				/>
				<Text className="text-2xl font-bold">Berke Diler</Text>
				<Text className="text-gray-500">cydex@icloud.com</Text>
			</View>
		</SafeAreaView>
	)
}
