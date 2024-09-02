import React, { useState } from "react"
import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
	TextInput,
	Modal,
	Keyboard,
	TouchableWithoutFeedback,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "@/components/Header"
import { Ionicons } from "@expo/vector-icons"
import EmptyState from "@/components/EmptyState"
import { PlansTabIcon } from "@/components/icons"
import { Plan } from "@/types"

export default function PlansScreen() {
	const [plans, setPlans] = useState<Plan[]>([])
	const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null)
	const [modalTitle, setModalTitle] = useState("")
	const [modalDescription, setModalDescription] = useState("")
	const [isModalVisible, setIsModalVisible] = useState(false)

	const addOrUpdatePlan = () => {
		if (modalTitle.trim() !== "") {
			if (selectedPlan) {
				setPlans(
					plans.map((plan) =>
						plan.id === selectedPlan.id
							? {
									...plan,
									title: modalTitle,
									description: modalDescription,
							  }
							: plan
					)
				)
			} else {
				const newPlan: Plan = {
					id: Date.now().toString(),
					title: modalTitle,
					description: modalDescription,
					date: new Date().toLocaleDateString(),
				}
				setPlans([newPlan, ...plans])
			}
			closeModal()
		}
	}

	const removePlan = (id: string) => {
		setPlans(plans.filter((plan) => plan.id !== id))
	}

	const openEditModal = (plan: Plan) => {
		setSelectedPlan(plan)
		setModalTitle(plan.title)
		setModalDescription(plan.description)
		setIsModalVisible(true)
	}

	const closeModal = () => {
		setSelectedPlan(null)
		setModalTitle("")
		setModalDescription("")
		setIsModalVisible(false)
	}

	const renderPlanItem = ({ item }: { item: Plan }) => (
		<TouchableOpacity onPress={() => openEditModal(item)}>
			<View className="bg-white p-4 mb-2 rounded-lg">
				<View className="flex-row justify-between items-center">
					<Text className="text-lg font-semibold">{item.title}</Text>
					<TouchableOpacity onPress={() => removePlan(item.id)}>
						<Ionicons
							name="trash-outline"
							size={24}
							color="#EF4444"
						/>
					</TouchableOpacity>
				</View>
				<Text className="text-sm text-gray-500 mt-1">
					{item.description}
				</Text>
				<Text className="text-xs text-gray-400 mt-2">{item.date}</Text>
			</View>
		</TouchableOpacity>
	)

	return (
		<SafeAreaView className="flex-1 bg-white">
			<Header
				title="Plans"
				buttonFunction={() => setIsModalVisible(true)}
			/>
			{plans.length === 0 ? (
				<EmptyState
					icon={PlansTabIcon({}).props.xml}
					title="No Plans Added Yet"
					description="Let's get started on your jet lag plan! Add your upcoming flights to begin your journey."
					buttonText="Add Plan"
					onButtonPress={() => setIsModalVisible(true)}
				/>
			) : (
				<FlatList
					data={plans}
					renderItem={renderPlanItem}
					keyExtractor={(item) => item.id}
					contentContainerStyle={{ padding: 16 }}
				/>
			)}

			<Modal
				animationType="fade"
				transparent={true}
				visible={isModalVisible}
				onRequestClose={closeModal}
			>
				<TouchableWithoutFeedback onPress={closeModal}>
					<View className="flex-1 justify-center items-center bg-black/50">
						<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
							<View className="bg-white p-4 rounded-2xl w-[90%] max-w-[400px]">
								<Text className="text-2xl font-bold mb-4">
									{selectedPlan
										? "Edit Plan"
										: "Add New Plan"}
								</Text>
								<Text className="text-sm font-semibold mb-1">
									Title
								</Text>
								<TextInput
									className="border border-gray-300 p-2 rounded-lg mb-4 bg-white"
									placeholder="Enter plan title"
									value={modalTitle}
									onChangeText={setModalTitle}
								/>
								<Text className="text-sm font-semibold mb-1">
									Description
								</Text>
								<TextInput
									className="border border-gray-300 p-2 rounded-lg mb-4 bg-white"
									placeholder="Enter plan description"
									value={modalDescription}
									onChangeText={setModalDescription}
									multiline
									numberOfLines={3}
								/>
								<View className="flex-row justify-end">
									<TouchableOpacity
										onPress={closeModal}
										className="mr-2 bg-gray-200 px-4 py-2 rounded-lg"
									>
										<Text>Cancel</Text>
									</TouchableOpacity>
									<TouchableOpacity
										onPress={addOrUpdatePlan}
										className="bg-[#EA580C] px-4 py-2 rounded-lg"
									>
										<Text className="text-white">
											{selectedPlan ? "Update" : "Add"}{" "}
											Plan
										</Text>
									</TouchableOpacity>
								</View>
							</View>
						</TouchableWithoutFeedback>
					</View>
				</TouchableWithoutFeedback>
			</Modal>
		</SafeAreaView>
	)
}
