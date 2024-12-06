import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
	label: string;

	position?: "left" | "right";
	// Methods
	onPress?: () => void;
	onLongPress?: () => void;
}

export default function FAB({ label, onPress, onLongPress, position }: Props) {
	return (
		<Pressable
			onPress={onPress}
			onLongPress={onLongPress}
			style={({ pressed }) => [styles.floatingButton, position == "right" ? styles.positionRight : styles.positionLeft, pressed ? { opacity: 0.5 } : { opacity: 1 }]}
		>
			<Text style={{ color: "white", fontSize: 20 }}>{label}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	floatingButton: {
		position: "absolute",
		bottom: 20,
		backgroundColor: "#65558F",
		padding: 20,
		borderRadius: 15,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		elevation: 3,
	},
	positionRight: {
		right: 20,
	},
	positionLeft: {
		left: 20,
	},
});
