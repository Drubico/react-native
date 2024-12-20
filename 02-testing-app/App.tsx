import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Hello word</Text>
			<StatusBar style="dark" />
			<Image source={require("./assets/favicon.png")} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
