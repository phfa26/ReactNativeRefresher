import { TextInput, StyleSheet, View, Button } from "react-native";

const GoalInput = ( props ) =>
{ 
	
	return (
		<View style={ styles.inputContainer }>
			<TextInput style={ styles.textInput } placeholder="Enter your goal here!" onChangeText={ props.onChange } />
			<Button onPress={ props.onPress } title="Add Goal"></Button>
		</View >
	)
};

const styles = StyleSheet.create({
	textInput: {
		borderWidth: 1,
		borderColor: "#cccccc",
		width: "70%",
		marginRight: 8,
		padding: 8,
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
});
export default GoalInput;
