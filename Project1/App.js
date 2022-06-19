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
			<GoalInput onChange={ goalInputHandler } onPress={addGoalHandler} />
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
	goalsContainer: {
		flex: 5,
	},
});

export default App;
