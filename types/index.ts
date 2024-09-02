// Flight tipi
export type Flight = {
	id: string
	airline: string
	flightNumber: string
	departureCity: string
	arrivalCity: string
	departureTime: string
	arrivalTime: string
	departureDate: string
	arrivalDate: string
	duration: string
}

// Plan tipi
export type Plan = {
	id: string
	title: string
	description: string
	date: string
}

// FlightModalProps tipi
export type FlightModalProps = {
	isVisible: boolean
	onClose: () => void
	flight: Flight
	onRemoveFlight: (flightId: string) => void
}

// FlightCardProps tipi
export type FlightCardProps = {
	flight: Flight
	onRemove: (id: string) => void
	onPress: () => void
	isRemoving: boolean
	isNew: boolean
}

// HeaderProps tipi
export type HeaderProps = {
	buttonFunction?: () => void
	title: string
}

// EmptyStateProps tipi
export type EmptyStateProps = {
	icon: string
	title: string
	description: string
	buttonText: string
	onButtonPress: () => void
}
