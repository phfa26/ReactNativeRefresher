import {
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";

const GoalItem = ( props ) =>
{ 
	const handleDeleteItem = () =>
	{
		props.onDeleteItem( props.itemData.index);
	}

	return (
		<View style={ styles.goalItem }>
			<Pressable
				android_ripple={ { color: '#210644' } }
				onPress={ handleDeleteItem }
				style={(pressedData) => pressedData.pressed && styles.pressableItem}
			>
		    	<Text style={styles.goalItemText}>{props.itemData.item}</Text>
			</Pressable>
		</View>
    );
};


const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	pressableItem: {
		opacity: 0.5,
	},
	goalItemText: {
		padding: 8,
		color: "white",
	},
});




export default GoalItem;
