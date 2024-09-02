import React from "react"
import {
	Modal,
	View,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	ImageBackground,
} from "react-native"
import { TurkishAirlinesIcon } from "./icons/AirlineIcon"
import { TakeOffIcon } from "./icons/TakeOffIcon"
import { LandingIcon } from "./icons/LandingIcon"
import { FlightCardPlaneIcon } from "./icons/FlightCardPlaneIcon"
import { formatTimeToAMPM } from "@/utils/timeUtils"
import { FlightModalProps } from "@/types"

export default function FlightModal({
	isVisible,
	onClose,
	flight,
	onRemoveFlight,
}: FlightModalProps) {
	const handleRemoveFlight = () => {
		onRemoveFlight(flight.id) // Uçuşu silme işlevi çağrılıyor
		onClose() // Modal'ı kapatıyoruz
	}
	const formattedDepartureTime = flight.departureTime
	const formattedArrivalTime = flight.arrivalTime
	return (
		<Modal visible={isVisible} transparent={true} animationType="fade">
			<TouchableWithoutFeedback onPress={onClose}>
				<View className="flex-1 justify-center items-center  bg-[#374151]/60 p-4 space-y-4">
					<TouchableWithoutFeedback>
						<View className=" bg-white rounded-[14px] border-[#E5E7EB] border-[0.5px] p-4  w-full max-w-[400px] ">
							{/* Used margin for right and left points */}
							<View className="flex-row justify-between items-center mb-4">
								<View className="flex-row items-center space-x-2">
									<TurkishAirlinesIcon
										width={24}
										height={24}
									/>
									<Text className="font-semibold text-[#6B7280] text-[13px] leading-[18px] ">
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
								<View className=" space-y-2">
									<View className="flex-row items-center space-x-1">
										<TakeOffIcon />
										<Text className="text-[#6B7280] text-[13px] leading-[18px]">
											{flight.departureDate}
										</Text>
									</View>
									<Text className="text-[20px] leading-[25px] font-semibold">
										{flight.departureCity}
									</Text>
									<Text className="text-[#374151] text-[13px] leading-[18px] font-semibold ">
										{formattedDepartureTime}
									</Text>
								</View>
								<FlightCardPlaneIcon />
								<View className="flex flex-col  space-y-2 items-end">
									<View className="flex-row items-center space-x-1">
										<LandingIcon />
										<Text className="text-[#6B7280] text-[13px] leading-[18px]">
											{flight.arrivalDate}
										</Text>
									</View>
									<Text className="text-[20px] leading-[25px] font-semibold">
										{flight.arrivalCity}
									</Text>
									<Text className="text-[#374151] text-[13px] leading-[18px] font-semibold">
										{formattedArrivalTime}
									</Text>
								</View>
							</View>

							{/* Right dot  */}
							<View className="absolute right-[-8px] transform translate-y-2 top-1/2 w-4 h-4 rounded-full bg-[#878D97]" />
							{/* Left dot */}
							<View className="absolute left-[-8px] transform translate-y-2 top-1/2 w-4 h-4 rounded-full bg-[#878D97]" />
						</View>
					</TouchableWithoutFeedback>
					<TouchableOpacity
						onPress={handleRemoveFlight}
						className="bg-[#FEE2E2] w-full py-[14px] px-5 rounded-[14px] max-w-[400px]"
					>
						<Text className="text-[#7F1D1D] font-semibold text-[17px] leading-[22px] text-center">
							Remove Flight
						</Text>
					</TouchableOpacity>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	)
}
