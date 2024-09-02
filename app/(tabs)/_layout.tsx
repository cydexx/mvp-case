import { Tabs } from "expo-router"
import {
	PlansTabIcon,
	FlightsTabIcon,
	ProfileTabIcon,
} from "@/components/icons"

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#111827",
				tabBarInactiveTintColor: "#6B7280",
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Plans",
					tabBarIcon: () => <PlansTabIcon />,
				}}
			/>
			<Tabs.Screen
				name="flights"
				options={{
					title: "Flights",

					tabBarIcon: () => <FlightsTabIcon />,
				}}
			/>
			<Tabs.Screen
				name="me"
				options={{
					title: "Me",
					tabBarIcon: () => <ProfileTabIcon />,
				}}
			/>
		</Tabs>
	)
}
