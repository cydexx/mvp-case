import React, { useState } from "react"
import { View, FlatList } from "react-native"
import FlightModal from "@/components/FlightModal"
import EmptyState from "@/components/EmptyState"
import FlightCard from "@/components/FlightCard"
import Header from "@/components/Header"
import { SafeAreaView } from "react-native-safe-area-context"
import { FlightsTabIcon } from "@/components/icons"
import { generateRandomFlight } from "@/utils/flightUtils"

import { Flight } from "@/types"

export default function FlightsScreen() {
	const [flights, setFlights] = useState<Flight[]>([])
	const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null)
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [removingFlightId, setRemovingFlightId] = useState<string | null>(
		null
	)

	const addFlight = () => {
		const newFlight = generateRandomFlight()
		setFlights([newFlight, ...flights])
	}

	const removeFlight = (id: string) => {
		setRemovingFlightId(id)
		setTimeout(() => {
			setFlights(flights.filter((flight) => flight.id !== id))
			setRemovingFlightId(null)
		}, 300)
	}

	const openFlightModal = (flight: Flight) => {
		setSelectedFlight(flight)
		setIsModalVisible(true)
	}

	const closeFlightModal = () => {
		setIsModalVisible(false)
		setSelectedFlight(null)
	}

	return (
		<SafeAreaView className="flex-1 bg-white">
			<Header buttonFunction={addFlight} title="Flights" />
			<View className="flex-1">
				{flights.length === 0 ? (
					<EmptyState
						icon={FlightsTabIcon({}).props.xml}
						title="No Flights Added Yet"
						description="Let's get started on your jet lag plan! Add your upcoming flights to begin your journey."
						buttonText="Add Flight"
						onButtonPress={addFlight}
					/>
				) : (
					<FlatList
						data={flights}
						className="flex-1"
						keyExtractor={(item: Flight) => item.id}
						ItemSeparatorComponent={() => (
							<View style={{ height: 16 }} />
						)}
						renderItem={({ item }: { item: Flight }) => (
							<FlightCard
								flight={item}
								onRemove={removeFlight}
								onPress={() => openFlightModal(item)}
								isRemoving={removingFlightId === item.id}
							/>
						)}
						style={{ padding: 16 }}
					/>
				)}
			</View>
			{selectedFlight && (
				<FlightModal
					isVisible={isModalVisible}
					onClose={closeFlightModal}
					flight={selectedFlight}
					onRemoveFlight={removeFlight}
				/>
			)}
		</SafeAreaView>
	)
}
