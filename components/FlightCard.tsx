import React from "react"
import { View, Text, TouchableOpacity } from "react-native"

import {
	TurkishAirlinesIcon,
	FlightCardPlaneIcon,
	TakeOffIcon,
	LandingIcon,
} from "@/components/icons"

import { FlightCardProps } from "@/types"

export default function FlightCard({
	flight,
	onRemove,
	onPress,
}: FlightCardProps) {
	const formattedDepartureTime = flight.departureTime
	const formattedArrivalTime = flight.arrivalTime
	return (
		<TouchableOpacity
			onPress={onPress}
			className="bg-white rounded-[14px] border-[0.5px] border-[#E5E7EB]  p-4 gap-4 mb-4 "
		>
			<View className="flex-row justify-between items-center ">
				<View className="flex-row items-center space-x-2">
					<TurkishAirlinesIcon width={24} height={24} />
					<Text className="font-semibold text-[#6B7280] text-xs">
						{flight.flightNumber} • {flight.airline}
					</Text>
				</View>
				<View className="flex-row items-center bg-[#FFF7ED]  rounded-[7px] px-[10px] py-1  border-[#FED7AA] border-[0.5px]">
					<Text className="text-[#C2410C] text-xs">
						{flight.duration}
					</Text>
				</View>
			</View>
			<View className="flex-row justify-between items-center ">
				<View>
					<View className="flex-row items-center space-x-1">
						<TakeOffIcon />
						<Text className="text-[#6B7280] text-xs">
							{flight.departureDate}
						</Text>
					</View>
					<Text className="text-xl font-semibold">
						{flight.departureCity}
					</Text>
					<Text className="text-[#374151] text-xs font-semibold ">
						{formattedDepartureTime}
					</Text>
				</View>
				<FlightCardPlaneIcon />
				<View className="flex flex-col items-end">
					<View className="flex-row items-center space-x-1">
						<LandingIcon />
						<Text className="text-[#6B7280] text-xs">
							{flight.arrivalDate}
						</Text>
					</View>
					<Text className="text-xl font-semibold">
						{flight.arrivalCity}
					</Text>
					<Text className="text-[#374151] text-xs font-semibold">
						{formattedArrivalTime}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}
