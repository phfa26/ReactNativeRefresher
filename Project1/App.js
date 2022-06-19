import { useState } from "react";
import {
	StyleSheet,
	View,
	Button,
	FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

const App = () => {
	const [goalInput, setGoalInput] = useState("");
	const [goals, setGoals] = useState([]);

	const goalInputHandler = (enteredText) => {
		setGoalInput(enteredText);
	};
	const addGoalHandler = () => {
		setGoals((currentGoals) => [...currentGoals, goalInput]);
	};

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<GoalInput onChange={ goalInputHandler } />
				<Button onPress={addGoalHandler} title="Add Goal"></Button>
			</View>
			<View style={styles.goalsContainer}>
				<FlatList
					alwaysBounceVertical={false}
					data={goals}
					keyExtractor={(item, index) => {
						return index;
					}}
					renderItem={(itemData) => {
						return (
							<GoalItem item={itemData.item}/>
						);
					}}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	appContainer: {
		paddingTop: 50,
		paddingHorizontal: 16,
		flex: 1,
	},
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: "#cccccc",
	},
	goalsContainer: {
		flex: 5,
	},
});

export default App;
