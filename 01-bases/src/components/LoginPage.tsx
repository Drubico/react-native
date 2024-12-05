import { useAuthcontext } from "../context/AuthContext";

export const LoginPage = () => {
	const { isChecking } = useAuthcontext();

	if (isChecking) {
		return (
			<div>
				<h3>Login</h3>
				<span>Checking...</span>
			</div>
		);
	}

	return (
		<div>
			<h3>Login</h3>
		</div>
	);
};
