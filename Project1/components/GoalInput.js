import {TextInput,StyleSheet} from "react-native";

const GoalInput = ( props ) =>{ 
    return <TextInput style={styles.textInput} placeholder="Enter your goal here!" onChangeText={ props.onChange }/>
};

const styles = StyleSheet.create({
	textInput: {
		borderWidth: 1,
		borderColor: "#cccccc",
		width: "70%",
		marginRight: 8,
		padding: 8,
	},
});
export default GoalInput;
