import { formatDate, formatTimeToAMPM } from "./timeUtils"
import { Flight } from "@/types"

const cities = [
	"Istanbul",
	"New York",
	"Tokyo",
	"London",
	"Paris",
	"Dubai",
	"Sydney",
	"Moscow",
	"Beijing",
	"Rome",
]

function generateFlightTimes(): {
	departureTime: string
	arrivalTime: string
	duration: string
} {
	const depMinutes = Math.floor(Math.random() * 288) * 5
	const depHours = Math.floor(depMinutes / 60)
	const depMins = depMinutes % 60

	const durationMinutes = Math.floor(Math.random() * 57) * 5 + 30

	const arrMinutes = (depMinutes + durationMinutes) % 1440
	const arrHours = Math.floor(arrMinutes / 60)
	const arrMins = arrMinutes % 60

	const departureTime = `${depHours.toString().padStart(2, "0")}:${depMins
		.toString()
		.padStart(2, "0")}`
	const arrivalTime = `${arrHours.toString().padStart(2, "0")}:${arrMins
		.toString()
		.padStart(2, "0")}`

	const durationHours = Math.floor(durationMinutes / 60)
	const durationMinutesRemainder = durationMinutes % 60
	const duration = `${durationHours}h ${durationMinutesRemainder}m`

	return { departureTime, arrivalTime, duration }
}

export const generateRandomFlight = (): Flight => {
	let departureCity, arrivalCity
	do {
		departureCity = cities[Math.floor(Math.random() * cities.length)]
		arrivalCity = cities[Math.floor(Math.random() * cities.length)]
	} while (departureCity === arrivalCity)

	const { departureTime, arrivalTime, duration } = generateFlightTimes()

	const departureDate = new Date(2024, 8, Math.floor(Math.random() * 30) + 1)
	const arrivalDate = new Date(departureDate)
	const [durationHours, durationMinutes] = duration.split("h ")
	arrivalDate.setHours(arrivalDate.getHours() + parseInt(durationHours))
	arrivalDate.setMinutes(arrivalDate.getMinutes() + parseInt(durationMinutes))

	return {
		id: Date.now().toString(),
		airline: "Turkish Airlines",
		flightNumber: "TK" + Math.floor(1000 + Math.random() * 9000),
		departureCity,
		arrivalCity,
		departureTime: formatTimeToAMPM(departureTime),
		arrivalTime: formatTimeToAMPM(arrivalTime),
		departureDate: formatDate(departureDate),
		arrivalDate: formatDate(arrivalDate),
		duration,
	}
}
