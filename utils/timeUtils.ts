export const formatTimeToAMPM = (time: string) => {
	const [hours, minutes] = time.split(":")
	const hoursNum = parseInt(hours, 10)
	const ampm = hoursNum >= 12 ? "PM" : "AM"
	const formattedHours = hoursNum % 12 || 12
	return `${formattedHours}:${minutes} ${ampm}`
}

export const formatDate = (date: Date): string => {
	return date.toLocaleDateString("en-US", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	})
}
