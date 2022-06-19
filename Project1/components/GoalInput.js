import { useState } from "react";
import{
		TextInput,
		StyleSheet,
		View,
		Button,
		Modal,
		Image
} from "react-native";

const GoalInput = ( props ) =>
{ 
	const [ goalInput, setGoalInput ] = useState( "" );
	
	const goalInputHandler = (enteredText) => {
		setGoalInput(enteredText);
	};

	const addGoalHandler = () =>
	{
		if ( !!goalInput ) {
			props.onAddGoal( goalInput );
			setGoalInput( "" );
		}
	};
	
	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={ styles.inputContainer }>
				<Image style={styles.image} source={require("../assets/images/goal.png")} />
				<TextInput
					style={ styles.textInput }
					placeholder="Enter your goal here!"
					onChangeText={ goalInputHandler }
					value={ goalInput }
				/>
				<View style={ styles.buttonContainer }>
					<View style={ styles.button }>
						<Button onPress={ addGoalHandler } title="Add Goal" color={"#b180f0"}/>
					</View>
					<View style={ styles.button }>
						<Button title="Cancel" onPress={props.toggleAddGoalHandler} color={"#f31282"}/>
					</View>
				</View>
			</View >
		</Modal>
	);
};

const styles = StyleSheet.create( {
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		backgroundColor:"#311b6b"
	},
	image: {
		height: 100,
		width: 100,
		margin: 20,
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		width: "100%",
		padding: 8,
		color: "#120438",
		textDecorationLine: "none",
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "80%",
		alignItems: "center",
		marginTop: 16,
	},
	button: {
		width: "35%",
		marginHorizontal: 8,
	}
	
});
export default GoalInput;
