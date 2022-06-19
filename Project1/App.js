import { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	FlatList,
} from "react-native";

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
				<TextInput
					style={styles.textInput}
					placeholder="Enter your goal here!"
					onChangeText={goalInputHandler}
				></TextInput>
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
							<View style={styles.goalItem}>
								<Text style={styles.goalItemText}>{itemData.item}</Text>
							</View>
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
	textInput: {
		borderWidth: 1,
		borderColor: "#cccccc",
		width: "70%",
		marginRight: 8,
		padding: 8,
	},
	goalsContainer: {
		flex: 5,
	},
	goalItem: {
		margin: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	goalItemText: {
		color: "white",
	},
});

export default App;
