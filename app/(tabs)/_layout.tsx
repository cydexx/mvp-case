import { Tabs } from "expo-router"
import { PlansTabIcon } from "@/components/icons/PlansTabIcon"
import { FlightsTabIcon } from "@/components/icons/FlightsTabIcon"
import { ProfileTabIcon } from "@/components/icons/ProfileTabIcon"

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
