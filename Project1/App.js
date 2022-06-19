import { useState } from "react";
import {
	StyleSheet,
	View,
	FlatList,
	Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

const App = () => {
	const [ goals, setGoals ] = useState( [] );
	const [ showModal, setShowModal ] = useState( false );

	const addGoalHandler = (goalInput) => {
		setGoals( ( currentGoals ) => [ ...currentGoals, goalInput ] );
		toggleModal();
	};

	const toggleModal = () =>
	{
		setShowModal(!showModal);
	}

	const deleteGoalHandler = ( goalIndex ) =>
	{
		return setGoals( ( currentGoals ) =>
		{
			let current = [...currentGoals];
			current.splice( goalIndex, 1 );
			return current;
		} );
	}

	return (
		<>
			<StatusBar style="light" />
			<View style={styles.appContainer}>
				<Button title="Add New Goal" color="#a065ec" onPress={toggleModal} />
				<GoalInput
					onAddGoal={addGoalHandler}
					visible={showModal}
					toggleAddGoalHandler={toggleModal}
				/>
				<View style={styles.goalsContainer}>
					<FlatList
						alwaysBounceVertical={false}
						data={goals}
						keyExtractor={(item, index) => {
							return index;
						}}
						renderItem={(itemData) => {
							return (
								<GoalItem
									itemData={itemData}
									onDeleteItem={deleteGoalHandler}
								/>
							);
						}}
					/>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	appContainer: {
		paddingTop: 50,
		paddingHorizontal: 16,
		flex: 1,
	},
	goalsContainer: {
		flex: 5,
	},
});

export default App;
